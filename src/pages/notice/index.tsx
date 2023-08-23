import ButtonList from 'components/Notice/molecules/ButtonList';
import NoticeDetail from 'components/Notice/organisms/NoticeDetail';
import NoticeList from 'components/Notice/organisms/NoticeList';
import NoticeWrite from 'components/Notice/organisms/NoticeWrite';
import { MainWrapper, NoticeTemplate } from 'components/Notice/template/style';
import Sidebar from 'components/common/organisms/Sidebar';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';
import { useRecoilValue } from 'recoil';
import { noticeDetailId, noticeStatus } from 'recoilAtoms';

const NoticePage = () => {
  const status = useRecoilValue(noticeStatus);
  const noticeId = useRecoilValue(noticeDetailId);

  return (
    <CommonTemplate>
      <Sidebar />
      <NoticeTemplate>
        <h1>공지사항</h1>
        <MainWrapper>
          {noticeId !== null ? (
            <NoticeDetail noticeId={noticeId} />
          ) : status === 'write' || status === 'modify' ? (
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
