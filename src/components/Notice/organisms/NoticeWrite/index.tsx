import { NoticeProfileIcon } from 'asset/svg';
import * as S from './style';

const NoticeWrite = () => {
  return (
    <S.Layer>
      <S.TopWrapper>
        <S.UserInfo>
          <NoticeProfileIcon width="30" height="30" viewBox="0 0 25 25" />
          <p>작성자: 작성자</p>
        </S.UserInfo>
        <small>2023.03.20</small>
      </S.TopWrapper>
      <S.Title placeholder="제목 (1~60자)" />
      <S.Content placeholder="내용 (1~5000자)" />
    </S.Layer>
  );
};

export default NoticeWrite;
