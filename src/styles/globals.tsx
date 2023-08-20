import React from 'react';
import { Global, css } from '@emotion/react';

const lightTheme = `
  --NEUTRAL_N1 : #292E3D;
  --NEUTRAL_N2 : #656B80;
  --NEUTRAL_N3 : #BBBBCC;
  --NEUTRAL_N4 : #E2E2EE;
  --NEUTRAL_N5 : #F2F2F4;
  --NEUTRAL_N6: #FDFDFD;
  --BACKGROUND_BG : #FAFAFA;
  --MODAL_BG : #EEF5FD;
`;

const darkTheme = `
  --NEUTRAL_N1 : #F4F4F4;
  --NEUTRAL_N2 : #818198;
  --NEUTRAL_N3 : #626274;
  --NEUTRAL_N4 : #292930;
  --NEUTRAL_N5 : #1E1E26;
  --NEUTRAL_N6 : #010101;
  --BACKGROUND_BG : #171E32;
  --MODAL_BG: #4A4A50;
`;

const cssVar = (name: string) => `var(--${name})`;

export const Palette = {
  PRIMARY_P1: '#1063EE',
  PRIMARY_P2: '#2575FC',
  PRIMARY_P3: '#558FF1',
  NEUTRAL_N1: cssVar('NEUTRAL_N1'),
  NEUTRAL_N2: cssVar('NEUTRAL_N2'),
  NEUTRAL_N3: cssVar('NEUTRAL_N3'),
  NEUTRAL_N4: cssVar('NEUTRAL_N4'),
  NEUTRAL_N5: cssVar('NEUTRAL_N5'),
  NEUTRAL_N6: cssVar('NEUTRAL_N6'),
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
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: SCDream;
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
