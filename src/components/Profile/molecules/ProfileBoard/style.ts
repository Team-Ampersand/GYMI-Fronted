import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Wrapper = styled.div`
  width: 20.4dvw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 37px;
  background: ${Palette.WHITE};
  border-radius: 16px;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.04);
  grid-area: a;
`;
