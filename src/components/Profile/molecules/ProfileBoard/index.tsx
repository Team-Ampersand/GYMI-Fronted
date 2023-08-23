import LogoutBtn from 'components/Profile/atom/LogoutBtn';
import * as S from './style';
import ProfileInfo from 'components/Profile/atom/ProfileInfo';

const ProfileBoard = () => {
  const onLogout = () => {
    console.log('out');
  };

  return (
    <S.Wrapper>
      <ProfileInfo />
      <LogoutBtn onClick={onLogout} />
    </S.Wrapper>
  );
};

export default ProfileBoard;
