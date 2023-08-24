import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

interface ButtonStyleProps {
  bgColor: string;
  border?: string;
  color?: string;
}

export const Layer = styled.button`
  width: 100%;
  height: 50px;
  border: ${({ border }: ButtonStyleProps) => border ?? 'none'};
  border-radius: 8px;
  color: ${({ color }) => color ?? Palette.BACKGROUND_BG};
  background-color: ${({ bgColor }: ButtonStyleProps) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.1);
`;
