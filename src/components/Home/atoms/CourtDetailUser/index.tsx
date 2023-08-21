import HomeProfile from 'asset/svg/HomeProfile.svg';
import * as S from './style';

interface Props {
  name: string;
  num: number;
}

const CourtDetailUser = ({ name, num }: Props) => {
  return (
    <S.Layer>
      {name && num ? (
        <>
          <HomeProfile />
          <S.Name>{name}</S.Name>
          <S.StudentNum>{num}</S.StudentNum>
        </>
      ) : (
        <h3>예약하기</h3>
      )}
    </S.Layer>
  );
};

export default CourtDetailUser;
