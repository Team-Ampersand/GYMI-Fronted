import styled from '@emotion/styled';
import CourtImg from 'asset/svg/BasketBallCourt.svg';

interface CourtBoxType {
  top: string;
  bottom: string;
}

export const Layer = styled.div`
  height: 418px;
`;

export const CourtBox = styled(CourtImg)<CourtBoxType>`
  path:nth-of-type(1) {
    fill: ${({ left }) => left};
  }
  path:nth-of-type(3) {
    fill: ${({ right }) => right};
  }
`;
