import React from 'react';

import '../../assets/scss/LoadingIndicator.scss';
import loadingIndicator from '../../assets/load-indicator.gif';

const LoadingIndicator = () => (
  <div className="d-inline-block load-indicator">
    <img className="load-img" src={loadingIndicator} alt="loader" />
    <div className="load-bg"></div>
  </div>
);

export default LoadingIndicator;

