import * as S from './style';
import img from '../../../../asset/png/ballimg.png';
import Image from 'next/image';

const EquipmentItem = () => {
  return (
    <S.Wrapper>
      <S.Imgbox>
        <Image
          alt="Equipment img"
          src={img}
          sizes="100%"
          layout="fill"
          priority={true}
        />
      </S.Imgbox>
      <S.Title>물텐 농구공1</S.Title>
    </S.Wrapper>
  );
};

export default EquipmentItem;
