import styled from '@emotion/styled';
import Equipment from 'components/Equipment/organisms';
import { MainTemplates } from 'components/common/templates/style';
import CommonHeader from 'components/common/organisms/CommonHeader';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';

const EquipmentPage = () => {
  return (
    <CommonTemplate>
      <SS />
      <MainTemplates>
        <CommonHeader />
        <Equipment />
      </MainTemplates>
    </CommonTemplate>
  );
};

const SS = styled.div`
  width: 250px;
  height: 100vh;
  border: 1px solid #000;
`;

export default EquipmentPage;
