import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data: StatData[] = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/Holtzz19/personal-site/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {
    label: 'Lines of TypeScript powering this website',
    value: '2041',
    link: 'https://github.com/Holtzz19/personal-site/graphs/contributors',
  },
];

export default data;
