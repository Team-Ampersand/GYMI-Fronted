import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const SignInWrapper = styled.div`
  width: 400px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 150px 48px 56px;
  border-radius: 16px;
  background: ${Palette.BACKGROUND_BG};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
`;
