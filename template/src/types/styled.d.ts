import 'styled-components';

declare module 'styled-components' {
  interface ITextType {
    'font-weight': string | number;
    'font-size': string | number;
    'line-height'?: string | number;
    'letter-spacing'?: string | number;
  }

  export interface DefaultTheme {
    spacingValues: {
      vXxs: string | number;
      vXs: string | number;
      vSm: string | number;
      vMd: string | number;
      vLg: string | number;
      vXl: string | number;
      v2xl: string | number;
      v3xl: string | number;
      hXxs: string | number;
      hXs: string | number;
      hSm: string | number;
      hMd: string | number;
      hLg: string | number;
      hXl: string | number;
      h2xl: string | number;
      h3xl: string | number;
    };
    colors: {
      //here you add your design-system colors
      orange50: string;
      orange100: string;
      orange200: string;
      orange300: string;
      orange400: string;
      orange500: string;
      orange600: string;
      orange700: string;
      orange800: string;
      orange900: string;
    };
    textType: {
      //here you add your design-system text types
      BodyXlBold: CSSObject;
      BodyXl: CSSObject;
      BodyLg: CSSObject;
      BodyLgBold: CSSObject;
      BodyMd: CSSObject;
      BodyMdBold: CSSObject;
      BodySmBold: CSSObject;
      BodySm: CSSObject;
      BodyXsBold: CSSObject;
      BodyXs: CSSObject;
      BodyXxsBold: CSSObject;
      BodyXxs: CSSObject;
      BodyXxxs: CSSObject;
      BodyXxxsBold: CSSObject;
      HeadingXl: CSSObject;
      HeadingLg: CSSObject;
      HeadingMd: CSSObject;
      HeadingSm: CSSObject;
      HeadingXs: CSSObject;
      ButtonLabelSm: CSSObject;
      ButtonLabelMd: CSSObject;
      default: CSSObject;
    };
  }
}
