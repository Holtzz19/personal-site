import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-05-19T12:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Ottawa ON',
  },
  {
    key: 'volunteering',
    label: 'Total Hours Volunteered *roughly*',
    value: '828',
  },
  {
    key: 'computers',
    label: 'Computers Built',
    value: 6,
  },
  {
    key: 'books',
    label: 'Books Read So Far',
    value: '82',
    link: 'https://www.goodreads.com/user/show/182053439-david-holtzman',
  },
  {
    key: 'music',
    label: 'Liked Songs on Spotify',
    value: '4007',
    link: 'https://open.spotify.com/user/k9taie3feffp4e4z4g1l6n8pp?si=Rh1k8dpzTxmVW4qYOlYezQ&nd=1&dlsi=6b2e39f9ed9549b9',
  },
];

export default data;
