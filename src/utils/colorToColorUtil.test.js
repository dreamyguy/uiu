import { fadeFromColorToColor, isRgb, rgbToObj } from './colorToColorUtil';

const redRgb = 'rgb(255,65,54)';
const greenRgb = 'rgb(46,204,64)';
const redRgbWithSpaces = 'rgb( 255, 65, 54 )';
const greenRgbWithSpaces = 'rgb( 46, 204, 64 )';

// -- For debugging with Quokka
// console.log(
//   fadeFromColorToColor({
//     colorStart: rgbToObj(greenRgb),
//     colorEnd: rgbToObj(redRgb),
//     step: 99,
//   }),
// );

describe('colorToColor', () => {
  describe('isRgb', () => {
    describe('should return true if value passed is a RGB color', () => {
      it('rgb red', () => {
        const testValue = redRgb;
        expect(isRgb(testValue)).toEqual(true);
      });
      it('rgb green', () => {
        const testValue = greenRgb;
        expect(isRgb(testValue)).toEqual(true);
      });
      it('rgb red, with spaces', () => {
        const testValue = redRgbWithSpaces;
        expect(isRgb(testValue)).toEqual(true);
      });
      it('rgb green, with spaces', () => {
        const testValue = greenRgbWithSpaces;
        expect(isRgb(testValue)).toEqual(true);
      });
    });
    describe('should return false if value passed is not a RGB color', () => {
      it('do not validate rgba', () => {
        const testValue = 'rgba(255,65,54, .8)';
        expect(isRgb(testValue)).toEqual(false);
      });
      it('do not validate hex colors', () => {
        const testValue = '#bada55';
        expect(isRgb(testValue)).toEqual(false);
      });
      it('do not validate rgb with typos 1', () => {
        const testValue = 'rgb(255,65,54,)';
        expect(isRgb(testValue)).toEqual(false);
      });
      it('do not validate rgb with typos 2', () => {
        const testValue = 'rgb(255, wtf, 54)';
        expect(isRgb(testValue)).toEqual(false);
      });
    });
  });
  describe('rgbToObj', () => {
    describe('should return custom object if value passed is a RGB color', () => {
      it('rgb red', () => {
        const testValue = redRgb;
        const testOutput = { r: 255, g: 65, b: 54 };
        expect(rgbToObj(testValue)).toEqual(testOutput);
      });
      it('rgb green', () => {
        const testValue = greenRgb;
        const testOutput = { r: 46, g: 204, b: 64 };
        expect(rgbToObj(testValue)).toEqual(testOutput);
      });
      it('rgb red, with spaces', () => {
        const testValue = redRgbWithSpaces;
        const testOutput = { r: 255, g: 65, b: 54 };
        expect(rgbToObj(testValue)).toEqual(testOutput);
      });
      it('rgb green, with spaces', () => {
        const testValue = greenRgbWithSpaces;
        const testOutput = { r: 46, g: 204, b: 64 };
        expect(rgbToObj(testValue)).toEqual(testOutput);
      });
    });
    describe('should return null if value passed is not a RGB color', () => {
      it('do not validate rgba', () => {
        const testValue = 'rgba(255,65,54, .8)';
        expect(rgbToObj(testValue)).toEqual(null);
      });
      it('do not validate hex colors', () => {
        const testValue = '#bada55';
        expect(rgbToObj(testValue)).toEqual(null);
      });
      it('do not validate rgb with typos 1', () => {
        const testValue = 'rgb(255,65,54,)';
        expect(rgbToObj(testValue)).toEqual(null);
      });
      it('do not validate rgb with typos 2', () => {
        const testValue = 'rgb(255, wtf, 54)';
        expect(rgbToObj(testValue)).toEqual(null);
      });
    });
  });
  describe('rgbToObj', () => {
    describe('should return a specific RGB color when passed a number from 1 to 100', () => {
      it('1', () => {
        const testValue = 1;
        const testOutput = 'rgb(255, 65, 54)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('2', () => {
        const testValue = 2;
        const testOutput = 'rgb(150, 134, 59)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('11', () => {
        const testValue = 11;
        const testOutput = 'rgb(65, 191, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('12', () => {
        const testValue = 12;
        const testOutput = 'rgb(63, 192, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('21', () => {
        const testValue = 21;
        const testOutput = 'rgb(55, 197, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('33', () => {
        const testValue = 33;
        const testOutput = 'rgb(52, 199, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('44', () => {
        const testValue = 44;
        const testOutput = 'rgb(50, 200, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('55', () => {
        const testValue = 55;
        const testOutput = 'rgb(49, 201, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('66', () => {
        const testValue = 66;
        const testOutput = 'rgb(49, 201, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('77', () => {
        const testValue = 77;
        const testOutput = 'rgb(48, 202, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('88', () => {
        const testValue = 88;
        const testOutput = 'rgb(48, 202, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('99', () => {
        const testValue = 99;
        const testOutput = 'rgb(48, 202, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
      it('100', () => {
        const testValue = 100;
        const testOutput = 'rgb(48, 202, 63)';
        expect(
          fadeFromColorToColor({
            colorStart: rgbToObj(greenRgb),
            colorEnd: rgbToObj(redRgb),
            step: testValue,
          }),
        ).toEqual(testOutput);
      });
    });
  });
});
