# Experiment 1 design notes

Version 0.2.0, October 11, 2026.

The immediate pilot follows Shaun's October 11 proposal in “Projects for students.” The prior “teleology chat” motivates processing advantages of teleological representations and the possibility of teleological thinking even in people who can produce natural-selection explanations. The broader project includes other designs; this draft is the focused six-case version approved by David.

## Flow and responses

Consent → familiarity → instructions → six shuffled cases → demographics → required feedback → local response downloads.

Familiarity is asked once, before all cases, with Yes/No choices only. Either choice advances after a response is selected. Every participant sees each case exactly once. Cases are shuffled individually, with no category blocks and no requirement that an easy case comes first. Category labels are included in the exported data, not shown on screen. All cases have realistic AI-generated illustrative pictures; interactive cases show two animals in one two-panel picture.

The easy and interactive cases request one typed explanation each. The goat and ant cases request three explanations in separate text boxes. Instructions ask participants to write their thoughts while working toward a plausible, specific natural-selection proposal. No example answer or account of the natural-selection mechanism is supplied. There is no countdown or audio recording.

David requested required responses on every screen. Every case field, including all three fields on each hard case, must contain non-whitespace text. Skip controls are removed. Demographics retain age, gender, race, and ethnicity and require all four; state is removed. Other gender/race selections require accompanying text. Race remains single-choice as in the source. Feedback requires text, with “None” suggested when there is no feedback. Participation can still be ended by closing the window.

## Wording choices

The four historical cases are hypothetical. Duck dates retain Shaun's 70-million/30-million-year illustration but are introduced with “Imagine that the fossil record showed…” rather than asserted as an established fossil record. Giraffe neck change uses the same hypothetical fossil-record structure and 70-million/30-million-year dates as the duck case. Both joint evolutionary patterns are likewise explicitly imagined. The goat and ant descriptions identify the features without supplying their proposed benefits.

The main measure is the content/structure of explanations, not a forced-choice test or an automatically scored biological answer. Competence can be evaluated afterward from the easy cases. Historical natural-selection structure, current utility, need-based/goal-directed explanations, and scientifically correct biological hypotheses should be distinguished in a later coding scheme. No correctness feedback, scoring or screening is implemented.

Two hard responses request three proposals each, while the other four request one. Total RT across these categories cannot isolate difficulty. Randomization means easy answers may follow hard cases; this is the approved order design. Typed text and first-input latency cannot establish the full sequence of covert reasoning in the way audio think-aloud might.

## Reused forms and changes

Source: `tort_cognition/code/shared/js/pilot-adult-forms.js` in David's local GitHub checkout.

The actual consent stimulus HTML is copied verbatim from that source, with the original blue background, heading, description, payment, confidentiality, Qualtrics reference, contacts and rights language. The original single “I Agree” choice is used; the form directs people who decline to close the window. This supersedes the adapted wording in version 0.1.0. Consent is not represented as a newly approved protocol. Existing consent text is preserved for this review mockup as explicitly requested; live recruitment/collection details remain to be finalized.

Live Prolific deployment and server storage are not implemented. This draft stores responses only in memory and allows explicit CSV/JSON downloads. No private email bodies, credentials, or participant records are included in the repository or ZIP.

## Dependencies and images

jsPsych 8.3.0; html-button-response 2.1.0; survey-html-form 2.1.0. Browser bundles, CSS with embedded fonts, and the MIT license are stored under `code/experiment1/vendor`. Scripts use ordinary relative script tags; no ES modules, fetch requests, CDNs, or build steps are needed at runtime. Pictures are loaded through HTML Image objects before consent appears.

All images were made using the built-in image_gen tool at David's request. They are generated illustrations with realistic photographic appearance, not documentary wildlife photographs. Their original generation prompts are in `image-prompts.json`.


## Presentation

White page background, black text and controls, centered instructions, and realistic color animal pictures. The consent form retains its blue background.
