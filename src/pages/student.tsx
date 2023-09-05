import Equipment from 'components/Equipment/organisms';
import { MainTemplates } from 'components/common/templates/style';
import CommonHeader from 'components/common/organisms/CommonHeader';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';
import Sidebar from 'components/common/organisms/Sidebar';

const RentalPage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <MainTemplates>
        <CommonHeader />
        <Equipment />
      </MainTemplates>
    </CommonTemplate>
  );
};

export default RentalPage;
