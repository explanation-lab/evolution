// Adapted from tort_cognition/code/shared/js/pilot-adult-forms.js.
// The Cornell contact, risks/benefits, confidentiality, and rights paragraphs
// are retained. Study description, compensation, and local storage are adapted.
const EVOLUTION_CONSENT = `
  <section class="screen">
    <p class="eyebrow">Welcome</p>
    <h1>Consent form</h1>
    <div class="consent-body">
      <p>Thank you for considering taking part in this study. We appreciate your time and effort. In this study, we will present you with pictures and descriptions of animals, and then ask you to write explanations of the features or changes described. We are interested in your thinking process. You may be uncertain about some of the questions; please give your best response.</p>
      <p>Your involvement should take about 15 minutes. You will receive compensation as indicated in the recruitment materials. This review draft does not issue payment. Your participation is voluntary and you can stop at any time. If you consent to take part in this survey, please indicate so below. If not, you may decline below or close your browser window.</p>
      <p>We do not anticipate any risks from participating in this research. While you will not directly benefit from taking part in this research study, we hope society and the scientific community will benefit from the knowledge gained about human psychology and judgment.</p>
      <p>We will not ask you to provide personally identifiable information such as an email address or name. In this review draft, your responses are held in your browser for the duration of the session. You may choose to download a copy at the end; responses are not sent to a server. We anticipate that participation presents no greater risk than everyday use of the Internet. Please note that there is always a possible risk of intrusion by outside agents whenever information is shared over the Internet.</p>
      <p>If you have any questions about the research study, please contact Shaun Nichols (sbn44@cornell.edu) at Cornell University. If you have any questions or concerns regarding your rights as a subject in this study, you may contact the Institutional Review Board (IRB) for Human Participants at 607-255-5138 or access their website at <a href="http://www.irb.cornell.edu" target="_blank" rel="noopener">http://www.irb.cornell.edu</a>. You may also report your concerns or complaints anonymously through Ethicspoint online at <a href="http://www.hotline.cornell.edu" target="_blank" rel="noopener">www.hotline.cornell.edu</a> or by calling toll free at 1-866-293-3077. Ethicspoint is an independent organization that serves as a liaison between the University and the person bringing the complaint so that anonymity can be ensured.</p>
      <p>Taking part in this study is voluntary. You can stop at any time. Withdrawal or refusal to participate will not result in any penalty. You may refuse to answer any individual question. You do not waive any legal rights or release any agent from liability for negligence by consenting to participate.</p>
      <p>By clicking “I agree,” you indicate that you are at least 18 years old and consent to take part in this survey.</p>
    </div>
  </section>`;

const EVOLUTION_STATES = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

function demoRadios(name, values) {
  return values.map(value => `<label><input type="radio" name="${name}" value="${value}"> ${value}</label>`).join('');
}

const EVOLUTION_DEMOGRAPHICS = `
  <section class="screen">
    <p class="eyebrow">About you</p>
    <h1>Demographic information</h1>
    <p class="hint">Please provide the following information. You may leave any question unanswered.</p>
    <fieldset><legend>1. Age</legend><label for="demo-age" class="hint">Age in years</label><br><input id="demo-age" name="age" type="number" min="18" max="120" step="1"></fieldset>
    <fieldset class="demo-options"><legend>2. Gender</legend>
      ${demoRadios('gender', ['Female','Male','Non-binary'])}
      <label><input type="radio" name="gender" value="Other"> Other: <input class="other-input" type="text" name="gender_other" aria-label="Other gender"></label>
    </fieldset>
    <fieldset class="demo-options"><legend>3. Race</legend>
      ${demoRadios('race', ['White','Black/African American','American Indian/Alaska Native','Asian','Native Hawaiian/Pacific Islander','Multiracial/Mixed'])}
      <label><input type="radio" name="race" value="Other"> Other: <input class="other-input" type="text" name="race_other" aria-label="Other race"></label>
    </fieldset>
    <fieldset class="demo-options"><legend>4. Ethnicity</legend>${demoRadios('ethnicity', ['Hispanic','Non-Hispanic'])}</fieldset>
    <fieldset><legend>5. State of residence</legend><select name="state" aria-label="State of residence"><option value="">Select a state…</option>${EVOLUTION_STATES.map(s => `<option value="${s}">${s}</option>`).join('')}</select></fieldset>
  </section>`;
