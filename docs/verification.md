# Draft verification

October 11, 2026, version 0.1.0.

The extracted handoff ZIP was used for browser testing through a local HTTP preview. Two complete runs showed different individually shuffled case orders, each containing all six cases exactly once. All six pictures loaded. Easy and interactive cases displayed one text field; both hard cases displayed three.

Checked consent acceptance and refusal, familiarity including the prefer-not-to-answer choice, instructions, typed responses, blank responses, partial hard-case responses, explicit skips retaining partial text, optional demographics, feedback, and completion. The final complete run and consent-refusal path produced no console errors. Consent refusal uses the [jsPsych 8 abortExperiment API](https://www.jspsych.org/v8/reference/jspsych/#jspsychabortexperiment).

Downloaded CSV and JSON were read back and checked for six unique case IDs, displayed positions and order, response text, skip flags, explanation counts, first-input latency, total response time, and the completion timestamp. Test responses are not included in the repository or ZIP.

All script, stylesheet and picture references in the extracted package resolve to bundled files. Application scripts pass Node syntax checks. There are no runtime CDN imports, ES modules, fetch requests, server submissions, or build steps. Consent contact links are optional outbound links; they are not needed to run the study.

The automation browser blocks file URLs. A literal double-click/file-URL browser run therefore could not be verified with this tool. The implementation is designed for that workflow using ordinary local scripts, stylesheets and HTML images. This limitation should not be represented as a completed direct-file test.
