import { NoticeProfileIcon } from 'asset/svg';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { noticeDeleteList, noticeDetailId, noticeStatus } from 'recoilAtoms';
import EmptyImg from '../../../../asset/svg/EmptyImg.svg';
import * as S from './style';

interface Props {
  id: number;
}

const NoticeItem = ({ id }: Props) => {
  const setNoticeId = useSetRecoilState(noticeDetailId);
  const status = useRecoilValue(noticeStatus);
  const [deleteList, setDeleteList] = useRecoilState(noticeDeleteList);

  const onClick = () => {
    if (status === 'delete') {
      if (deleteList.find((item) => item === id))
        return setDeleteList(deleteList.filter((item) => item !== id));
      setDeleteList([...deleteList, id]);
    } else setNoticeId(id);
  };

  return (
    <S.Layer
      onClick={onClick}
      checked={status === 'delete' && deleteList.find((item) => item === id)}
    >
      <S.LeftSection>
        <S.UserInfo>
          <NoticeProfileIcon />
          <h3>작성자</h3>
        </S.UserInfo>
        <S.ContentBox>
          <h2>제목</h2>
          <p>내용내용내용내용내용내용내용</p>
        </S.ContentBox>
        <S.Date>2023.03.23</S.Date>
      </S.LeftSection>
      <S.ImgBox>
        <EmptyImg />
      </S.ImgBox>
    </S.Layer>
  );
};

export default NoticeItem;
