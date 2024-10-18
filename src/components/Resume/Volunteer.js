import React from 'react';
import PropTypes from 'prop-types';

import Vt from './Volunteer/vt';

const Volunteer = ({ data }) => (
  <div className="volunteer">
    <div className="link-to" id="volunteer" />
    <div className="title">
      <h3>Volunteering & Mentoring</h3>
    </div>
    {data.map((vt) => (
      <Vt data={vt} key={`${vt.name}-${vt.position}`} />
    ))}
  </div>
);

Volunteer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      position: PropTypes.string,
      url: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      summary: PropTypes.string,
    }),
  ),
};

Volunteer.defaultProps = {
  data: [],
};

export default Volunteer;
