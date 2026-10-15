'use strict';

const EVOLUTION_VERSION = '2.0.2';
const jsPsych = initJsPsych({ display_element: 'study' });
const CASE_SEQUENCE = [
  'duck_webbed_feet',
  'cheetah_gazelle_speed',
  'moth_bird_camouflage',
  'goat_horizontal_pupils',
  'silver_ant_hairs',
  'giraffe_long_neck'
];
const caseOrder = CASE_SEQUENCE.map(id => EVOLUTION_CASES.find(item => item.id === id));
const FINCH_IMAGE = { image: 'finch-beaks.png', width: 1536, height: 1024 };
const FINCH_EXAMPLE = `<section class="screen worked-example"><p class="eyebrow">Worked example</p><h1>Finch beaks and natural selection</h1>
  <figure class="photo" style="--image-ratio:${FINCH_IMAGE.width / FINCH_IMAGE.height}"><img src="assets/images/${FINCH_IMAGE.image}" alt="Three brown finches with small, intermediate, and larger, deeper beaks, from left to right." width="${FINCH_IMAGE.width}" height="${FINCH_IMAGE.height}"><figcaption>Finch beaks</figcaption></figure>
  <p class="scenario">Imagine that, over many generations, larger, deeper beaks became more common in a population of seed-eating finches. During this period, droughts made small, soft seeds scarce, leaving mostly large, hard seeds.</p>
  <p class="question">Please come up with a possible natural-selection explanation for why larger, deeper beaks became more common in this population.</p>
  <h2 class="example-heading">Example answer</h2>
  <p>One possible explanation in terms of natural selection would be:</p>
  <ol class="example-steps">
    <li><strong>Variation.</strong> The finches already vary in beak size: some have larger, deeper beaks than others.</li>
    <li><strong>Survival and reproduction.</strong> Finches with larger, deeper beaks can crack the remaining seeds more easily. They are more likely to survive and leave offspring.</li>
    <li><strong>Inheritance.</strong> Offspring tend to inherit beak traits from their parents, so these offspring are more likely to have larger, deeper beaks too.</li>
    <li><strong>Population change.</strong> If these conditions continue, larger, deeper beaks can become more common over generations.</li>
  </ol>
  <p class="example-next">Next, explain a different animal case in your own words.</p></section>`;
