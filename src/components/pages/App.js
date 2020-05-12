/* eslint-disable react/no-unescaped-entities */
/* DONE */
import React, { useReducer } from 'react';
import PercentageCircle from './../modules/PercentageCircle/PercentageCircle';
import './App.css';

const initialState = {
  progress: 0,
  loading: false,
  error: '',
};

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
});

const App = () => {
  // 'useReducer' instead of the usual 'useState'
  const [state, setState] = useReducer(reducer, initialState);

  const onProgressChange = e => {
    setState({ progress: e.target.value });
  };

  const { progress } = state;

  return (
    <div className="app">
      <h1>UIU - A development library, with 'Bit' at its foundation</h1>
      <p>
        This is of course a work in progress page, but its ultimate purpose is to document
        everything that is available in this development library.
      </p>
      <h2>PercentageCircle</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <PercentageCircle
          animate
          animationDuration="1s"
          responsive
          progress={progress}
          progressColor="rgb(76, 154, 255)"
          bgColor="#ecedf0"
          textColor="#6b778c"
          textStyle={{
            font: 'bold 4rem Helvetica, Arial, sans-serif',
            fontSize: '7em',
          }}
          roundedStroke
          showPercentage
          showPercentageSymbol
        />
        <input type="range" value={progress} min={0} max={100} onChange={onProgressChange} />
      </div>
      <div style={{ width: '200px', margin: '0 auto' }}>
        <PercentageCircle
          animate
          animationDuration="1s"
          responsive
          progress={75}
          progressColor="rgb(76, 154, 255)"
          bgColor="#ecedf0"
          textColor="#6b778c"
          textStyle={{
            font: 'bold 4rem Helvetica, Arial, sans-serif',
            fontSize: '7em',
          }}
          roundedStroke
          showPercentage
          showPercentageSymbol
        />
      </div>
    </div>
  );
};

export default App;
