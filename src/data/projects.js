/**
 * Add or edit projects here. Each object becomes a card in the Projects section.
 *
 * Fields:
 *   title       — project name (required)
 *   description — short summary shown on the card (required)
 *   tags        — array of tech/tool strings displayed as chips (required)
 *   github      — full GitHub URL, or null to hide the link
 *   demo        — live demo URL, or null to hide the link
 */

const projects = [
  {
    title: 'Workout Tracker',
    description:
      'Full-stack app to track workouts and build a personal exercise library. Supports user auth, creating/editing/completing workouts, adding exercises, and viewing completed workout history.',
    tags: ['React', 'Express', 'PostgreSQL', 'Vite', 'JavaScript'],
    github: 'https://github.com/The-Marcy-Lab-School-Assignments/full-stack-project-remix-troncosojose22',
    demo: null,
  },
  {
    title: 'Shadow Realm',
    description:
      'A web app that displays random Yu-Gi-Oh! cards in a dynamic and visually immersive way. Users can browse cards, check the cheapest market prices, and look up any card in the game.',
    tags: ['JavaScript', 'Vite', 'HTML', 'CSS', 'YGOProDeck API'],
    github: 'https://github.com/jose-jojo-mls/mod-4-project',
    demo: 'https://jose-jojo-mls.github.io/ShadowRealm/',
  },
  {
    title: 'CLI Quiz App',
    description:
      'A command-line quiz game where users answer 5 questions, save their score with their name, and compete for a spot on the top-5 leaderboard.',
    tags: ['Node.js', 'JavaScript', 'npm'],
    github: 'https://github.com/troncosojose22/bonus-project-cli-app',
    demo: null,
  },
]

export default projects
