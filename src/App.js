import React, { useState } from 'react';
import Button from './components/Button';
import themes from './components/themes.module.css';

function App() {
  const [theme, setTheme] = useState(themes.ThemeB);

  return (
    <>
      <div>
        <label>
          ThemeA
          <input
            id="themASelector"
            name="themASelector"
            type="radio"
            checked={theme === themes.ThemeA}
            onClick={() => {
              setTheme(themes.ThemeA);
            }}
          />
        </label>

        <label>
          ThemeB
          <input
            type="radio"
            checked={theme === themes.ThemeB}
            onClick={() => {
              setTheme(themes.ThemeB);
            }}
          />
        </label>
      </div>
      <div style={{ padding: '2em' }} className={theme}>
        <Button>Sin parámetros</Button>
        <Button type="regular">Regular</Button>
        <Button type="primary">Primary</Button>

        <hr />

        <div className={themes.ThemeA}>
          <Button>Sin parámetros</Button>
          <Button type="regular">Regular</Button>
          <Button type="primary">Primary</Button>
        </div>
      </div>
    </>
  );
}

export default App;
