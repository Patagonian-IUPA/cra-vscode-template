import React from 'react';
import cl from 'classnames';

import styles from './Button.module.css';

export const Button = ({ type, className, ...rest }) => {
  const claseTipo =
    type === 'regular' || type === undefined ? styles.regular : styles.primary;

  return <button className={cl(styles.base, claseTipo, className)} {...rest} />;
};

export default Button;
