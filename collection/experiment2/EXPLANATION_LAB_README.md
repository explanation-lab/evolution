# Explanation Lab conversion report

Converted: 2026-10-16T10:54:30.825Z
Source ZIP: evolution-pilot-2-collection-source.zip
jsPsych: 8.3.0
Experiment version: 2.2.0
Client version: 1.5.1
Assignment: within_participant
Launch assignment parameter: condition
Launch conditions: mixed
Internal condition cells: bacteria_magnetic_crystals, barn_owl_asymmetric_ears, cheetah_gazelle_speed, duck_webbed_feet, giraffe_long_neck, goat_horizontal_pupils, lanternfish_light_organs, moth_bird_camouflage, silver_ant_hairs
Demographics: age, gender, gender_other, race, race_other, ethnicity, college_biology, evolution_course
Package fingerprint: 9b8db812e985c70dafedc78c98380f83ff7216709853c886376d6b87d1b22faf

## Changes
- Added explanation-lab.config.json with confirmed versions and data mappings.
- Added a frozen local Explanation Lab client at js/explanation-lab-client.js.
- Preserved the existing Explanation Lab save integration and re-verified its launch assignment wiring.

## Warnings from inspection
- A within-participant design was detected. The Console will use one launch group named mixed; internal trial cells remain inside jsPsych.

## Required next steps
1. Open and test the converted study locally.
2. Publish this converted folder through GitHub Pages.
3. Register the public Pages URL in the Explanation Lab Console.
4. Paste the Pages URL into the Console; it will read and verify this manifest automatically.
5. Complete every Sandbox condition and inspect both CSV exports.
6. Do not launch while any readiness item remains incomplete.