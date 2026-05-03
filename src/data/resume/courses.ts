export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Research Ethics Certificate',
    number: 'TCPS2CORE',
    link: 'https://tcps2core.ca/welcome',
    university: 'uOttawa',
  },
];

export default courses;
