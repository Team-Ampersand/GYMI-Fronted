import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

interface a_type {
  area: string;
}

export const Layer = styled.div`
  grid-area: ${({ area }: a_type) => area};
  width: 100%;
  height: 100%;
  background: ${Palette.WHITE};
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`;

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 0 24px;
`;

export const ReportBtn = styled.button`
  color: ${Palette.SUB_RED};
  background-color: transparent;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -40px;
  font-size: 24px;
  font-weight: 500;
`;
