import React from 'react';
import cx from 'classnames';
import T from 'prop-types';

import '../../assets/scss/ButtonSwitcher.scss';

const ButtonSwitcher = ({ options, active, onChange, className }) => (
  <div className="btn-group d-flex flex-wrap my-3" role="group">
    {options.map(option => {
      const isActive = active === option.slug;
      return (
        <button
          key={option.slug}
          className={cx('btn-sm category-btn m-1', className, { active: isActive })}
          type="button"
          onClick={() => (isActive ? null : onChange(option.slug))}
        >
          {option.title}
        </button>
      );
    })}
  </div>
)

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