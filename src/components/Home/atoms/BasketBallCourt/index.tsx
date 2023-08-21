import * as S from './style';

interface Props {
  left: string;
  right: string;
}

const BasketBallCourt = ({ left, right }: Props) => {
  return (
    <S.Layer>
      <S.CourtBox left={left} right={right} />
    </S.Layer>
  );
};

export default BasketBallCourt;
