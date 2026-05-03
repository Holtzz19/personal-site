import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/holtzz',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/holtzz19',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/holtzxz/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://facebook.com/dholtzman44',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'mailto:david@holtzz.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
