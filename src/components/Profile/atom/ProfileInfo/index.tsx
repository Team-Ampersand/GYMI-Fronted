import * as S from './style';

const ProfileInfo = () => {
  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <S.Img />
        <p>프로필 수정</p>
      </S.ImgWrapper>
      <S.StuInfo>
        <p>손정민</p>
        <p>3학년 1반 12번</p>
      </S.StuInfo>
    </S.Wrapper>
  );
};

export default ProfileInfo;
