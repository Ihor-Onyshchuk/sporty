import React from 'react';
import T from 'prop-types';

import ClubCard from '../ClubCard/ClubCard';

const ClubList = ({ clubs }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 my-3">
      {clubs.map(club => <ClubCard {...club} key={club.title} />)}
    </div>
  )
}

ClubList.propTypes = {
  clubs: T.arrayOf(T.object).isRequired,
  className: T.string,
};

export default ClubList;

