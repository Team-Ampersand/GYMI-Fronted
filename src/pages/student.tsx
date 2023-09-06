import { MainTemplates } from 'components/common/templates/style';
import CommonHeader from 'components/common/organisms/CommonHeader';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';
import Sidebar from 'components/common/organisms/Sidebar';
import NavBar from 'components/Management/atoms/NavBar';
import { useRouter } from 'next/router';
import { ManagementOption } from 'asset/data/ManagementOption';

const RentalPage = () => {
  const { query } = useRouter();

  return (
    <CommonTemplate>
      <Sidebar />
      <MainTemplates>
        <CommonHeader />
        <NavBar />
        {
          ManagementOption.find((i) => i.queryValue === query.mode)
            ?.componentValue
        }
      </MainTemplates>
    </CommonTemplate>
  );
};

export default RentalPage;
