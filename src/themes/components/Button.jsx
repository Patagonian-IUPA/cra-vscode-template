import React from 'react';
import classNames from 'classnames';
import style from './Button.module.css';

export const Button = ({ type = 'regular', className = '', ...rest }) => {
  return (
    <button
      className={classNames(style.base, style[type], className)}
      {...rest}
    />
  );
};

export default Button;
