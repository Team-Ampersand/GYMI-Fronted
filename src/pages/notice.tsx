import ButtonList from 'components/Notice/organisms/ButtonList';
import NoticeList from 'components/Notice/organisms/NoticeList';
import NoticeWrite from 'components/Notice/organisms/NoticeWrite';
import { MainWrapper, NoticeTemplate } from 'components/Notice/template/style';
import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';
import { useRecoilValue } from 'recoil';
import { noticeStatus } from 'recoilAtoms';

const NoticePage = () => {
  const status = useRecoilValue(noticeStatus);

  return (
    <CommonTemplate>
      <Sidebar />
      <NoticeTemplate>
        <h1>공지사항</h1>
        <MainWrapper>
          {status === 'write' || status === 'modify' ? (
            <NoticeWrite />
          ) : (
            <NoticeList />
          )}
          <ButtonList />
        </MainWrapper>
      </NoticeTemplate>
    </CommonTemplate>
  );
};
export default NoticePage;
