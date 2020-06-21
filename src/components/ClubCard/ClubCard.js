import React from 'react';
import T from 'prop-types';

import '../../assets/scss/ClubCard.scss';

const ClubCard = ({ club: { title, logo, title_short, link } }) => (
  <div className="card shadow">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="stretched-link text-decoration-none outline-none"
    />
    <div className="logo-wrapper">
      <img src={logo} className="card-img-top card-logo" alt={title_short} />
    </div>
    <div className="card-body text-center">
      <p className="card-title">
        {title}
      </p>
    </div>
  </div >
)

ClubCard.propTypes = {
  logo: T.string,
  link: T.string,
  title: T.string,
  title_short: T.string,
};

export default ClubCard;
