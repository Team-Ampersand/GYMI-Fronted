import ContentBox from 'components/Management/atoms/ContentBox';
import * as S from './style';

const ReportBox = () => {
  return (
    <ContentBox>
      <S.Wrapper>
        <S.ReportInfo>
          <h1>제재 학생: ㅁㅁㅁㅁ</h1>
          <p>신고 사유: 불화</p>
        </S.ReportInfo>
        <span>
          <p>제재날짜: 2023.03.03 ~ 2023.03.10</p>
          <a>제재 취소</a>
        </span>
      </S.Wrapper>
    </ContentBox>
  );
};

export default ReportBox;
