import {verticalScale, horizontalScale} from './scaling';
import {DefaultTheme} from 'styled-components';

//Make sure whenever you update your theme
//Update also the typing in src/types/styled.d.ts

export const projectNameTheme: DefaultTheme = {
  spacingValues: {
    vXxs: verticalScale(2),
    vXs: verticalScale(4),
    vSm: verticalScale(8),
    vMd: verticalScale(12),
    vLg: verticalScale(16),
    vXl: verticalScale(24),
    v2xl: verticalScale(32),
    v3xl: verticalScale(64),
    hXxs: horizontalScale(2),
    hXs: horizontalScale(4),
    hSm: horizontalScale(8),
    hMd: horizontalScale(12),
    hLg: horizontalScale(16),
    hXl: horizontalScale(24),
    h2xl: horizontalScale(32),
    h3xl: horizontalScale(64),
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
      fontSize: verticalScale(22),
      lineHeight: verticalScale(28),
    },
    BodyXl: {
      fontWeight: 400,
      fontSize: verticalScale(22),
      lineHeight: verticalScale(31),
    },
    BodyLg: {
      fontWeight: 400,
      fontSize: verticalScale(16),
      lineHeight: verticalScale(24),
    },
    BodyLgBold: {
      fontWeight: 700,
      fontSize: verticalScale(16),
      lineHeight: verticalScale(24),
    },
    BodyMd: {
      fontWeight: 400,
      fontSize: verticalScale(16),
      lineHeight: verticalScale(22),
    },
    BodyMdBold: {
      fontWeight: 700,
      fontSize: verticalScale(16),
      lineHeight: verticalScale(22),
    },
    BodySm: {
      fontWeight: 400,
      fontSize: verticalScale(14),
      lineHeight: verticalScale(25),
    },
    BodySmBold: {
      fontWeight: 700,
      fontSize: verticalScale(14),
      lineHeight: verticalScale(25),
    },
    BodyXs: {
      fontWeight: 400,
      fontSize: verticalScale(12),
      lineHeight: verticalScale(18),
    },
    BodyXsBold: {
      fontWeight: 700,
      fontSize: verticalScale(12),
      lineHeight: verticalScale(18),
    },
    BodyXxsBold: {
      fontWeight: 700,
      fontSize: verticalScale(10),
      lineHeight: verticalScale(15),
    },
    BodyXxs: {
      fontWeight: 400,
      fontSize: verticalScale(10),
      lineHeight: verticalScale(15),
    },
    BodyXxxs: {
      fontWeight: 400,
      fontSize: verticalScale(8),
      lineHeight: verticalScale(12),
    },
    BodyXxxsBold: {
      fontWeight: 700,
      fontSize: verticalScale(8),
      lineHeight: verticalScale(12),
    },
    HeadingXl: {
      fontWeight: 700,
      fontSize: verticalScale(18),
      lineHeight: verticalScale(23),
    },
    HeadingLg: {
      fontWeight: 700,
      fontSize: verticalScale(16),
    },
    HeadingMd: {
      fontWeight: 700,
      fontSize: verticalScale(30),
      lineHeight: verticalScale(39),
    },
    HeadingSm: {
      fontWeight: 700,
      fontSize: verticalScale(22),
      lineHeight: verticalScale(29),
    },
    HeadingXs: {
      fontWeight: 700,
      fontSize: verticalScale(18),
    },
    ButtonLabelSm: {
      fontWeight: 700,
      fontSize: verticalScale(12),
      lineHeight: verticalScale(18),
    },
    ButtonLabelMd: {
      fontWeight: 700,
      fontSize: verticalScale(14),
      lineHeight: verticalScale(19),
    },
    default: {
      fontWeight: 400,
      fontSize: verticalScale(14),
      lineHeight: verticalScale(25),
    },
  },
};

export default projectNameTheme;
