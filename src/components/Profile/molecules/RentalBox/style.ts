import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Wrapper = styled.div`
  width: 57vw;
  height: calc((89.5dvh - 72px) / 2);
  padding: 32px;
  background: ${Palette.WHITE};
  border-radius: 16px;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.04);
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 10px;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: auto;
`;
