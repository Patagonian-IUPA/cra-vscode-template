import React, { useState } from 'react';
import styles from './App.module.css';
import classnames from 'classnames';
import themes from './themes/Themes.module.css';

const { DarkA, DarkB } = themes;

function App() {
  const [theme, setTheme] = useState(themes.DarkA);

  return (
    <div className={classnames(theme, styles.AppTheme, styles.App)}>
      <button
        onClick={() => {
          if (theme === DarkA) {
            setTheme(DarkB);
          } else {
            setTheme(DarkA);
          }
        }}
      >
        {theme}
      </button>
      <div>Hello</div>
    </div>
  );
}

export default App;
