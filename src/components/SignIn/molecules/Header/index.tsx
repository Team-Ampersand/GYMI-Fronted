import * as S from './style';
import GYMILOGO from 'asset/svg/GYMILogo.svg';

const SigninHeader = () => {
  return (
    <S.HeaderWrapper>
      <GYMILOGO />
      <S.Description>
        GYMI는 교내 체육관 서비스입니다
        <br /> 예약을 통해 체육관을 이용해 보세요!
      </S.Description>
    </S.HeaderWrapper>
  );
};

export default SigninHeader;
