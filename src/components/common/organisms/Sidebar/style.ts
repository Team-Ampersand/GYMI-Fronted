import styled from '@emotion/styled';
import Link from 'next/link';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  gap: 50px;
  background: #fff;
  overflow: hidden;
`;

export const LogoBox = styled.div`
  display: flex;
  color: ${Palette.PRIMARY_P2};
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
