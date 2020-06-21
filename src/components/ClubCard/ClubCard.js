import React from 'react';
import T from 'prop-types';

import '../../assets/scss/ClubCard.scss';

const ClubCard = ({ title, logo, title_short, link }) => {
  return (
    <div className="col mb-4">
      <div className="card shadow">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="stretched-link text-decoration-none outline-none"
        />
        <img src={logo} className="card-img-top card-logo" alt={title_short} />
        <div className="card-body text-center">
          <h5 className="card-title">
            {title}
          </h5>
        </div>
      </div >
    </div>
  )
}

ClubCard.propTypes = {
  logo: T.string,
  link: T.string,
  title: T.string,
  title_short: T.string,
};

export default ClubCard;
