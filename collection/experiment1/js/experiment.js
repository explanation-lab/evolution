(async () => {
'use strict';

const EXPERIMENT_VERSION = '1.0.0';
const EVOLUTION_VERSION = EXPERIMENT_VERSION;
const CONDITION_ASSIGNMENT = 'within_participant';
const INTERNAL_FACTORS = ['case', 'response_species'];
const CONDITION_CELLS = {
  duck_webbed_feet: {},
  giraffe_long_neck: {},
  cheetah_gazelle_speed: {},
  moth_bird_camouflage: {},
  goat_horizontal_pupils: {},
  silver_ant_hairs: {}
};
const { default: createExplanationLabClient } = await import('./explanation-lab-client.js');
const explanationLab = await createExplanationLabClient();
const studyStartedAt = performance.now();
let consented = false;
let completed = false;
let saving = false;
let saved = false;
const jsPsych = initJsPsych({
  display_element: 'study',
  on_finish: async () => {
    // abortExperiment also calls this handler; refusal must never upload data.
    if (!consented || !completed) return;
    await saveCompletedStudy();
  }
});

async function saveCompletedStudy() {
  if (saving || saved) return;
  saving = true;
  document.getElementById('study').innerHTML = '<section class="screen instructions" role="status"><h1>Saving your responses</h1><p>Please keep this window open while your responses are saved.</p></section>';
  try {
    const result = await explanationLab.submitAndRedirect(jsPsych.data.get(), {
      durationMs: performance.now() - studyStartedAt,
      showRetryScreen: false,
      metadata: {
        experimentVersion: EXPERIMENT_VERSION, schemaVersion: '2.0.0',
        demographicFields: ['age','gender','gender_other','race','race_other','ethnicity','college_biology','evolution_course']
      }
    });
    saved = true;
    if (result.mode === 'sandbox') {
      document.getElementById('study').innerHTML = '<section class="screen instructions" role="status"><h1>Thank you for taking part</h1><p>Your responses have been saved.</p><p>This sandbox test is complete. You may close this window.</p></section>';
    }
  } catch (error) {
    document.getElementById('study').innerHTML = '<section class="screen instructions" role="alert"><h1>Your responses have not been confirmed saved</h1><p>Please keep this window open and retry. You will return to Prolific only after saving succeeds.</p><button type="button" class="action" id="retry-save">Retry saving</button><p id="save-error"></p></section>';
    document.getElementById('save-error').textContent = error.message;
    document.getElementById('retry-save').addEventListener('click', saveCompletedStudy);
  } finally {
    saving = false;
  }
}
const duckCase = EVOLUTION_CASES.find(item => item.id === 'duck_webbed_feet');
const caseOrder = [duckCase, ...jsPsych.randomization.shuffle(
  EVOLUTION_CASES.filter(item => item.id !== 'duck_webbed_feet')
)];
const sessionId = typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : String(Date.now()) + '-' + Math.random().toString(36).slice(2,10);
jsPsych.data.addProperties({
  study: 'evolution', version: EVOLUTION_VERSION, mode: explanationLab.launch.mode, condition: explanationLab.launch.condition,
  session_id: sessionId, started_at: new Date().toISOString(),
  case_order: caseOrder.map(c => c.id), response_mode: 'typed', timed_condition: false
});

function requireWrittenResponses() {
  document.querySelectorAll('textarea[required]').forEach(field => {
    const validate = () => field.setCustomValidity(field.value.trim() ? '' : 'Please enter a response before continuing.');
    field.addEventListener('input', validate);
    validate();
  });
}

function requireOtherDetails() {
  for (const name of ['gender','race']) {
    const field = document.querySelector(`input[name="${name}_other"]`);
    const validate = () => {
      field.required = document.querySelector(`input[name="${name}"]:checked`)?.value === 'Other';
      field.setCustomValidity(field.required && !field.value.trim() ? 'Please specify your response.' : '');
    };
    document.querySelectorAll(`input[name="${name}"]`).forEach(radio => radio.addEventListener('change',validate));
    field.addEventListener('input',validate);
    validate();
  }
}

function createCaseTrial(item, position, prompt, screenIndex) {
  let startTime = null;
  let firstInputRt = null;
  const caption = item.captions
    ? `<figcaption class="paired-caption"><span>${item.captions[0]}</span><span>${item.captions[1]}</span></figcaption>`
    : `<figcaption>${item.caption}</figcaption>`;
  const fields = Array.from({length:item.count}, (_, i) => `
    <label class="response-label" for="explanation-${i+1}">${item.count === 1 ? 'Your explanation' : 'Possible explanation ' + (i+1)}</label>
    <textarea id="explanation-${i+1}" name="explanation_${i+1}" rows="${item.count === 1 ? 6 : 4}" spellcheck="true" required></textarea>`).join('');
  return {
    type: jsPsychSurveyHtmlForm,
    html: `<section class="screen ${item.count === 3 ? 'hard-case' : ''}">
      <figure class="photo" style="--image-ratio:${item.image_width / item.image_height}"><img src="assets/images/${item.image}" alt="${item.alt}" width="${item.image_width}" height="${item.image_height}">${caption}</figure>
      <p class="scenario">${item.scenario}</p>
      <p class="question">${prompt.question}</p>
      <p class="hint">Even if you are unsure, write down your thoughts as you work toward ${item.count === 1 ? 'a plausible explanation' : 'each possible explanation'}. Please respond in ${item.count === 1 ? 'the box' : 'each of the three boxes'} before continuing.</p>
      ${fields}
    </section>`,
    button_label: 'Continue', autocomplete: false,
    data: { trial_role: 'response', measure: 'natural_selection_explanation',
      item_id: item.id + (prompt.species ? '_' + prompt.species : ''), page_type: 'case', case_id: item.id, category: item.category,
      case_position: position+1, requested_explanations: item.count,
      stimulus_text: item.scenario, question_text: prompt.question, image: item.image,
      response_species: prompt.species || null, response_role: prompt.role || null,
      case_screen_position: screenIndex+1, case_screen_count: item.prompts ? item.prompts.length : 1 },
    on_load: () => {
      startTime = performance.now();
      document.querySelectorAll('textarea').forEach(field => field.addEventListener('input', () => {
        if (firstInputRt === null) firstInputRt = Math.round(performance.now()-startTime);
      }, { once:true }));
      requireWrittenResponses();
      window.scrollTo(0,0);
    },
    on_finish: data => {
      data.first_input_rt = firstInputRt;
      data.explanation_count = Object.values(data.response).filter(v => typeof v === 'string' && v.trim()).length;
      for (let i=1; i<=item.count; i++) data['explanation_'+i] = data.response['explanation_'+i] || '';
    }
  };
}

function createCaseTrials(item, position) {
  // Shuffle the case as a unit; keep prey and predator screens consecutive.
  return (item.prompts || [{ question: item.question }]).map((prompt, screenIndex) =>
    createCaseTrial(item, position, prompt, screenIndex)
  );
}

const timeline = [
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: EVOLUTION_CONSENT,
    choices: ['I agree', 'I do NOT agree'],
    data: { page_type: 'consent', trial_role: 'consent' },
    on_finish: data => {
      data.consented = data.response === 0;
      consented = data.consented;
      if (!data.consented) jsPsych.abortExperiment('<section class="screen"><h1>Thank you</h1><p>You have chosen not to participate. You may close this window.</p></section>');
    }
  },
  {
    type: jsPsychSurveyHtmlForm,
    html: `<section class="screen familiarity">
      <fieldset><legend>Are you familiar with evolution by natural selection?</legend>
      ${['Yes','No'].map(v => `<label class="choice"><input type="radio" name="familiarity" value="${v}" required>${v}</label>`).join('')}</fieldset></section>`,
    button_label: 'Continue', data: { page_type: 'familiarity', trial_role: 'response', measure: 'familiarity', item_id: 'familiarity' }
  },
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<section class="screen instructions"><p class="eyebrow">Instructions</p><h1>Explain what you think</h1>
      <div class="intro-text"><p>You will see six cases involving animals. For each case, we will ask you for a plausible explanation in terms of natural selection.</p>
      <p>Some cases involve two species. We will ask about each species on a separate screen.</p>
      <p>We are particularly interested in your thinking process. Please write down your thoughts as you come up with an answer, even if you are not sure.</p>
      <p>For some cases, we will ask you to come up with three possible explanations. Please make each proposal specific to the animal and feature described, rather than simply saying that it happened through natural selection.</p>
      <p>Take the time you need. Please enter a response in every answer box before continuing.</p></div></section>`,
    choices: ['Begin'], data: { page_type: 'instructions', trial_role: 'instruction' },
    on_load: () => { document.getElementById('jspsych-html-button-response-btngroup').style.justifyContent = 'center'; }
  },
  ...caseOrder.flatMap(createCaseTrials),
  {
    type: jsPsychSurveyHtmlForm, html: EVOLUTION_DEMOGRAPHICS,
    button_label: 'Continue', data: { page_type: 'demographics', trial_role: 'demographic' }, on_load: requireOtherDetails
  },
  {
    type: jsPsychSurveyHtmlForm,
    html: `<section class="screen"><p class="eyebrow">One last question</p><h1>Feedback</h1><label class="response-label" for="feedback">Do you have any feedback about any part of this study?</label><p class="hint">Please enter your feedback, or write “None” if you have no feedback.</p><textarea id="feedback" name="feedback" rows="5" required></textarea></section>`,
    button_label: 'Finish', data: { page_type: 'feedback', trial_role: 'response', measure: 'feedback', item_id: 'feedback' },
    on_load: requireWrittenResponses,
    on_finish: data => { data.completed_at = new Date().toISOString(); completed = true; }

  }
];

// Preload every locally bundled picture before displaying consent.
Promise.all(EVOLUTION_CASES.map(item => new Promise((resolve,reject) => {
  const image = new Image();
  image.onload = resolve;
  image.onerror = () => reject(new Error('Missing picture: '+item.image));
  image.src = 'assets/images/'+item.image;
}))).then(() => {
  document.querySelector('#study .loading')?.remove();
  return jsPsych.run(timeline);
}).catch(error => {
  const root = document.getElementById('study');
  root.innerHTML = '<section class="screen"><h1>The study could not start</h1><p>Please reopen the study using the link provided by the researcher. If the problem persists, contact the researcher.</p><p id="load-error"></p></section>';
  document.getElementById('load-error').textContent = error.message;
});

})().catch(error => {
  const root = document.getElementById('study');
  root.innerHTML = '<section class="screen instructions" role="alert"><h1>The study could not start</h1><p>Please use the study link provided by the researcher.</p><p id="startup-error"></p></section>';
  document.getElementById('startup-error').textContent = error.message;
});
