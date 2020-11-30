import { css } from "~/theme";

const base = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }): string | number => theme.fonts.initialFontSize}px;
  }

  body {    
    font-family: ${({ theme }): string => theme.fonts.font};
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export { base };
