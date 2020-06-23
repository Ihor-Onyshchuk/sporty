import React from 'react';
import T from 'prop-types';

import './ClubCard.scss';

const ClubCard = ({ club: { title, logo, title_short, link }, style }) => (
  <div className="card shadow club-card" style={style}>
    <a
      title={title}
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="stretched-link text-decoration-none outline-none"
    />
    <div className="rounded-top logo-wrapper">
      <img src={logo} className="card-img-top card-logo" alt={title_short} />
    </div>
    <div className="card-body text-center">
      <p className="card-title text-truncate">
        {title}
      </p>
    </div>
  </div >
)

ClubCard.propTypes = {
  club: T.shape({
    title: T.string,
    logo: T.string,
    title_short: T.string,
    link: T.string
  }).isRequired
}

export default ClubCard;
