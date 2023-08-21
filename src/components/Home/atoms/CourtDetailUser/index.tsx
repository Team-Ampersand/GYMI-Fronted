import HomeProfile from 'asset/svg/HomeProfile.svg';
import * as S from './style';

const CourtDetailUser = () => {
  return (
    <S.Layer>
      {true ? (
        <>
          <HomeProfile />
          <S.Name>손정민</S.Name>
          <S.StudentNum>3112</S.StudentNum>
        </>
      ) : (
        <></>
      )}
    </S.Layer>
  );
};

export default CourtDetailUser;
