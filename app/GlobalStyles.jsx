"use client"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Lobster';
    src: url('/fonts/Lobster-Regular.ttf');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-optimized-font.woff2');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-optimized-font.woff2');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-optimized-font.woff2');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Eudoxus Sans';
    src: url('/fonts/EudoxusSans-Regular.woff2');
    font-weight: 400;
  }
  html {
    --lobster-font: 'Lobster', cursive;
    --inter-font: 'Inter', sans-serif;
    --eudoxus-font: 'Eudoxus Sans', sans-serif;
    font-family: var(--inter-font);
  }

`

export default GlobalStyles