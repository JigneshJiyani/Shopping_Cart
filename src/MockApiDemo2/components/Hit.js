import React from 'react';
import PropTypes from 'prop-types';


const Hit = ({ hit }) => (
  <div className="senator-details">
    <div className="senator-name">
      <div>{hit.name}</div>
      <div className="senator-state">{hit.state}</div>
      <div>{hit.email}</div>
      <div>{hit.phoneNo}</div>
    </div>
  </div>
);

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;