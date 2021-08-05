import React from 'react';
import styles from './styles.module.css';
import themeClassNames from '../Themes.module.css';

export const ThemeRadio = ({
  theme = themeClassNames.ThemeA,
  onThemeChange = (theme) => console.info(theme),
}) => {
  return (
    <div className={styles.ThemeRadioContainer}>
      <div className={styles.ThemeRadioItem}>
        <input
          type="radio"
          id="radio-DarkA"
          name="radio-DarkA"
          value="DarkA"
          checked={theme === themeClassNames.ThemeA}
          onChange={() => onThemeChange(themeClassNames.ThemeA)}
        />
        <label htmlFor="radio-DarkA">Theme A</label>
      </div>

      <div className={styles.ThemeRadioItem}>
        <input
          type="radio"
          id="radio-DarkB"
          name="radio-DarkB"
          value="DarkB"
          checked={theme === themeClassNames.ThemeB}
          onChange={() => onThemeChange(themeClassNames.ThemeB)}
        />
        <label htmlFor="radio-DarkB">Theme B</label>
      </div>

      <div className={styles.ThemeRadioItem}>
        <input
          type="radio"
          id="radio-DarkC"
          name="radio-DarkC"
          value="DarkC"
          checked={theme === themeClassNames.ThemeC}
          onChange={() => onThemeChange(themeClassNames.ThemeC)}
        />
        <label htmlFor="radio-DarkC">Theme C</label>
      </div>
    </div>
  );
};
