import React from 'react';
import cl from 'classnames';

import styles from './Button.module.css';

export const Button = ({ className, ...rest }) => {
  return <Button className={cl(styles.base, className)} {...rest} />;
};

export default Button;
