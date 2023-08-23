import { NoticeProfileIcon } from 'asset/svg';
import * as S from './style';

interface Props {
  noticeId: number | null;
}

const NoticeDetail = ({ noticeId }: Props) => {
  return (
    <S.Layer>
      <S.TopWrapper>
        <S.UserInfo>
          <NoticeProfileIcon width="30" height="30" viewBox="0 0 25 25" />
          <p>작성자: 작성자</p>
        </S.UserInfo>
        <small>2023.03.20</small>
      </S.TopWrapper>
      <S.Title>제목</S.Title>
      <S.Content>내용내용내용내용내용내용</S.Content>
    </S.Layer>
  );
};

export default NoticeDetail;
