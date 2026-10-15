# Pilot 2

Open `index.html` to review the self-contained jsPsych study. It retains Pilot 1's bundled jsPsych 8.3.0, plugins, response-screen styling, original pictures, and forms, with a worked example and three additional illustrated cases. No build or internet connection is needed. Responses can be downloaded as CSV or JSON at completion.

## Sequence

Consent, initial familiarity, and instructions precede:

1. A worked finch-beak example with an illustrative picture of beak-size variation, a scenario and question, and four short steps covering variation, differential survival/reproduction, inheritance, and population change.
2. Duck webbed feet, with the example no longer visible.
3. Gazelle and cheetah speed, explained together in one box.
4. Moth camouflage and bird visual discrimination, explained together in one box.
5. Goat horizontal pupils.
6. Saharan silver-ant hairs.
7. Barn owl ear asymmetry.
8. Lanternfish light-producing organs.
9. Magnetic crystals in magnetotactic bacteria, with a plain-language description of bacteria and magnetic alignment.
10. Giraffe necks as the final easy response.

Demographics, feedback, and the download screen follow. Every response screen has one required explanation box. Each paired case has one screen asking about both changes, with its original paired picture and scenario. No stage is randomized, no deadline is imposed, and no feedback or model answer appears on response screens. The five hard cases are goat, ant, owl, fish, and bacteria; this order is a pilot sequence, not an empirically established difficulty ranking.

## Data

There are nine case-response trials and a separate worked-example trial. The example records viewing time and its image filename without being treated as a participant explanation. Data include version `2.1.2`, pilot `pilot_2`, training example `finch_beaks`, case order, item IDs, scenario and question text, response text, response time, and first-input latency. Each case has one screen and uses `explanation_1`. The combined pair trials use the case ID as their item ID (rather than the old species-specific suffixes), `response_role: combined`, and `response_species: gazelle_and_cheetah` or `moth_and_bird`.

This is the offline review package. The existing hosted Pilot 1 and its collection settings have not been replaced.

## Example reference

The finch example is a hypothetical illustration informed by the seed-availability, beak-size, survival, and inheritance findings summarized in [HHMI BioInteractive's finch materials](https://www.biointeractive.org/classroom-resources/effects-natural-selection-finch-beak-size). The text is newly written; no HHMI images or branding are included.

## Additional case references

Researcher references only; participant scenarios describe the features without giving their functions or evolutionary histories:

- [Krings et al., barn owl ear asymmetry](https://pubmed.ncbi.nlm.nih.gov/29279251/): anatomical left opening higher than right. The current screen uses a generated photorealistic portrait with intact feathers; the text explains that the ear openings are normally concealed.
- [Lanternfish photophores](https://www.sciencedirect.com/science/article/pii/S0006291X19321138): ventrolateral light-producing organs in Diaphus watasei, used as the visual basis for the illustrative fish.
- [Du et al., magnetosome evolution](https://journals.asm.org/doi/full/10.1128/msystems.00315-19) and [Frankel et al., magneto-aerotaxis](https://pubmed.ncbi.nlm.nih.gov/9251816/): intracellular magnetic crystals and alignment during swimming. The current image is a generated photorealistic electron-microscopy-style image, not experimental microscopy or a scale reference.
