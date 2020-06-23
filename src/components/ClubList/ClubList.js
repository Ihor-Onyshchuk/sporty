import React from 'react';
import T from 'prop-types';

import ClubCard from '../ClubCard/ClubCard';
import AnimatedCard from '../AnimatedCard/AnimatedCard'

const ClubList = ({ clubs = [] }) => (
  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-3">
    {clubs.map((club, index) => (
      <div className="col mb-4" key={club.title}>
        <AnimatedCard card={ClubCard} cardProps={{ club }} index={index} />
      </div>
    ))}
  </div>
)

ClubList.propTypes = {
  clubs: T.arrayOf(T.object),
};

export default ClubList;