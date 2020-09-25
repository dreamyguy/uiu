/**
 * This component is based on https://github.com/zzarcon/react-circle
 * MIT Copyright (c) 2018 Hector Zarco
 *
 * Converted from TypeScript to JavaScript by
 * Wallace Sidhrée (dreamyguy) http://sidhree.com
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3-scale-chromatic';
import { fadeFromGradient } from './../../../utils/colorToColorUtil';

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);
const getOffset = (val = 0) => Math.round(((100 - Math.min(val, 100)) / 100) * diameter);

// Set default gradient
const gradientRdYlGn = d3.interpolateRdYlGn;

const PercentageCircle = props => {
  const {
    animate = true,
    animationDuration = '1s',
    bgColor = 'rgb(236, 237, 240)',
    gradient = gradientRdYlGn,
    lineWidth = '25',
    onAnimationEnd,
    percentageSymbolColor = 'rgba(236, 237, 240, .5)',
    percentageSymbolSpacing = 10,
    percentageSymbolStyle,
    progress = 0,
    progressColor = 'rgb(46, 204, 64)', // green
    progressColorIsDynamic = false,
    responsive,
    roundedStroke,
    showPercentage = false,
    showPercentageSymbol = false,
    showPercentageSymbolAsBackground = false,
    size = '100',
    textColor = '#6b778c',
    textStyle = {
      font: 'bold 4rem Helvetica, Arial, sans-serif',
    },
  } = props;

  const strokeDashoffset = getOffset(progress);
  const transition = animate ? `stroke-dashoffset ${animationDuration} ease-out` : undefined;
  const strokeLinecap = roundedStroke ? 'round' : 'butt';
  const svgSize = responsive ? '100%' : size;

  const renderText = () => {
    if (showPercentage) {
      return (
        <>
          {showPercentageSymbol && showPercentageSymbolAsBackground && (
            <text
              style={percentageSymbolStyle}
              fill={percentageSymbolColor}
              x={radius}
              y={radius}
              textAnchor="middle"
              dominantBaseline="central"
            >
              %
            </text>
          )}
          <text
            style={textStyle}
            fill={textColor}
            x={radius}
            y={radius}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {progress}
            {showPercentageSymbol && !showPercentageSymbolAsBackground && (
              <tspan dx={percentageSymbolSpacing}>%</tspan>
            )}
          </text>
        </>
      );
    }
    return null;
  };

  const setProgressColor = () => {
    if (progressColorIsDynamic && gradient) {
      return fadeFromGradient({
        gradient,
        step: progress / 100,
      });
    }
    return progressColor;
  };

  return (
    <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
      <circle stroke={bgColor} cx="175" cy="175" r="175" strokeWidth={lineWidth} fill="none" />
      <circle
        stroke={setProgressColor()}
        transform="rotate(-90 175 175)"
        cx="175"
        cy="175"
        r="175"
        strokeDasharray="1100"
        strokeWidth={lineWidth}
        strokeDashoffset="1100"
        strokeLinecap={strokeLinecap}
        fill="none"
        style={{ strokeDashoffset, transition }}
        onTransitionEnd={onAnimationEnd}
      />
      {renderText()}
    </svg>
  );
};

PercentageCircle.propTypes = {
  animate: PropTypes.bool,
  animationDuration: PropTypes.string,
  bgColor: PropTypes.string,
  lineWidth: PropTypes.string,
  percentageSymbolColor: PropTypes.string,
  percentageSymbolSpacing: PropTypes.number,
  percentageSymbolStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  progress: PropTypes.number.isRequired,
  progressColor: PropTypes.string,
  responsive: PropTypes.bool,
  roundedStroke: PropTypes.bool,
  showPercentage: PropTypes.bool,
  showPercentageSymbol: PropTypes.bool,
  showPercentageSymbolAsBackground: PropTypes.bool,
  size: PropTypes.string,
  textColor: PropTypes.string,
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default PercentageCircle;
