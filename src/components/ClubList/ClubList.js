import React from 'react';
import T from 'prop-types';

import ClubCard from '../ClubCard/ClubCard';

const ClubList = ({ clubs }) => (
  <div className="row row-cols-1 row-cols-md-3 my-3">
    {clubs.map(club => (
      <div className="col-12 col-md-6 col-xl-4 mb-4" key={club.title}>
        <ClubCard club={club} />
      </div>))}
  </div>
)

ClubList.propTypes = {
  clubs: T.arrayOf(T.object).isRequired,
  className: T.string,
};

export default ClubList;

