import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

interface LayerStyleProps {
  checked: boolean;
}

export const Layer = styled.div`
  width: 100%;
  min-height: max-content;
  border-radius: 16px;
  background: ${Palette.BACKGROUND_BG};
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  border: ${({ checked }: LayerStyleProps) =>
    `2px solid ${checked ? Palette.PRIMARY_P2 : 'transparent'}`};
`;

export const LeftSection = styled.div`
  max-height: max-content;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Date = styled.p``;

export const ImgBox = styled.div`
  width: 250px;
  background-color: ${Palette.NEUTRAL_N2};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 16px 16px 0;
`;
