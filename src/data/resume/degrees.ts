export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Yorkville University',
    degree: 'Master of Arts in Counselling Psychology (MACP)',
    link:   'https://www.yorkvilleu.ca/programs/master-of-arts-in-counselling-psychology/',
    year:    2027,
  },
  {
    school: 'University of Ottawa (uOttawa)',
    degree: 'Honours BA Psychology',
    link:   'https://catalogue.uottawa.ca/en/undergrad/honours-ba-psychology/',
    year:    2025,
  },
  {
    school: 'Charlan District High School',
    degree: 'High school diploma - French Immersion Certificate',
    link:   'https://buffalo.edu',
    year:    2021,
  },
];

export default degrees;
