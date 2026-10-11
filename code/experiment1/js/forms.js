// Consent HTML copied verbatim from tort_cognition/code/shared/js/pilot-adult-forms.js.
const EVOLUTION_CONSENT = `
    <div id="consent-scroll" style="max-width:720px; margin:0 auto; padding:36px 48px 28px 48px; font-family:'Helvetica Neue', Arial, sans-serif; color:#333; font-size:14px; line-height:1.5; text-align:left; max-height:calc(100vh - 220px); overflow-y:auto; background-color:#b8d4e8; border-radius:4px;">
      <h2 style="text-align:center; font-size:16px; font-weight:bold; letter-spacing:0.04em; margin:0 0 24px 0; text-transform:uppercase;">Consent Form</h2>
      <p style="margin:0 0 14px 0;">Thank you for agreeing to take part in this study. We appreciate your time and effort. In this study, we will present you with a fictional scenario, and then we will ask you to answer a brief series of questions about that scenario. The questions have no right or wrong answers-- we're just exploring features of human psychology in this research. You will be paid $2.00 for your time and efforts (based on a rate of $8 per hour for this approximately 15-minute study). We do not anticipate any risks from participating in this research. While you will not directly benefit from taking part in this research study, we hope society and the scientific community will benefit from the knowledge gained about human psychology and judgment.</p>
      <p style="margin:0 0 14px 0;">Your involvement should take about 15 minutes. Your participation is voluntary and you can stop at any time. If you consent to take part in this survey, please indicate so below, and then click the arrow to advance. If not, simply close your browser window.</p>
      <p style="margin:0 0 14px 0;">The research data will be collected anonymously. We will not ask you to provide any personally identifiable information (such as an email-address, name, etc.) and will not be able to link your response to you. We anticipate that your participation in this survey presents no greater risk than everyday use of the Internet. Of course, please note that there is always the possible risk of intrusion by outside agents (i.e. hacking) whenever information shared over the Internet. In order to keep your identifying information and data from this study separate, we will host the survey on an unaffiliated platform, Qualtrics. Thus, Prolific will not have access to the data you provide us. Additionally, we will not ask for directly or indirectly identifiable information in the survey.</p>
      <p style="margin:0 0 14px 0;">If you have any questions about the research study, please contact Shaun Nichols (sbn44@cornell.edu) at Cornell University. If you have any questions or concerns regarding your rights as a subject in this study, you may contact the Institutional Review Board (IRB) for Human Participants at 607-255-5138 or access their website at <a href="http://www.irb.cornell.edu" target="_blank">http://www.irb.cornell.edu</a>. You may also report your concerns or complaints anonymously through Ethicspoint online at <a href="http://www.hotline.cornell.edu" target="_blank">www.hotline.cornell.edu</a> or by calling toll free at 1-866-293-3077. Ethicspoint is an independent organization that serves as a liaison between the University and the person bringing the complaint so that anonymity can be ensured.</p>
      <p style="margin:0 0 14px 0;">Taking part in this study is voluntary. You can stop at any time. Withdrawal or refusal to participate will not result in any penalty. You do not waive any legal rights or release any agent from liability for negligence by consenting to participate.</p>
      <p style="margin:20px 0 0 0;">If you consent to take part in this survey, please indicate so below:</p>
    </div>`;

function demoRadios(name, values) {
  return values.map(value => `<label><input type="radio" name="${name}" value="${value}" required> ${value}</label>`).join('');
}

const EVOLUTION_DEMOGRAPHICS = `
  <section class="screen">
    <p class="eyebrow">About you</p>
    <h1>Demographic information</h1>
    <p class="hint">Please answer each question before continuing.</p>
    <fieldset><legend>1. Age</legend><label for="demo-age" class="hint">Age in years</label><br><input id="demo-age" name="age" type="number" min="18" max="120" step="1" required></fieldset>
    <fieldset class="demo-options"><legend>2. Gender</legend>
      ${demoRadios('gender', ['Female','Male','Non-binary'])}
      <label><input type="radio" name="gender" value="Other" required> Other: <input class="other-input" type="text" name="gender_other" aria-label="Other gender"></label>
    </fieldset>
    <fieldset class="demo-options"><legend>3. Race</legend>
      ${demoRadios('race', ['White','Black/African American','American Indian/Alaska Native','Asian','Native Hawaiian/Pacific Islander','Multiracial/Mixed'])}
      <label><input type="radio" name="race" value="Other" required> Other: <input class="other-input" type="text" name="race_other" aria-label="Other race"></label>
    </fieldset>
    <fieldset class="demo-options"><legend>4. Ethnicity</legend>${demoRadios('ethnicity', ['Hispanic','Non-Hispanic'])}</fieldset>
  </section>`;
