# Draft verification

## Collection version 1.0.0

October 12, 2026. Published on main in the public explanation-lab/evolution repository, with GitHub Pages hosting `collection/experiment1/`. The Console converter preserved the reviewed integration and generated manifest 1.2.0, schema 2.0.0, frozen client 1.5.1, and package fingerprint b20e72e38e49a673c7eefea6268156946bd0a5cbe51615fbe7f1a46d530e8dae.

Created Console project Evolution (EVOLUTION-WJHY) and adult study Evolution Pilot 1 (EVOLUTION-PILOT-1-VTTH), within-participant launch group mixed, target 45, stage Sandbox testing. The published manifest was verified by the Console. A complete hosted browser walkthrough saved one Sandbox submission containing 13 raw trials, including eight distinct case-response rows and one demographics trial. All six pictures loaded. Ducks appeared first; both paired cases remained consecutive and prey-first. Required familiarity and written responses blocked empty advancement. A separate consent-refusal walkthrough ended immediately without increasing the Sandbox submission count.

Downloaded and inspected the complete Sandbox export: 12 non-demographic response rows, eight unique explanation item IDs across six cases, three nonempty proposals for each hard case, intact timing and case order, four correctly identified species responses, preserved Prolific test identifiers, and one demographics row with the expected age/gender/race/ethnicity and Yes/No coursework answers. Confirmed the data format in the Console and verified it persisted after reloading. No participant exports are committed.

Node checks verify that an incomplete or refused run cannot submit, a completed run saves once, failed writes offer a retry, and a successful retry cannot cause another successful submission. Tests against the actual frozen client completion functions confirm that production redirects only after a successful save, while failed writes and Sandbox runs never redirect. The existing 1,000-run ordering check still passes.

Console launch preflight reports exactly two pending recruitment actions: add the new pilot's Prolific completion URL and confirm the Prolific link, 45 places, and matching completion code. Production recruitment and the final live redirect were not exercised. Manual researcher Sandbox review remains the next step. The original offline review copy and ZIP remain unchanged. The existing consent wording, including payment/duration and Qualtrics references, is preserved and needs review against actual recruitment and hosting before Live.

## Version 0.4.0

October 12, 2026. All prompts now use the same possible natural-selection explanation / why form, with three possible explanations requested for hard cases. Each interactive case consists of consecutive prey and predator screens, repeating the same paired picture and scenario. A Node VM check evaluated 1,000 seeded runs, covering all 120 orders of the remaining five case blocks: duck stayed first, pairs remained consecutive and prey-first, all eight response screens had the expected prompts, and their case/screen/species metadata matched the order.

A complete browser walkthrough through a local HTTP preview confirmed duck first, gazelle then cheetah, moth then bird, unchanged paired pictures and scenarios, and all six pictures loading. A blank easy response and a partially answered hard case blocked advancement. Both new education questions offered only Yes/No and independently blocked advancement until answered; there were no education explanation fields. The downloaded JSON contained eight case-response rows, six distinct case IDs, four correctly labeled species responses with prey/predator roles and screen positions, three ordered explanations for each hard case, and both education answers. The browser reported no console errors or warnings. All three application scripts pass syntax checks. The direct file-URL automation limitation recorded below still applies.

## Version 0.3.3

October 12, 2026. The duck case is fixed in the first case position; only the other five cases are passed to jsPsych's shuffle. The application timeline was evaluated over 1,000 runs using a seeded shuffle implementation in a Node VM: every run contained six unique cases, duck first, matching displayed positions and exported `case_order` metadata. The runs covered all 120 orders of the remaining five cases. Consent, familiarity and instructions still precede the cases. The application script passes a syntax check, and the rebuilt ZIP includes this ordering change and all local images and dependencies.

## Version 0.3.2

October 11, 2026. The moth/bird wording follows Shaun's suggested replacement: birds develop increased abilities in visual discrimination, with the connection to moth camouflage left for participants to make. The application scripts pass syntax checks and the rebuilt ZIP contains the revised wording. This text-only revision retains the layout and behavior verified in earlier versions.

## Version 0.3.1

October 11, 2026. Checked all six cases in the browser. Each single caption's horizontal center matched its picture's center; each paired caption matched the center of its half of the picture. All measured offsets were zero at the desktop preview size. The paired moth/bird and cheetah/gazelle layouts were visually inspected. Image dimensions now match the bundled PNGs, and figures scale with their captions within the available width. No console errors occurred.

## Version 0.3.0

October 11, 2026. Browser checks on the extracted ZIP confirmed that “I do NOT agree” ends immediately with the non-participation thank-you screen and no console errors; “I agree” proceeds to familiarity and instructions. Case screens have no top banner, case number or animal heading. Color pictures and larger bold (20-pixel) captions were visually checked. Consent body HTML is unchanged. Required-response behavior remains as verified in 0.2.0.

## Version 0.2.0

October 11, 2026. The consent HTML was compared with `tort_cognition/code/shared/js/pilot-adult-forms.js` and matches verbatim. The revised Yes/No familiarity question has no introductory heading. Instructions are centered. State of residence and case skip controls are removed.

A complete browser walkthrough of the extracted ZIP confirmed that every case blocks empty and whitespace-only responses. Both hard cases block advancement until all three fields are completed. Familiarity requires a selection. Demographics require age, gender, race and ethnicity; selecting Other requires accompanying text. Feedback blocks an empty response and accepts “None”. All six fully answered cases, demographic details, familiarity and feedback were verified in the downloaded JSON. No console errors occurred. Scripts pass syntax checks.

The page background, interface text, buttons and borders are black and white. Consent keeps the source blue background. Animal images remain in their original colors, following David's clarification. The self-contained file-opening design is retained; the automation browser's file-URL restriction still prevents a literal double-click test.

## Version 0.1.0 (historical)

October 11, 2026, version 0.1.0.

The extracted handoff ZIP was used for browser testing through a local HTTP preview. Two complete runs showed different individually shuffled case orders, each containing all six cases exactly once. All six pictures loaded. Easy and interactive cases displayed one text field; both hard cases displayed three.

Checked consent acceptance and refusal, familiarity including the prefer-not-to-answer choice, instructions, typed responses, blank responses, partial hard-case responses, explicit skips retaining partial text, optional demographics, feedback, and completion. The final complete run and consent-refusal path produced no console errors. Consent refusal uses the [jsPsych 8 abortExperiment API](https://www.jspsych.org/v8/reference/jspsych/#jspsychabortexperiment).

Downloaded CSV and JSON were read back and checked for six unique case IDs, displayed positions and order, response text, skip flags, explanation counts, first-input latency, total response time, and the completion timestamp. Test responses are not included in the repository or ZIP.

All script, stylesheet and picture references in the extracted package resolve to bundled files. Application scripts pass Node syntax checks. There are no runtime CDN imports, ES modules, fetch requests, server submissions, or build steps. Consent contact links are optional outbound links; they are not needed to run the study.

The automation browser blocks file URLs. A literal double-click/file-URL browser run therefore could not be verified with this tool. The implementation is designed for that workflow using ordinary local scripts, stylesheets and HTML images. This limitation should not be represented as a completed direct-file test.
