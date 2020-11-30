import * as styledComponents from "styled-components";

import colors, { Colors } from "./variables/colors";
import { fonts, Fonts } from "./variables/fonts";

interface ThemeInterface {
  colors: Colors; 
  fonts: Fonts;
  rem: (px: number) => string;
}

const {
  ThemeProvider,
  createGlobalStyle,
  default: styled,
  css,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

const theme: ThemeInterface = {
  colors,
  fonts,
  rem: (px) => {
    const baseFontSize = fonts.initialFontSize;
    return `${px / baseFontSize}rem`;
  },
};

export { styled, theme, ThemeProvider, css, createGlobalStyle };
