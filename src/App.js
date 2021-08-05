import React from 'react';
import Button from './components/Button';
import style from './App.module.css';

function App() {
  return (
    <div style={{ padding: '2em' }}>
      <Button className={style.red}>Button</Button>
    </div>
  );
}

export default App;
