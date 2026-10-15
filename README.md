# Evolution

A jsPsych natural-selection explanation pilot, with separate offline review and hosted collection copies.

The hosted collection version is in `collection/experiment1/`. See `docs/collection.md` for Console setup, saving, and Prolific completion behavior. The instructions below describe the offline review copy.

## Pilot 2 review

[Try Pilot 2 online](https://explanation-lab.github.io/evolution/pilot-2/).

Pilot 2 starts with a finch-beak worked example, then ducks, paired cases, goats, ants, and a final giraffe case. Each response screen requests one explanation. This preview runs without a login and offers CSV/JSON downloads at the end; it does not upload reviewer responses. The existing Pilot 1 collection link remains available.

## Open the mockup

Open `code/experiment1/index.html` in a browser by double-clicking it. No install, build command, server, login, or internet connection is needed. Keep the experiment folder intact.

The duck case always comes first. The other five cases are shuffled individually on every new run:

- Easy: duck webbed feet; giraffe neck length.
- Interactive: cheetah–gazelle speed; moth camouflage and bird visual discrimination.
- Hard: goat horizontal pupils; Saharan silver ant hairs. Each requests three explanations.

Consent comes first; “I do NOT agree” goes directly to an ending screen. Agreeing leads to familiarity and instructions. Each interactive case has two consecutive response screens, prey first and predator second, with the same paired image and scenario on both screens. There are eight response screens across six cases. All prompts use the same “Please come up with a possible natural-selection explanation for why…” form; hard cases ask for three possible explanations. Required demographics and feedback follow the cases. Two required Yes/No questions ask about college biology coursework and coursework covering evolution or natural selection, without requesting explanations. Responses are typed and there is no countdown. All six realistic pictures are AI-generated and bundled locally, including both species in each interactive picture.

## Download responses

At the end, download CSV or JSON. Nothing is uploaded. Closing or refreshing the tab discards unsaved responses. A new run creates a new anonymous review-session identifier and reshuffles the five cases after the duck case.

Each response-screen row includes its category, stable case ID, case position, screen position within the case, response species and prey/predator role (for interactive cases), wording, response, overall response time (`rt`), time to first text input (`first_input_rt`), and number of nonempty explanations. First input latency includes reading and typing and is not a direct measure of when thinking began. The hard cases request more output, so their total response times are not matched to the easy/interactive cases.

## Share with Shaun

The handoff ZIP contains an `evolution-mockup` folder. Unzip it fully, then open `evolution-mockup/code/experiment1/index.html`. All required files are in that experiment folder. The ZIP also includes instructions, design notes, and the complete image prompts.

To rebuild the ZIP with Python 3: `python3 tools/package_mockup.py`.

## Draft status

This is a review mockup, not a deployed Prolific study. The evolutionary histories are explicitly hypothetical, including the duck fossil dates. The actual Cornell consent HTML is copied verbatim from the current tort cognition adult forms, including its blue background. Its existing description, payment, and Qualtrics wording have been preserved as requested. Demographics retain age, gender, race, and ethnicity; state of residence is removed. All answers are required, including all three proposals on each hard case and a feedback response (which may be “None”). Familiarity is Yes/No only. The interface is black and white except for the blue consent form; animal pictures remain in color. Live collection details must be settled before recruitment.

The separate normativity and explanatory-preference projects, audio think-aloud recording, time pressure, hosting, and live participant data storage are outside this draft.

See `docs/design-notes.md`, `docs/image-prompts.json`, and `code/experiment1/assets/IMAGE_NOTES.md`.
