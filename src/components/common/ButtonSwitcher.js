import React from 'react';
import cx from 'classnames';
import T from 'prop-types';

import './ButtonSwitcher.scss';

const ButtonSwitcher = ({ options, active, onChange }) => (
  <div className="btn-group d-flex flex-wrap mt-2 mb-3" role="group">
    {options.map(option => {
      const isActive = active === option.slug;
      return (
        <button
          key={option.slug}
          className={cx('btn-sm category-btn', { active: isActive })}
          type="button"
          onClick={() => (isActive ? null : onChange(option.slug))}
        >
          {option.title}
        </button>
      );
    })}
  </div>
);

ButtonSwitcher.propTypes = {
  options: T.arrayOf(T.shape({
    slug: T.string,
    title: T.string
  })).isRequired,
  active: T.string.isRequired,
  onChange: T.func.isRequired,
  className: T.string,
};

export default ButtonSwitcher;