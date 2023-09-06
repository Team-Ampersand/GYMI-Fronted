import ContentBox from 'components/Management/atoms/ContentBox';
import * as S from './style';

const EquipmentBox = () => {
  return (
    <ContentBox>
      <S.Wrapper>
        <S.EquipmentBanner src="https://weaja.joins.com/data/photo/originals/2021/11/02/1089cf0e-5714-45c2-90dd-a0865654b086.jpg" />
        <S.EquipmentInfo>
          <div>
            <h1>요넥스 배드민턴 라켓4</h1>
            <p>대여날짜: 2023.03.10</p>
          </div>
          <p>대여 학생: 3112손정민</p>
        </S.EquipmentInfo>
      </S.Wrapper>
    </ContentBox>
  );
};

export default EquipmentBox;
