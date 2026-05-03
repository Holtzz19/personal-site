'use client';

import { useEffect, useState } from 'react';

import type { StatData } from '../../components/Stats/types';

/** Birth date for age calculation (ISO format) */
const BIRTH_DATE = '2003-05-19T12:30:00';

/** Milliseconds in an average year (accounting for leap years) */
const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2421897;

/** Update interval for age display in ms */
const AGE_UPDATE_INTERVAL = 25;

/** Number of decimal places for age display */
const AGE_PRECISION = 11;

function Age() {
  const [age, setAge] = useState<string>('');

  const tick = () => {
    const birthTime = new Date(BIRTH_DATE);
    setAge(
      ((Date.now() - birthTime.getTime()) / MS_PER_YEAR).toFixed(AGE_PRECISION),
    );
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), AGE_UPDATE_INTERVAL);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
}

const data: StatData[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Cornwall, ON',
    link: 'https://www.google.com/maps/place/Cornwall,+ON'
  },
  {
    key: 'spotify',
    label: 'Liked songs on Spotify',
    value: '4534',
    link: 'https://open.spotify.com/user/k9taie3feffp4e4z4g1l6n8pp?nd=1&dlsi=6b2e39f9ed9549b9'
  },
  {
    key: 'goodreads',
    label: 'Books in my collection',
    value: '82',
    link: 'https://www.goodreads.com/user/show/182053439-david-holtzman'
  }
];

export default data;
