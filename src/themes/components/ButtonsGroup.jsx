import React from 'react';
import Button from './Button';
import style from './ButtonsGroup.module.css';

export const ButtonsGroup = () => {
  return (
    <div className={style.ButtonsGroup}>
      <Button className={style.ButtonCustomization}>Regular</Button>
      <Button className={style.ButtonCustomization} type="primary">
        Primary
      </Button>
      <Button className={style.ButtonCustomization} type="warning">
        Warning
      </Button>
      <Button className={style.ButtonCustomization} type="danger">
        Danger
      </Button>
    </div>
  );
};
export default ButtonsGroup;
