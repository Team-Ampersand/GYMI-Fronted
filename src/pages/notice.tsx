import ButtonList from 'components/Notice/organisms/ButtonList';
import NoticeList from 'components/Notice/organisms/NoticeList';
import { MainWrapper, NoticeTemplate } from 'components/Notice/template/style';
import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';

const NoticePage = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <NoticeTemplate>
        <h1>공지사항</h1>
        <MainWrapper>
          <NoticeList />
          <ButtonList />
        </MainWrapper>
      </NoticeTemplate>
    </CommonTemplate>
  );
};
export default NoticePage;
