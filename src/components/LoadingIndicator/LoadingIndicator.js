import React from 'react';

import './LoadingIndicator.scss';
import loadingIndicator from '../../assets/images/loadIndicators/load-indicator.gif';

const LoadingIndicator = () => (
  <div className="load-indicator">
    <img className="load-img" src={loadingIndicator} alt="" />
    <div className="load-bg" />
  </div>
);

export default LoadingIndicator;