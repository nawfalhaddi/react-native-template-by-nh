import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
//Guideline sizes are based on standard around 5 inches screen mobile device
export const guidelineBaseWidth = 326;

export const guidelineBaseHeight = 680;

// Will return a linear scaled result of the provided size, based on your device's screen width.
export const horizontalScale = (size: number): string =>
  ((width / guidelineBaseWidth) * size).toFixed(2).toString() + 'px';

// Will return a linear scaled result of the provided size, based on your device's screen height.
export const verticalScale = (size: number): string =>
  ((height / guidelineBaseHeight) * size).toFixed(2).toString() + 'px';
