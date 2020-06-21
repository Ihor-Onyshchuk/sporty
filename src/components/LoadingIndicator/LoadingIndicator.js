import React from 'react';

import './LoadingIndicator.scss';
import loadingIndicator from '../../assets/images/loadIndicators/load-indicator.gif';

const LoadingIndicator = () => (
  <div className="d-inline-block load-indicator">
    <img className="load-img" src={loadingIndicator} alt="" />
    <div className="load-bg"></div>
  </div>
);

export default LoadingIndicator;

