'use strict';

const EVOLUTION_VERSION = '0.1.0';
const jsPsych = initJsPsych({ display_element: 'study' });
const caseOrder = jsPsych.randomization.shuffle(EVOLUTION_CASES);
const sessionId = typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : String(Date.now()) + '-' + Math.random().toString(36).slice(2,10);
jsPsych.data.addProperties({
  study: 'evolution', version: EVOLUTION_VERSION, mode: 'local_review',
  session_id: sessionId, started_at: new Date().toISOString(),
  case_order: caseOrder.map(c => c.id), response_mode: 'typed', timed_condition: false
});

function addSkipHandler() {
  const button = document.getElementById('skip-response');
  if (button) button.addEventListener('click', () => {
    // Submit through the plugin so its response-time and form collection logic
    // still runs; partial responses are retained rather than erased.
    button.form.dataset.skipped = 'true';
    button.form.requestSubmit();
  });
}

function createCaseTrial(item, position) {
  let startTime = null;
  let firstInputRt = null;
  let skipped = false;
  const caption = item.captions
    ? `<figcaption class="paired-caption"><span>${item.captions[0]}</span><span>${item.captions[1]}</span></figcaption>`
    : `<figcaption>${item.caption}</figcaption>`;
  const fields = Array.from({length:item.count}, (_, i) => `
    <label class="response-label" for="explanation-${i+1}">${item.count === 1 ? 'Your explanation' : 'Possible explanation ' + (i+1)}</label>
    <textarea id="explanation-${i+1}" name="explanation_${i+1}" rows="${item.count === 1 ? 6 : 4}" spellcheck="true"></textarea>`).join('');
  return {
    type: jsPsychSurveyHtmlForm,
    html: `<section class="screen ${item.count === 3 ? 'hard-case' : ''}">
      <p class="eyebrow">Case ${position+1} of ${caseOrder.length}</p>
      <h2>${item.title}</h2>
      <figure class="photo"><img src="assets/images/${item.image}" alt="${item.alt}" width="1536" height="1024">${caption}</figure>
      <p class="scenario">${item.scenario}</p>
      <p class="question">${item.question}</p>
      <p class="hint">Even if you are unsure, write down your thoughts as you work toward ${item.count === 1 ? 'a plausible explanation' : 'each possible explanation'}.${item.count === 3 ? ' If you cannot think of three, enter the explanations you can think of.' : ''}</p>
      ${fields}
      <div class="skip-wrap"><button id="skip-response" class="skip-button" type="button">I prefer not to answer this case</button></div>
    </section>`,
    button_label: 'Continue', autocomplete: false,
    data: { page_type: 'case', case_id: item.id, category: item.category,
      case_position: position+1, requested_explanations: item.count,
      stimulus_text: item.scenario, question_text: item.question, image: item.image },
    on_load: () => {
      startTime = performance.now();
      document.querySelectorAll('textarea').forEach(field => field.addEventListener('input', () => {
        if (firstInputRt === null) firstInputRt = Math.round(performance.now()-startTime);
      }, { once:true }));
      const form = document.getElementById('jspsych-survey-html-form');
      form.addEventListener('submit', () => { skipped = form.dataset.skipped === 'true'; });
      addSkipHandler();
      window.scrollTo(0,0);
    },
    on_finish: data => {
      data.first_input_rt = firstInputRt;
      data.skipped = skipped;
      data.explanation_count = Object.values(data.response).filter(v => typeof v === 'string' && v.trim()).length;
      for (let i=1; i<=item.count; i++) data['explanation_'+i] = data.response['explanation_'+i] || '';
    }
  };
}

const timeline = [
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: EVOLUTION_CONSENT,
    choices: ['I agree', 'I do not agree'],
    data: { page_type: 'consent' },
    on_load: () => { document.querySelectorAll('.jspsych-btn')[1]?.classList.add('secondary'); },
    on_finish: data => {
      data.consented = data.response === 0;
      if (!data.consented) jsPsych.abortExperiment('<section class="screen"><h1>Thank you</h1><p>You have chosen not to participate. You may close this window.</p></section>');
    }
  },
  {
    type: jsPsychSurveyHtmlForm,
    html: `<section class="screen"><p class="eyebrow">Before we begin</p><h1>A question about familiarity</h1>
      <fieldset><legend>Are you familiar with evolution by natural selection?</legend>
      ${['Yes','No','Not sure','Prefer not to answer'].map(v => `<label class="choice"><input type="radio" name="familiarity" value="${v}" required>${v}</label>`).join('')}</fieldset></section>`,
    button_label: 'Continue', data: { page_type: 'familiarity' }
  },
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<section class="screen"><p class="eyebrow">Instructions</p><h1>Explain what you think</h1>
      <div class="intro-text"><p>You will see six cases involving animals. For each case, we will ask you for a plausible explanation in terms of natural selection.</p>
      <p>We are particularly interested in your thinking process. Please write down your thoughts as you come up with an answer, even if you are not sure.</p>
      <p>For some cases, we will ask you to come up with three possible explanations. Please make each proposal specific to the animal and feature described, rather than simply saying that it happened through natural selection.</p>
      <p>Take the time you need. You may leave a response blank if you prefer not to answer.</p></div></section>`,
    choices: ['Begin'], data: { page_type: 'instructions' }
  },
  ...caseOrder.map(createCaseTrial),
  {
    type: jsPsychSurveyHtmlForm, html: EVOLUTION_DEMOGRAPHICS,
    button_label: 'Continue', data: { page_type: 'demographics' }
  },
  {
    type: jsPsychSurveyHtmlForm,
    html: `<section class="screen"><p class="eyebrow">One last question</p><h1>Feedback</h1><label class="response-label" for="feedback">Do you have any feedback about any part of this study?</label><p class="hint">This is optional.</p><textarea id="feedback" name="feedback" rows="5"></textarea></section>`,
    button_label: 'Finish', data: { page_type: 'feedback' },
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
        jsPsych.data.get().localSave(format, 'evolution-'+sessionId+'.'+format);
        document.getElementById('download-status').textContent = 'Your '+format.toUpperCase()+' download has been requested. You may download another copy before closing this tab.';
      });
      window.scrollTo(0,0);
    }
  }
];

// HTML Image loading works under file:// without fetch(), modules or a server.
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
  root.innerHTML = '<section class="screen"><h1>The study could not start</h1><p>Please unzip the entire folder before opening index.html. Keep all study files together. If the folder is complete, try refreshing this page.</p><p id="load-error"></p></section>';
  document.getElementById('load-error').textContent = error.message;
});
