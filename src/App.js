import React, { useState } from 'react';
import Button from './themes/components/Button';
import { ThemeRadio } from './themes/selectors/ThemeRadio';
import styles from './App.module.css';
const App = () => {
  const [theme, setTheme] = useState();

  return (
    <div className={styles.App}>
      <ThemeRadio theme={theme} onThemeChange={setTheme} />
      <div className={styles.Buttons}>
        <Button theme={theme} style={{ margin: '.5em' }}>
          Regular
        </Button>
        <Button theme={theme} style={{ margin: '.5em' }} type="primary">
          Primary
        </Button>
        <Button theme={theme} style={{ margin: '.5em' }} type="warning">
          Warning
        </Button>
        <Button theme={theme} style={{ margin: '.5em' }} type="danger">
          Danger
        </Button>
      </div>
    </div>
  );
};

export default App;
