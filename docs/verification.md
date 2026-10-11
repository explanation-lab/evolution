# Draft verification

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
