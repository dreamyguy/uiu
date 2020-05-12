/**
 * This component is based on https://github.com/zzarcon/react-circle
 * MIT Copyright (c) 2018 Hector Zarco
 *
 * Converted from TypeScript to JavaScript by
 * Wallace Sidhrée (dreamyguy) http://sidhree.com
 */

import React from 'react';
import PropTypes from 'prop-types';

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);
const getOffset = (val = 0) => Math.round(((100 - Math.min(val, 100)) / 100) * diameter);

const PercentageCircle = props => {
  const {
    animate = true,
    animationDuration = '1s',
    bgColor = '#ecedf0',
    lineWidth = '25',
    onAnimationEnd,
    percentSpacing = 10,
    progress = 0,
    progressColor = 'rgb(76, 154, 255)',
    responsive,
    roundedStroke,
    showPercentage = true,
    showPercentageSymbol = true,
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
        <text
          style={textStyle}
          fill={textColor}
          x={radius}
          y={radius}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {progress}
          {showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>}
        </text>
      );
    }
    return null;
  };

  return (
    <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
      <circle stroke={bgColor} cx="175" cy="175" r="175" strokeWidth={lineWidth} fill="none" />
      <circle
        stroke={progressColor}
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
  progress: PropTypes.number.isRequired,
  animate: PropTypes.bool,
  animationDuration: PropTypes.string,
  showPercentage: PropTypes.bool,
  showPercentageSymbol: PropTypes.bool,
  progressColor: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.string,
  lineWidth: PropTypes.string,
  percentSpacing: PropTypes.number,
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  roundedStroke: PropTypes.bool,
  responsive: PropTypes.bool,
};

export default PercentageCircle;
