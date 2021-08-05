import React from 'react';
import styles from './styles.module.css';
import themeClassNames from '../Themes.module.css';

export const ThemeSelect = () => {
  return (
    <select
      name="theme-select"
      id="theme-select"
      value="DarkA"
      className={styles.ThemeSelect}
    >
      <option value="DarkA">DarkA</option>
      <option value="DarkB">DarkB</option>
      <option value="DarkC">DarkC</option>
    </select>
  );
};
