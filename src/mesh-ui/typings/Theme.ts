export interface Colors {
  // basic colors
  black: string;
  white: string;
  // defined by design system
  pinkBase: string;
  pinkT1: string;
  pinkT2: string;
  greyBase: string;
  greyT1: string;
  greyT2: string;
  greyT3Divider: string;
  greyT4BG: string;
  greyT5Subdued: string;
  redBase: string;
  redT1: string;
  greenBase: string;
  lightGreenBase: string;
  lightGreenT1: string;
  limeBase: string;
  limeT1: string;
  greenT1: string;
  greenT2: string;
  yellowBase: string;
  yellowT1: string;
  orangeBase: string;
  orangeT1: string;
  blueBase: string;
  blueT1: string;
  blueT2: string;
  greenS1: string;
  purpleT1: string;
}

export interface FontFamliy {
  primary: string;
  secondary: string;
}

export interface FontWeights {
  book: number;
  demi: number;
  bold: number;
}

export interface OverrideFontWeights{
  overrideFontFamilyValue?: string
}

export interface BoxShadow {
  topNavbar: string;
  bottomNavbar: string;
  snackBarFAB: string;
  card: string;
}

export interface BorderRadius {
  button: string;
  card: string;
  pill: string;
}

export interface Theme {
  colors: Colors;
  fontFamily: FontFamliy;
  fontWeights: FontWeights;
  boxShadow: BoxShadow;
  borderRadius: BorderRadius;
  isMobile: boolean;
  mierFontsBold?: string;
  mierFontsDemi?: string
}
