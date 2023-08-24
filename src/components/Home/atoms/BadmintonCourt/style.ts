import styled from '@emotion/styled';
import CourtImg from 'asset/svg/Court.svg';

interface CourtBoxType {
  top: string;
  bottom: string;
}

export const Layer = styled.div`
  height: 200px;
`;

export const CourtBox = styled(CourtImg)<CourtBoxType>`
  g > path:nth-of-type(1) {
    fill: ${({ bottom }) => bottom};
  }
  g > path:nth-of-type(2) {
    fill: ${({ top }) => top};
  }
`;
