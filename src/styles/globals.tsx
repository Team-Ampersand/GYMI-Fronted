import React from 'react';
import { Global, css } from '@emotion/react';

const lightTheme = `
  --BACKGROUND_BG : #FAFAFA;
  --MODAL_BG : #EEF5FD;
`;

const darkTheme = `
  --BACKGROUND_BG : #171E32;
  --MODAL_BG: #4A4A50;
`;

const cssVar = (name: string) => `var(--${name})`;

export const Palette = {
  PRIMARY_P1: '#1063EE',
  PRIMARY_P2: '#2575FC',
  PRIMARY_P3: '#558FF1',
  NEUTRAL_N1: '#292E3D',
  NEUTRAL_N2: '#656B80',
  NEUTRAL_N3: '#BBBBCC',
  NEUTRAL_N4: '#E2E2EE',
  NEUTRAL_N5: '#F2F2F4',
  NEUTRAL_N6: '#FDFDFD',
  BACKGROUND_BG: cssVar('BACKGROUND_BG'),
  MODAL_BG: cssVar('MODAL_BG'),
  SYSTEM_ERROR: '#FF5D5D',
  SYSTEM_POSITIVE: '#49FF7C',
  SUB_RED: '#B84040',
  SUB_GREEN: '#2FAD52',
  SUB_BLUE: '#EEF5FD',
  BLACK: '#000000',
  WHITE: '#ffffff',
};

const style = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: SUIT;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  button {
    cursor: pointer;
    outline: none;
  }

  body {
    ${lightTheme};
    background: ${Palette.BACKGROUND_BG};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${darkTheme}
    }
  }
  body[data-theme='light'] {
    ${lightTheme};
  }
  body[data-theme='dark'] {
    ${darkTheme};
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
