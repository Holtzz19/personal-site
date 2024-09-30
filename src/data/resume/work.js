/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Huza Law Office',
    position: 'Administrative Assistant',
    url: 'https://lawcornwall.com',
    startDate: '2023-05-03',
    summary: 'Huza Law Office consists of a group of well-respected, innovative, and adept lawyers and staff specializing in real estate, wills/estates, corporate and civil litigation since 2002.',
    highlights: [
      'My boss Jonathan Huza and his partner Victor Lestyan are fantastic lawyers. I see them as my role models and mentors. They push me to be better every day.',
      'Mr. Huza has given me a close look into the world of corporations, real estate, and wills.',
      "Mr. Lestyan is our litigator. He knows that I have a strong interest in litigation, so he has gone above and beyond to show me what litigation is all about. I've been able to go to court with him on many occasions. He has also taught me about legal research, the courts library, and how to use databases like Westlaw, CanLII, and Lexis Advance Quicklaw.",
      'I learned how to use Quickbooks, Unity, and CLIO.',
      'I cataloged and organized all client files, digitizing them by scanning and adding OCR to over half a million pages',
      'Every day presents new challenges, keeping me sharp and engaged. This role has provided an unparalleled learning experience, and I continue to grow professionally with each new day.',
    ],
  },
  {
    name: 'K2 Petroleum',
    position: 'Cashier',
    url: 'https://www.k2petroleum.ca',
    startDate: '2023-04-22',
    summary: 'A gas station and convenience store located in Bainsville, Ontario, off exit 825 on the 401.',
    highlights: [
      "There's always something to do. You're either cleaning, doing inventory, stocking, or you're upfront with a customer. You don't easily get bored.",
      'Its great place to sharpen my mental math skills and my customer service skills.',
    ],
  },
  {
    name: 'Destination Ontario',
    position: 'Travel Counsellor',
    url: 'https://www.destinationontario.com/',
    startDate: '2022-05-01',
    endDate: '2022-09-01',
    summary: 'Destination Ontario is an agency of the Government of Ontario with a vision to position Ontario as a preferred global destination. Destination Ontario&apos;s mission is to generate increased visitation by Ontario, Canadian and international tourists.',
    highlights: [
      'I loved working at the travel centre. It was one of the best experiences I ever had.',
      'I enhanced my Excel skills by developing an inventory management system to track our brochures and merchandise.',
      'I also greatly sharpened my customer service skills, public speaking skills, and time management skills.',
      'I met many interesting people from all over the world.',
      'I learned a lot about Ontario and its attractions.',
      'I recommend that all high school students work at Destination Ontario Travel and Information Centres.',
    ],
  },
  {
    name: 'Laptop Parts Canada',
    position: 'Shipping Clerk',
    url: 'http://laptopparts.ca',
    startDate: '2021-02-01',
    endDate: '2021-07-01',
    summary: 'An e-tailer specializing in the distribution and sales of computer, laptop and tablet parts and accessories.',
    highlights: [
      'I finished high school early through COVID and worked at Laptop Parts Canada before starting my first year at uOttawa.',
      'One of the most valuable skills I developed here is time management, which enabled me to excel in fast-paced environments with greater efficiency.',
    ],
  },
];

export default work;
