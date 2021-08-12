import React from 'react';
import themes from '../Themes.module.css';
import style from './styles.module.css';

/**
 * Esta lista contiene en cada index:
 *
 * - [0] = Nombre de clase CSS que contiene la propiedad `themes.ThemeA`
 * - [1] = Nombre de clase CSS que contiene la propiedad `themes.ThemeB`
 * - [2] = Nombre de clase CSS que contiene la propiedad `themes.ThemeC`
 *
 * Por ejemplo si queremos imprimir el nombre de clase que contiene `themes.ThemeB`
 * las dos lineas siguientes son equivalentes:
 *
 * console.log(themes.ThemeB);
 * console.log(themeList[1]);
 */
const themeList = [themes.ThemeA, themes.ThemeB, themes.ThemeC];

export const ThemeRange = ({ theme, onThemeChange }) => {
  return (
    <div className={style.ThemeRange}>
      <input
        style={{ width: '250px' }}
        type="range"
        min={0}
        max={2}
        value={themeList.indexOf(theme)}
        onChange={(event) => {
          const nextTheme = themeList[event.target.value];
          onThemeChange(nextTheme);
        }}
      />
    </div>
  );
};
export default ThemeRange;
