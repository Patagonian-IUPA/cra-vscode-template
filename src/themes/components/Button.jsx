import React from 'react';
import classNames from 'classnames';
import style from './Button.module.css';
import themes from '../Themes.module.css';

export const Button = ({
  theme = themes.ThemeA,
  type = 'regular',
  className = '',
  ...rest
}) => {
  return (
    <button
      className={classNames(style.base, theme, style[type], className)}
      {...rest}
    />
  );
};

export default Button;
