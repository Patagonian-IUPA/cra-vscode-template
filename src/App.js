import React, { useState } from 'react';
import { ThemeRadio } from './themes/selectors/ThemeRadio';
import styles from './App.module.css';
import Themes from './themes/Themes.module.css';
import classNames from 'classnames';
import ButtonsGroup from './themes/components/ButtonsGroup';
import { ThemeSelect } from './themes/selectors/ThemeSelect';
import ThemeRange from './themes/selectors/ThemeRange';

const App = () => {
  const [theme, setTheme] = useState(Themes.ThemeA);

  return (
    <div className={classNames(styles.App, theme)}>
      <ThemeRadio theme={theme} onThemeChange={setTheme} />
      <ThemeRange theme={theme} onThemeChange={setTheme} />
      <ThemeSelect theme={theme} onThemeChange={setTheme} />
      <ButtonsGroup />
    </div>
  );
};

export default App;
