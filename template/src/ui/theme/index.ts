import {verticalScale, horizontalScale} from './scaling';
import {DefaultTheme} from 'styled-components';

//Make sure whenever you update your theme
//Update also the typing in src/types/styled.d.ts

export const projectNameTheme: DefaultTheme = {
  spacingValues: {
    vXxs: verticalScale(2) + 'px',
    vXs: verticalScale(4) + 'px',
    vSm: verticalScale(8) + 'px',
    vMd: verticalScale(12) + 'px',
    vLg: verticalScale(16) + 'px',
    vXl: verticalScale(24) + 'px',
    v2xl: verticalScale(32) + 'px',
    v3xl: verticalScale(64) + 'px',
    hXxs: horizontalScale(2) + 'px',
    hXs: horizontalScale(4) + 'px',
    hSm: horizontalScale(8) + 'px',
    hMd: horizontalScale(12) + 'px',
    hLg: horizontalScale(16) + 'px',
    hXl: horizontalScale(24) + 'px',
    h2xl: horizontalScale(32) + 'px',
    h3xl: horizontalScale(64) + 'px',
  },
  colors: {
    //here you add your design-system colors
    orange50: '#ffeee6',
    orange100: '#fed7c5',
    orange200: '#fdc0a3',
    orange300: '#fda982',
    orange400: '#fc8650',
    orange500: '#fb641e',
    orange600: '#e24a04',
    orange700: '#b03a03',
    orange800: '#7e2902',
    orange900: '#4c1901',
  },

  textType: {
    //here you add your design-system text types
    BodyXlBold: {
      fontWeight: 700,
      fontSize: verticalScale(22) + 'px',
      lineHeight: verticalScale(28) + 'px',
    },
    BodyXl: {
      fontWeight: 400,
      fontSize: verticalScale(22) + 'px',
      lineHeight: verticalScale(31) + 'px',
    },
    BodyLg: {
      fontWeight: 400,
      fontSize: verticalScale(16) + 'px',
      lineHeight: verticalScale(24) + 'px',
    },
    BodyLgBold: {
      fontWeight: 700,
      fontSize: verticalScale(16) + 'px',
      lineHeight: verticalScale(24) + 'px',
    },
    BodyMd: {
      fontWeight: 400,
      fontSize: verticalScale(16) + 'px',
      lineHeight: verticalScale(22) + 'px',
    },
    BodyMdBold: {
      fontWeight: 700,
      fontSize: verticalScale(16) + 'px',
      lineHeight: verticalScale(22) + 'px',
    },
    BodySm: {
      fontWeight: 400,
      fontSize: verticalScale(14) + 'px',
      lineHeight: verticalScale(25) + 'px',
    },
    BodySmBold: {
      fontWeight: 700,
      fontSize: verticalScale(14) + 'px',
      lineHeight: verticalScale(25) + 'px',
    },
    BodyXs: {
      fontWeight: 400,
      fontSize: verticalScale(12) + 'px',
      lineHeight: verticalScale(18) + 'px',
    },
    BodyXsBold: {
      fontWeight: 700,
      fontSize: verticalScale(12) + 'px',
      lineHeight: verticalScale(18) + 'px',
    },
    BodyXxsBold: {
      fontWeight: 700,
      fontSize: verticalScale(10) + 'px',
      lineHeight: verticalScale(15) + 'px',
    },
    BodyXxs: {
      fontWeight: 400,
      fontSize: verticalScale(10) + 'px',
      lineHeight: verticalScale(15) + 'px',
    },
    BodyXxxs: {
      fontWeight: 400,
      fontSize: verticalScale(8) + 'px',
      lineHeight: verticalScale(12) + 'px',
    },
    BodyXxxsBold: {
      fontWeight: 700,
      fontSize: verticalScale(8) + 'px',
      lineHeight: verticalScale(12) + 'px',
    },
    HeadingXl: {
      fontWeight: 700,
      fontSize: verticalScale(18) + 'px',
      lineHeight: verticalScale(23) + 'px',
    },
    HeadingLg: {
      fontWeight: 700,
      fontSize: verticalScale(16) + 'px',
    },
    HeadingMd: {
      fontWeight: 700,
      fontSize: verticalScale(30) + 'px',
      lineHeight: verticalScale(39) + 'px',
    },
    HeadingSm: {
      fontWeight: 700,
      fontSize: verticalScale(22) + 'px',
      lineHeight: verticalScale(29) + 'px',
    },
    HeadingXs: {
      fontWeight: 700,
      fontSize: verticalScale(18) + 'px',
    },
    ButtonLabelSm: {
      fontWeight: 700,
      fontSize: verticalScale(12) + 'px',
      lineHeight: verticalScale(18) + 'px',
    },
    ButtonLabelMd: {
      fontWeight: 700,
      fontSize: verticalScale(14) + 'px',
      lineHeight: verticalScale(19) + 'px',
    },
    default: {
      fontWeight: 400,
      fontSize: verticalScale(14) + 'px',
      lineHeight: verticalScale(25) + 'px',
    },
  },
};

export default projectNameTheme;
