// Scenarios are explicitly hypothetical; pictures illustrate present-day animals.
// Categories are recorded for researchers but never displayed to participants.
const EVOLUTION_CASES = [
  {
    id: 'duck_webbed_feet', category: 'easy', title: 'Ducks', image: 'duck.png',
    alt: 'A realistic image of a modern duck standing with its webbed feet visible.', caption: 'Modern duck',
    scenario: 'Imagine that the fossil record showed that about 70 million years ago, the ancestors of modern ducks did not have webbed feet, but by about 30 million years ago, their descendants did have webbed feet.',
    question: 'Please set out how this change would be explained in terms of natural selection.', count: 1
  },
  {
    id: 'giraffe_long_neck', category: 'easy', title: 'Giraffes', image: 'giraffe.png',
    alt: 'A realistic image of a giraffe with its long neck visible.', caption: 'Modern giraffe',
    scenario: 'Imagine that the ancestors of modern giraffes had much shorter necks. Over many generations, their descendants came to have longer necks.',
    question: 'Please set out how this change would be explained in terms of natural selection.', count: 1
  },
  {
    id: 'cheetah_gazelle_speed', category: 'interactive', title: 'Cheetahs and gazelles', image: 'cheetah-gazelle.png',
    alt: 'Two realistic images: a cheetah on the left and a gazelle on the right.', captions: ['Cheetah', 'Gazelle'],
    scenario: 'Imagine that, over many generations, a population of gazelles became faster and faster. During the same period, a population of cheetahs that preyed on these gazelles also became faster and faster.',
    question: 'Please explain how these changes in both species could have occurred through natural selection.', count: 1
  },
  {
    id: 'moth_bird_camouflage', category: 'interactive', title: 'Moths and birds', image: 'moth-bird.png',
    alt: 'Two realistic images: a moth resting on bark on the left and a bird on the right.', captions: ['Moth on tree bark', 'Insect-eating bird'],
    scenario: 'Imagine that, over many generations, a population of moths became increasingly similar in appearance to the tree bark where they rested. During the same period, birds that preyed on these moths became increasingly able to distinguish them from the bark.',
    question: 'Please explain how these changes in both species could have occurred through natural selection.', count: 1
  },
  {
    id: 'goat_horizontal_pupils', category: 'hard', title: 'Goats', image: 'goat.png',
    alt: 'A realistic close-up of a goat’s head and eye, showing its horizontal rectangular pupil.', caption: 'Goat’s eye',
    scenario: 'Goats have rectangular, horizontally oriented pupils, as shown in the picture.',
    question: 'Please come up with three possible natural-selection explanations for why goats have these pupils.', count: 3
  },
  {
    id: 'silver_ant_hairs', category: 'hard', title: 'Saharan silver ants', image: 'silver-ant.png',
    alt: 'A realistic close-up of a Saharan silver ant with fine silvery hairs visible on its body.', caption: 'Saharan silver ant',
    scenario: 'Saharan silver ants have fine silvery hairs covering parts of their bodies, as shown in the picture.',
    question: 'Please come up with three possible natural-selection explanations for why these ants have silvery hairs.', count: 3
  }
];
