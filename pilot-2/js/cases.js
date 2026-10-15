// Historical scenarios are hypothetical; images illustrate the described organisms and features.
// Categories are recorded for researchers but never displayed to participants.
const EVOLUTION_CASES = [
  {
    id: 'duck_webbed_feet', category: 'easy', title: 'Ducks', image: 'duck.png', image_width: 1312, image_height: 1199,
    alt: 'A realistic image of a modern duck standing with its webbed feet visible.', caption: 'Modern duck',
    scenario: 'Imagine that the fossil record showed that about 70 million years ago, the ancestors of modern ducks did not have webbed feet, but by about 30 million years ago, their descendants did have webbed feet.',
    question: 'Please come up with a possible natural-selection explanation for why the descendants of these ducks developed webbed feet.', count: 1
  },
  {
    id: 'giraffe_long_neck', category: 'easy', title: 'Giraffes', image: 'giraffe.png', image_width: 1312, image_height: 1199,
    alt: 'A realistic image of a giraffe with its long neck visible.', caption: 'Modern giraffe',
    scenario: 'Imagine that the fossil record showed that about 70 million years ago, the ancestors of modern giraffes had short necks, but by about 30 million years ago, their descendants had long necks.',
    question: 'Please come up with a possible natural-selection explanation for why the descendants of these giraffes developed long necks.', count: 1
  },
  {
    id: 'cheetah_gazelle_speed', category: 'interactive', title: 'Cheetahs and gazelles', image: 'cheetah-gazelle.png', image_width: 1774, image_height: 887,
    alt: 'Two realistic images: a cheetah on the left and a gazelle on the right.', captions: ['Cheetah', 'Gazelle'],
    scenario: 'Imagine that, over many generations, a population of gazelles became faster and faster. During the same period, a population of cheetahs that preyed on these gazelles also became faster and faster.',
    question: 'Please come up with a possible natural-selection explanation for why both the gazelles and the cheetahs became faster. Explain both changes together in the box below.',
    response_species: 'gazelle_and_cheetah', response_role: 'combined', count: 1
  },
  {
    id: 'moth_bird_camouflage', category: 'interactive', title: 'Moths and birds', image: 'moth-bird.png', image_width: 1536, image_height: 1024,
    alt: 'Two realistic images: a moth resting on bark on the left and a bird on the right.', captions: ['Moth on tree bark', 'Insect-eating bird'],
    scenario: 'Imagine that, over many generations, a population of moths became increasingly similar in appearance to the tree bark where they rested. During the same period, birds that preyed on these moths developed increased abilities in visual discrimination.',
    question: 'Please come up with a possible natural-selection explanation for why the moths became increasingly similar in appearance to the tree bark where they rested and why the birds developed increased abilities in visual discrimination. Explain both changes together in the box below.',
    response_species: 'moth_and_bird', response_role: 'combined', count: 1
  },
  {
    id: 'goat_horizontal_pupils', category: 'hard', title: 'Goats', image: 'goat.png', image_width: 1370, image_height: 1148,
    alt: 'A realistic close-up of a goat’s head and eye, showing its horizontal rectangular pupil.', caption: 'Goat’s eye',
    scenario: 'Goats have rectangular, horizontally oriented pupils, as shown in the picture.',
    question: 'Please come up with a possible natural-selection explanation for why goats have rectangular, horizontally oriented pupils.', count: 1
  },
  {
    id: 'silver_ant_hairs', category: 'hard', title: 'Saharan silver ants', image: 'silver-ant.png', image_width: 1536, image_height: 1024,
    alt: 'A realistic close-up of a Saharan silver ant with fine silvery hairs visible on its body.', caption: 'Saharan silver ant',
    scenario: 'Saharan silver ants have fine silvery hairs covering parts of their bodies, as shown in the picture.',
    question: 'Please come up with a possible natural-selection explanation for why these ants have silvery hairs.', count: 1
  },
  {
    id: 'barn_owl_asymmetric_ears', category: 'hard', title: 'Barn owls', image: 'barn-owl-photorealistic.png', image_width: 1536, image_height: 1024,
    alt: 'A photorealistic close-up of a barn owl with a white heart-shaped face and tan and gray feathers.', caption: 'Barn owl',
    scenario: 'Barn owls have ear openings at different heights on the two sides of their heads. These openings are normally hidden beneath their feathers.',
    question: 'Please come up with a possible natural-selection explanation for why barn owls have ear openings at different heights.', count: 1
  },
  {
    id: 'lanternfish_light_organs', category: 'hard', title: 'Lanternfish', image: 'lanternfish-light-organs.png', image_width: 1536, image_height: 1024,
    alt: 'An illustrative side view of a lanternfish with a row of small glowing light-producing organs along its underside.', caption: 'Lanternfish',
    scenario: 'Lanternfish live in the ocean and have rows of small, light-producing organs along the underside of their bodies, as shown in the picture.',
    question: 'Please come up with a possible natural-selection explanation for why these fish have light-producing organs along the underside of their bodies.', count: 1
  },
  {
    id: 'bacteria_magnetic_crystals', category: 'hard', title: 'Magnetotactic bacteria', image: 'magnetic-bacteria.png', image_width: 1536, image_height: 1024,
    alt: 'A magnified cutaway illustration of a single bacterial cell containing a chain of small dark magnetic crystals.', caption: 'Bacterial cell (magnified illustration)',
    scenario: 'Bacteria are tiny, single-celled living things. Some bacteria that swim in water contain a chain of tiny magnetic crystals inside their cells, as shown in the illustration. These crystals make the cells line up with Earth’s magnetic field as they swim. Bacteria with this feature are called magnetotactic bacteria.',
    question: 'Please come up with a possible natural-selection explanation for why these bacteria contain a chain of magnetic crystals.', count: 1
  }
];
