import React from 'react';
import { ThemeSelect } from '../themes/selectors/ThemeSelect';
import style from './TopNavbar.module.css';

export const TopNavbar = ({ theme, onThemeChange }) => {
  return (
    <div className={style.TopNavbar}>
      <div>Home | About | Contact</div>
      <div>
        <ThemeSelect theme={theme} onThemeChange={onThemeChange} />
      </div>
    </div>
  );
};

export default TopNavbar;
