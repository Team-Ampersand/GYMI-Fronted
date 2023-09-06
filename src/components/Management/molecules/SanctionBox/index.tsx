import ContentBox from 'components/Management/atoms/ContentBox';
import * as S from './style';
import * as SVG from '../../../../../src/asset/svg';

const SanctionBox = () => {
  return (
    <ContentBox>
      <S.Wrapper>
        <S.ReportInfo>
          <div>
            <h1>
              1번 코드 :<p>&nbsp;{'신고 사유'}</p>
            </h1>
            <p>세부 내용 : {'ㄴㄴㄴ'}</p>
          </div>
          <span>
            <p>사용자 : {'나'}</p>
            <p>신고자 : {'나'}</p>
          </span>
        </S.ReportInfo>
        <div>
          <p>2023.03.03</p>
          <i>
            <SVG.TrashCan />
          </i>
        </div>
      </S.Wrapper>
    </ContentBox>
  );
};

export default SanctionBox;
