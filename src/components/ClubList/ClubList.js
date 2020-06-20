import React from 'react';
import T from 'prop-types';

const ClubList = ({ clubs }) => {
  return (
    <div class="row row-cols-1 row-cols-md-3">
      {clubs.map(({ title, logo, title_short, link }) => (
        <div class="col mb-4" key={title}>
          <div className="card">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="stretched-link text-decoration-none outline-none"
            />
            <img src={logo} className="card-img-top" alt={title_short} />
            <div className="card-body">
              <h5 className="card-title">
                {title}
              </h5>
            </div>
          </div >
        </div>
      ))}
    </div>
  )
}

ClubList.propTypes = {
  clubs: T.arrayOf(T.object).isRequired,
  className: T.string,
};

export default ClubList;

