import Profile from 'components/Profile/organisms';
import CommonHeader from 'components/common/organisms/CommonHeader';
import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';
import { MainTemplates } from 'components/common/templates/style';

const ProfilePage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <MainTemplates>
        <CommonHeader />
        <Profile />
      </MainTemplates>
    </CommonTemplate>
  );
};

export default ProfilePage;
