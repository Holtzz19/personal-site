const skills = [
  {
    title: 'English',
    competency: 5,
    category: ['Spoken Languages'],
  },
  {
    title: 'French',
    competency: 3,
    category: ['Spoken Languages'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 2,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Westlaw',
    competency: 2,
    category: ['Administrative Tools', 'Databases'],
  },
  {
    title: 'CanLII',
    competency: 2,
    category: ['Administrative Tools', 'Databases'],
  },
  {
    title: 'Lexis Advance Quicklaw',
    competency: 2,
    category: ['Administrative Tools', 'Databases'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Ruby',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Ruby on Rails',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Microsoft Office',
    competency: 4,
    category: ['Administrative Tools'],
  },
  {
    title: 'Quickbooks',
    competency: 1,
    category: ['Administrative Tools'],
  },
  {
    title: 'Unity',
    competency: 2,
    category: ['Administrative Tools'],
  },
  {
    title: 'CLIO',
    competency: 3,
    category: ['Administrative Tools'],
  },
  {
    title: 'Leadership',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Organization',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Time Management',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Attention To Detail',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Debating',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Public Speaking',
    competency: 3,
    category: ['Soft Skills'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
