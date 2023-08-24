import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  grid-area: status;
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  border-radius: 16px;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.04);
  background-color: ${Palette.WHITE};
`;

export const Title = styled.h2`
  color: ${Palette.NEUTRAL_N1};
`;
