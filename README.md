# Evolution

A local jsPsych mockup for the teleology / natural-selection explanation pilot.

## Open the mockup

Open `code/experiment1/index.html` in a browser by double-clicking it. No install, build command, server, login, or internet connection is needed. Keep the experiment folder intact.

The six cases are shuffled individually on every new run:

- Easy: duck webbed feet; giraffe neck length.
- Interactive: cheetah–gazelle speed; moth camouflage and bird visual discrimination.
- Hard: goat horizontal pupils; Saharan silver ant hairs. Each requests three explanations.

Consent comes first; “I do NOT agree” goes directly to an ending screen. Agreeing leads to familiarity and instructions. Required demographics and feedback follow the six cases. Responses are typed and there is no countdown. All six realistic pictures are AI-generated and bundled locally, including both species in each interactive picture.

## Download responses

At the end, download CSV or JSON. Nothing is uploaded. Closing or refreshing the tab discards unsaved responses. A new run creates a new anonymous review-session identifier and shuffles the cases again.

Each case row includes its category, stable ID, displayed position, wording, response, overall response time (`rt`), time to first text input (`first_input_rt`), and number of nonempty explanations. First input latency includes reading and typing and is not a direct measure of when thinking began. The hard cases request more output, so their total response times are not matched to the easy/interactive cases.

## Share with Shaun

The handoff ZIP contains an `evolution-mockup` folder. Unzip it fully, then open `evolution-mockup/code/experiment1/index.html`. All required files are in that experiment folder. The ZIP also includes instructions, design notes, and the complete image prompts.

To rebuild the ZIP with Python 3: `python3 tools/package_mockup.py`.

## Draft status

This is a review mockup, not a deployed Prolific study. The evolutionary histories are explicitly hypothetical, including the duck fossil dates. The actual Cornell consent HTML is copied verbatim from the current tort cognition adult forms, including its blue background. Its existing description, payment, and Qualtrics wording have been preserved as requested. Demographics retain age, gender, race, and ethnicity; state of residence is removed. All answers are required, including all three proposals on each hard case and a feedback response (which may be “None”). Familiarity is Yes/No only. The interface is black and white except for the blue consent form; animal pictures remain in color. Live collection details must be settled before recruitment.

The separate normativity and explanatory-preference projects, audio think-aloud recording, time pressure, hosting, and live participant data storage are outside this draft.

See `docs/design-notes.md`, `docs/image-prompts.json`, and `code/experiment1/assets/IMAGE_NOTES.md`.
