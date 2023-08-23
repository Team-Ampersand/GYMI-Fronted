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

export const Title = styled.input`
  width: 100%;
  transition: all 0.2s;
  background-color: ${Palette.NEUTRAL_N5};
  font-size: 20px;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid ${Palette.BACKGROUND_BG};

  :focus {
    border: 2px solid ${Palette.PRIMARY_P3};
  }
`;

export const Content = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  background-color: ${Palette.NEUTRAL_N5};
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  border: 2px solid ${Palette.BACKGROUND_BG};
  transition: all 0.2s;

  :focus {
    border: 2px solid ${Palette.PRIMARY_P3};
  }

  :focus::placeholder {
    opacity: 0;
  }
`;
