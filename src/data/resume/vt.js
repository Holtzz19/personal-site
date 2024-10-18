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
const vt = [
  {
    name: 'Huza Law Office',
    url: 'https://lawcornwall.com',
    startDate: '2023-05-03',
    endDate: '2023-07-01',
    summary: 'Before I was hired at Huza Law Office, I volunteered for the firm to further increase my knowledge of the legal world.',
    highlights: [
      'Knowing that Mr. Gauthier was planning on retiring, I started inquiring about volunteering with Huza Law Office, a law firm with which Lamoureux Gauthier shared space at the time. Mr. Huza gave me the opportunity to volunteer and I have been very grateful since.',
      'I volunteered twice a week for 2 months before being hired.',
      '128 hours of volunteer work.',
    ],
  },
  {
    name: 'Lamoureux Gauthier Professional Corporation',
    url: 'https://www.canadianlawlist.com/listingdetail/company/lamoureux-gauthier-professional-corporation-672364/',
    startDate: '2023-05-01',
    endDate: '2023-12-01',
    summary: 'Mr. Gauthier became my mentor and has provided me with great knowledge in different areas of law such as real estate, estates, wills, corporate, and commercial business.',
    highlights: [
      'Mr Gauthier gave me a great introduction to the legal world.',
    ],
  },
  {
    name: "Lalonde's Body Shop",
    url: 'https://www.facebook.com/jlmust/',
    startDate: '2019-07-1',
    endDate: '2022-09-01',
    summary: 'I started volunteering for Mr. Lalonde in high school and kept going until his retirement in 2022. He gave me valuable knowledge about the car industry, auto body work, and maintenance. I appreciate everything he has done for me.',
    highlights: [
      'I volunteered 1 or 2 days most weekends since the 11th grade.',
      'Roughly 700 Hours of volunteer work.',
    ],
  },
];

export default vt;
