import React from 'react';
import { PercentageCircleDemo } from 'components/modules/PercentageCircle';
import './App.css';

const App = () => (
  <div className="app" style={{ padding: '20px' }}>
    <h1
      style={{
        marginTop: '0',
      }}
    >
      UIU - A development library, with 'Bit' at its foundation
    </h1>
    <p>
      This is of course a work in progress page, but its ultimate purpose is to document everything
      that is available in this development library.
    </p>
    <PercentageCircleDemo />
  </div>
);

export default App;
