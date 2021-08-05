import React from 'react';
import Button from './components/Button';
import style from './App.module.css';

function App() {
  return (
    <div style={{ padding: '2em' }}>
      <Button>Sin parametros</Button>
      <Button type="regular">Regular</Button>
      <Button type="primary">Primary</Button>
    </div>
  );
}

export default App;
