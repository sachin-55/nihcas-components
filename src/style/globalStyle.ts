import { createGlobalStyle } from "styled-components";

import CSSReset from "./CSSReset";
import { scrollCss } from "./reusableStyle";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${CSSReset};
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  body {
    margin: 0;
    padding: 0;
    background: #fcfcfc;
    font-family: "Poppins", Open-Sans, Helvetica, Sans-Serif;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme?.fontSizes.h_normal};
    font-weight: ${({ theme }) => theme?.fontWeights.regular};

    ${scrollCss};
  }
`;

export default GlobalStyle;
