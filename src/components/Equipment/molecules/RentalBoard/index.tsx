import Image from 'next/image';
import img from '../../../../asset/png/ballimg.png';
import * as S from './style';

const RentalBoard = () => {
  return (
    <>
      <S.Wrapper>
        <S.TopWrapper>
          <S.Title>기자재</S.Title>
          <S.SelectItem>대여할 기자재를 선택해 주세요.</S.SelectItem>
          {true && (
            <>
              <S.ItemImg>
                <Image
                  alt="Equipment img"
                  src={img}
                  sizes="100%"
                  layout="fill"
                  priority={true}
                />
              </S.ItemImg>
              <S.ItemDetail>
                학교 물품임으로 조심히 사용해주세요. 고장이나거나 분실이 된다면
                선생님께 말해주세요. 반납하지않으면 기자재대여가 금지될 수
                있습니다.
              </S.ItemDetail>
            </>
          )}
        </S.TopWrapper>
        <S.RentalBtn>대여하기</S.RentalBtn>
      </S.Wrapper>
    </>
  );
};

export default RentalBoard;