const sessionId = typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : String(Date.now()) + '-' + Math.random().toString(36).slice(2,10);
jsPsych.data.addProperties({
  study: 'evolution', version: EVOLUTION_VERSION, pilot: 'pilot_2', mode: 'local_review',
  session_id: sessionId, started_at: new Date().toISOString(),
  case_order: caseOrder.map(c => c.id), training_example: 'finch_beaks', response_mode: 'typed', timed_condition: false
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
    data: { page_type: 'case', item_id: item.id + (prompt.species ? '_' + prompt.species : ''), case_id: item.id, category: item.category,
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
  // Keep each paired case consecutive, with prey followed by predator.
  return (item.prompts || [{ question: item.question }]).map((prompt, screenIndex) =>
    createCaseTrial(item, position, prompt, screenIndex)
  );
}

const timeline = [
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: EVOLUTION_CONSENT,
    choices: ['I agree', 'I do NOT agree'],
    data: { page_type: 'consent' },
    on_finish: data => {
      data.consented = data.response === 0;
      if (!data.consented) jsPsych.abortExperiment('<section class="screen"><h1>Thank you</h1><p>You have chosen not to participate. You may close this window.</p></section>');
    }
  },
  {
    type: jsPsychSurveyHtmlForm,
    html: `<section class="screen familiarity">
      <fieldset><legend>Are you familiar with evolution by natural selection?</legend>
      ${['Yes','No'].map(v => `<label class="choice"><input type="radio" name="familiarity" value="${v}" required>${v}</label>`).join('')}</fieldset></section>`,
    button_label: 'Continue', data: { page_type: 'familiarity' }
  },
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<section class="screen instructions"><p class="eyebrow">Instructions</p><h1>Explain what you think</h1>
      <div class="intro-text"><p>First, you will see a short worked example of an explanation in terms of natural selection. You will then see six cases involving animals and write your own explanations.</p>
      <p>Some cases involve two species. We will ask about each species on a separate screen.</p>
      <p>We are particularly interested in your thinking process. Please write down your thoughts as you come up with an answer, even if you are not sure.</p>
      <p>Please give one explanation on each screen. Make your explanation specific to the animal and feature described, rather than simply saying that it happened through natural selection.</p>
      <p>Take the time you need. Please enter a response in every answer box before continuing.</p></div></section>`,
    choices: ['Continue'], data: { page_type: 'instructions' },
    on_load: () => { document.getElementById('jspsych-html-button-response-btngroup').style.justifyContent = 'center'; }
  },
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: FINCH_EXAMPLE,
    choices: ['Begin'],
    data: { page_type: 'worked_example', trial_role: 'instruction', training_id: 'finch_beaks', image: FINCH_IMAGE.image, stimulus_text: FINCH_EXAMPLE },
    on_load: () => {
      document.getElementById('jspsych-html-button-response-btngroup').style.justifyContent = 'center';
      window.scrollTo(0,0);
    }
  },
  ...caseOrder.flatMap(createCaseTrials),
  {
    type: jsPsychSurveyHtmlForm, html: EVOLUTION_DEMOGRAPHICS,
    button_label: 'Continue', data: { page_type: 'demographics' }, on_load: requireOtherDetails
  },
  {
    type: jsPsychSurveyHtmlForm,
    html: `<section class="screen"><p class="eyebrow">One last question</p><h1>Feedback</h1><label class="response-label" for="feedback">Do you have any feedback about any part of this study?</label><p class="hint">Please enter your feedback, or write “None” if you have no feedback.</p><textarea id="feedback" name="feedback" rows="5" required></textarea></section>`,
    button_label: 'Finish', data: { page_type: 'feedback' },
    on_load: requireWrittenResponses,
    on_finish: data => { data.completed_at = new Date().toISOString(); }
  },
  {
    type: jsPsychHtmlButtonResponse, choices: [],
    stimulus: `<section class="screen"><p class="eyebrow">Complete</p><h1>Thank you for taking part</h1><p>You have completed all six cases.</p>
      <p>You can download your responses from this review draft below.</p>
      <div class="completion-actions"><button id="download-csv" class="action" type="button">Download responses (CSV)</button><button id="download-json" class="action secondary" type="button">Download responses (JSON)</button></div>
      <p class="data-note" id="download-status" role="status">Your responses remain in this browser tab until it is closed or refreshed. Nothing has been uploaded.</p>
      <details><summary>Review details</summary><p class="data-note">Case order for this run:</p><ol class="order-list">${caseOrder.map(c => `<li>${c.title}</li>`).join('')}</ol><p class="data-note">All animal images were generated with AI and are illustrative. The evolutionary histories described are hypothetical. Version ${EVOLUTION_VERSION}.</p></details></section>`,
    data: { page_type: 'completion' },
    on_load: () => {
      for (const format of ['csv','json']) document.getElementById('download-'+format).addEventListener('click', () => {
        jsPsych.data.get().localSave(format, 'evolution-pilot-2-'+sessionId+'.'+format);
        document.getElementById('download-status').textContent = 'Your '+format.toUpperCase()+' download has been requested. You may download another copy before closing this tab.';
      });
      window.scrollTo(0,0);
    }
  }
];

// HTML Image loading works under file:// without fetch(), modules or a server.
Promise.all([...EVOLUTION_CASES, FINCH_IMAGE].map(item => new Promise((resolve,reject) => {
  const image = new Image();
  image.onload = resolve;
  image.onerror = () => reject(new Error('Missing picture: '+item.image));
  image.src = 'assets/images/'+item.image;
}))).then(() => {
  document.querySelector('#study .loading')?.remove();
  return jsPsych.run(timeline);
}).catch(error => {
  const root = document.getElementById('study');
  root.innerHTML = '<section class="screen"><h1>The study could not start</h1><p>Please unzip the entire folder before opening index.html. Keep all study files together. If the folder is complete, try refreshing this page.</p><p id="load-error"></p></section>';
  document.getElementById('load-error').textContent = error.message;
});
