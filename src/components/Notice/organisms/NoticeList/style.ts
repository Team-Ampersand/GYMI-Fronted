import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const FilterEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 78%;
  height: 100%;
  visibility: hidden;

  ::before,
  ::after {
    content: '';
    visibility: visible;
    position: absolute;
    display: block;
    width: 100%;
    height: 3%;
    background: linear-gradient(
      ${Palette.NEUTRAL_N6} 0%,
      #ffffff40 33%,
      #ffffff20 66%,
      #ffffff00 100%
    );
    top: 0;
    left: 0;
  }
  ::after {
    top: 97%;
    background: linear-gradient(
      0deg,
      ${Palette.NEUTRAL_N6} 0%,
      #ffffff40 33%,
      #ffffff20 66%,
      #ffffff00 100%
    );
  }
`;
