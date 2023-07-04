import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const Description = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${Palette.NEUTRAL_N1};
`;
