import React from 'react';
import styles from './App.module.css';
import classnames from 'classnames';

function App() {
  return (
    <div className={classnames(styles.App)}>
      <div>Hello</div>
    </div>
  );
}

export default App;
