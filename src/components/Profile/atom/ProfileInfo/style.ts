import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${Palette.NEUTRAL_N4};
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p {
    font-size: 10px;
    font-weight: 400;
    color: ${Palette.NEUTRAL_N3};
    cursor: pointer;
  }
`;
export const Img = styled.div`
  width: 136px;
  height: 136px;
  border-radius: 50px;
  background: ${Palette.NEUTRAL_N4};
`;

export const StuInfo = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p:last-child {
    font-size: 14px;
    font-weight: 200;
  }
`;
