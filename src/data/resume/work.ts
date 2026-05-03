/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Huza Law Office',
    position: 'Legal Assistant',
    url: 'https://www.lawcornwall.com',
    startDate: '2023-05-01',
    summary: `Huza Law Office consists of a group of well-respected, innovative, and adept lawyers and staff specializing in real estate, wills/estates, corporate and civil litigation.`,
    highlights: [
      'Assist with legal and administrative tasks in a fast-paced law office environment.',
      'Support lawyers and staff with file organization, client communication, document preparation, and daily office operations.',
      'Gained exposure to multiple areas of law, including real estate, wills and estates, corporate matters, and litigation.',
      'Developed strong attention to detail, professionalism, discretion, and time-management skills.',
      'Learned how legal professionals manage client needs, deadlines, documentation, and problem-solving under pressure.',
      'Transitioned the firm from a mainly paper-based system to a digital based system',    
    ],
  },
  {
    name: 'K2 Petroleum',
    position: 'Cashier',
    url: 'https://www.k2petroleum.ca',
    startDate: '2023-06-01',
    endDate: '2025-09-10',
    summary: `K2 Petroleum is a gas station and convenience store located in Bainsville, Ontario.`,
    highlights: [
      'Provided customer service in a busy retail environment.',
      'Handled transactions, cash, inventory, stocking, cleaning, and general store upkeep.',
      'Built stronger communication, patience, multitasking, and problem-solving skills.',
      'Developed confidence working independently and managing responsibilities with minimal supervision.',
      'Gained valuable experience dealing with a wide range of customers and situations.',
    ],
  },
  {
    name: 'Destination Ontario',
    position: 'Travel Counsellor',
    url: 'https://www.destinationontario.com',
    startDate: '2022-05-01',
    endDate: '2022-09-01',
    summary: `Destination Ontario is an agency of the Government of Ontario focused on promoting Ontario as a preferred travel destination for local, national, and international visitors.`,
    highlights: [
      'Gained experience researching and communicating practical information in a friendly and accessible way.',
      'Assisted travellers with questions about destinations, attractions, routes, events, and local recommendations.',
      'Developed stronger public-facing communication skills.',
      'Learned how to provide clear, helpful, and accurate information to people with different needs and interests.',
    ],
  },
  {
    name: 'Laptop Parts Canada',
    position: 'Shipping Clerk',
    url: 'https://laptopparts.ca',
    startDate: '2021-02-01',
    endDate: '2021-07-01',
    summary: `An e-tailer specializing in the distribution and sales of computer, laptop and tablet parts and accessories.`,
    highlights: [
      'Gained experience with inventory handling, warehouse organization, and shipping procedures.',
      'Built a better understanding of how online retail operations function behind the scenes.',
      'Helped ensure orders were accurate, properly packed, and ready for delivery.',
      
    ],
  },
];

export default work;
