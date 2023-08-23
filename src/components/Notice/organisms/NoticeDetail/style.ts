import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: ${Palette.WHITE};
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3`
  width: 100%;
  transition: all 0.2s;
  font-size: 20px;
  padding: 12px 0;
  border-radius: 8px;
`;

export const Content = styled.div`
  resize: none;
  width: 100%;
  height: 100%;
  padding: 12px 0;
  border-radius: 8px;
  font-size: 16px;
`;
