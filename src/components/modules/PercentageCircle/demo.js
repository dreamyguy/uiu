import React, { useReducer } from 'react';
import PercentageCircle from './PercentageCircle';

const initialState = {
  progress: 0,
};

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
});

const PercentageCircleDemo = () => {
  // 'useReducer' instead of the usual 'useState'
  const [state, setState] = useReducer(reducer, initialState);

  const onProgressChange = e => {
    setState({ progress: parseInt(e.target.value, 10) });
  };

  const { progress } = state;

  return (
    <div
      className="demo"
      style={{
        margin: '0 auto',
        maxWidth: '500px',
      }}
    >
      <h2>PercentageCircle</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'top',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <PercentageCircle
            animate
            animationDuration="1s"
            responsive
            progress={progress}
            progressColorIsDynamic
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
        <PercentageCircle
          animate
          animationDuration="1s"
          responsive
          progress={progress}
          progressColor="rgb(76, 154, 255)"
          bgColor="#ecedf0"
          textColor="#6b778c"
          percentageSymbolColor="rgba(236, 237, 240, .5)"
          percentageSymbolStyle={{
            fontSize: '20em',
          }}
          textStyle={{
            font: 'bold 4rem Helvetica, Arial, sans-serif',
            fontSize: '10em',
          }}
          roundedStroke
          showPercentage
          showPercentageSymbol
          showPercentageSymbolAsBackground
        />
        <PercentageCircle
          animate
          animationDuration="1s"
          responsive
          progress={75}
          progressColorIsDynamic
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
        <PercentageCircle
          animate
          animationDuration="1s"
          responsive
          progress={37}
          progressColorIsDynamic
          bgColor="#ecedf0"
          textColor="#6b778c"
          textStyle={{
            font: 'bold 4rem Helvetica, Arial, sans-serif',
            fontSize: '10em',
          }}
          roundedStroke
          showPercentage
        />
      </div>
    </div>
  );
};

export default PercentageCircleDemo;
