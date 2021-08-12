import React from 'react';
import styles from './styles.module.css';
import themes from '../Themes.module.css';

/**
 * Selector the themes de tipo "select".
 *
 * - Recibe `theme`: que le indica a este componente cual es el theme actualmente en uso.
 * - Recibe `onThemeChange`: una función (callback) que será *llamada* pasándole
 * como parámetro el theme que el usuario está intentado elegir.
 */
export const ThemeSelect = ({ theme, onThemeChange }) => {
  return (
    <select
      name="theme-select"
      id="theme-select"
      value={theme}
      className={styles.ThemeSelect}
      onChange={(event) => {
        onThemeChange(event.target.value);
      }}
    >
      <option value={themes.ThemeA}>ThemeA</option>
      <option value={themes.ThemeB}>ThemeB</option>
      <option value={themes.ThemeC}>ThemeC</option>
    </select>
  );
};
