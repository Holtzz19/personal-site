export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
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
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development',],
  },
  {
    title: 'Next.JS',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'CLIO',
    competency: 5,
    category: ['Administrative Tools'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Office Suite',
    competency: 5,
    category: ['Administrative Tools'],
  },
  {
    title: 'Unity (Dye & Durham)',
    competency: 5,
    category: ['Administrative Tools'],
  },
  {
    title: 'Quintalink',
    competency: 5,
    category: ['Administrative Tools'],
  },
  {
    title: 'Leadership',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Organization',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Time Management',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Attention To Detail',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Debating',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Public Speaking',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Empathy',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Active Listening',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Cloud Infrastructure'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Cloud Infrastructure', 'Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 *
 * Hex values from tailwind.css @theme block:
 * --color-skill-1: #6968b3, --color-skill-2: #37b1f5, --color-skill-3: #40494e
 * --color-skill-4: #515dd4, --color-skill-5: #e47272, --color-skill-6: #cc7b94
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' }, // #6968b3 - dark bg
  { color: 'var(--color-skill-2)', textColor: 'dark' }, // #37b1f5 - light bg
  { color: 'var(--color-skill-3)', textColor: 'light' }, // #40494e - dark bg
  { color: 'var(--color-skill-4)', textColor: 'light' }, // #515dd4 - dark bg
  { color: 'var(--color-skill-5)', textColor: 'dark' }, // #e47272 - light bg
  { color: 'var(--color-skill-6)', textColor: 'dark' }, // #cc7b94 - light bg
];

// Fallback colors for categories beyond the predefined set (with pre-computed contrast)
const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

/**
 * Build categories from skills with type-safe color assignment.
 * Logs a warning in development if there are more categories than colors.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  // Define your desired category order here
  const desiredOrder = [
    'Spoken Languages',
    'Soft Skills',
    'Administrative Tools',
    'Languages',
    'Web Development',
    'Cloud Infrastructure',
  ];

  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort((a, b) => {
    const indexA = desiredOrder.indexOf(a);
    const indexB = desiredOrder.indexOf(b);
    // Categories in desiredOrder come first, sorted by their position
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    // Categories not in desiredOrder are sorted alphabetically
    return a.localeCompare(b);
  });

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
