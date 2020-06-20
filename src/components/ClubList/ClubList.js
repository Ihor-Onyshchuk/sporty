import React from 'react';
import T from 'prop-types';

const ClubList = ({ clubs }) => {
  return (
    <div className="d-flex flex-wrap">
      {clubs.map(({ title, logo, title_short }) => (
        <div className="card" style={{ width: 18 + "rem" }} key={title}>
          <img src={logo} className="card-img-top" alt={title_short} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div >
      ))}
    </div>
  )
}

ClubList.propTypes = {
  clubs: T.arrayOf(T.object).isRequired,
  className: T.string,
};

export default ClubList;

