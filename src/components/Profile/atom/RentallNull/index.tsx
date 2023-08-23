import * as S from './style';

const RentalNull = ({ type }: { type: string }) => {
  return (
    <S.Wrapper>
      <p>{type === 'b' ? '예약한 코트가 없어요' : '대여한 기자재가 없어요'}</p>
    </S.Wrapper>
  );
};

export default RentalNull;
