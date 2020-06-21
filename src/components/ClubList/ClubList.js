import React from 'react';
import T from 'prop-types';

import ClubCard from '../ClubCard/ClubCard';

const ClubList = ({ clubs = [] }) => (
  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-3">
    {clubs.map(club => (
      <div className="col mb-4" key={club.title}>
        <ClubCard club={club} />
      </div>
    ))}
  </div>
)

ClubList.propTypes = {
  clubs: T.arrayOf(T.object),
};

export default ClubList;

