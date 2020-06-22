import React from 'react';
import T from 'prop-types';
import { Spring } from 'react-spring/renderprops';

import ClubCard from '../ClubCard/ClubCard';

const ClubList = ({ clubs = [] }) => (
  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-3">
    {clubs.map((club, index) => (
      <div className="col mb-4" key={club.title}>
        <Spring
          from={{ scale: '0' }}
          to={{ scale: '1' }}
          config={{ delay: index * 100, duration: 500 }}
        >
          {springProps => (
            <ClubCard club={club} style={springProps} />
          )}
        </Spring>
      </div>
    ))}
  </div>
)

ClubList.propTypes = {
  clubs: T.arrayOf(T.object),
};

export default ClubList;

