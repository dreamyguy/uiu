// convert 'rgb' value to a value CSS can parse
export const rgbToInt = value => Math.ceil(value * 255);

// convert parseable 'rgb' value to an equivalent 'hexadecimal' value
const intToHex = int => {
  let hex = Number(int).toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
};

// convert 'rgb' value to 'hex' value
export const rgbToHex = (r, g, b) => {
  const red = intToHex(r);
  const green = intToHex(g);
  const blue = intToHex(b);
  return `#${red}${green}${blue}`;
};

// convert 'hex' value to 'rgb' value
export const hexToRgb = hex => {
  const rgbArray = hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));
  return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
};

// linear interpolation between two values a and b
// u controls amount of a/b and is in range [0.0, 1.0]
export const lerp = (a, b, u) => (1 - u) * a + u * b;

export const isRgb = rgb => {
  // Only do any of this if 'rgb' is a string
  if (typeof rgb === 'string') {
    const regex = /rgb\((\s*\d+\s*,)(\s*\d+\s*,)(\s*\d+\s*)\)$/i;
    return !!(rgb && regex.test(rgb));
  }
  return false;
};

export const rgbToObj = rgb => {
  if (rgb && isRgb(rgb)) {
    const rgbSplit = rgb.split(',');
    const r = rgbSplit[0].replace('rgb(', '').replace(' ', '');
    const g = rgbSplit[1].replace(' ', '');
    const b = rgbSplit[2].replace(')', '').replace(' ', '');
    return { r: parseInt(r, 10), g: parseInt(g, 10), b: parseInt(b, 10) };
  }
  console.log(`[rgbToObj]: The value passed as 'rgb' (${rgb}) did not pass validation`);
  return null;
};

// Generate RGB color based on enteredRgb value (between )
export const fadeFromColorToColor = ({
  colorStart = { r: 255, g: 0, b: 0 }, // redRgb
  colorEnd = { r: 0, g: 128, b: 128 }, // dark turquoise
  step = 0,
}) => {
  const stepUnit = 1.0 / (step * 0.1);
  const r = parseInt(lerp(colorStart.r, colorEnd.r, stepUnit), 10);
  const g = parseInt(lerp(colorStart.g, colorEnd.g, stepUnit), 10);
  const b = parseInt(lerp(colorStart.b, colorEnd.b, stepUnit), 10);
  return `rgb(${r}, ${g}, ${b})`;
};

export const fadeFromGradient = ({ gradient, step }) => gradient(step);
