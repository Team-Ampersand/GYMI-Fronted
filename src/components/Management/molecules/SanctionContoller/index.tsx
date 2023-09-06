import ContentBox from 'components/Management/atoms/ContentBox';
import * as S from './style';
import Button from 'components/Management/atoms/Button';
import Input from 'components/Management/atoms/Input';

const SanctionContoller = () => {
  return (
    <S.LayOut>
      <ContentBox>
        <S.Wrapper>
          <S.StuInfo>
            <h1>제재 하기</h1>
            <p>제재할 신고 내역을 선택해주세요</p>
          </S.StuInfo>
          <S.DayInput>
            제재기간
            <Input />
          </S.DayInput>
          <Button />
        </S.Wrapper>
      </ContentBox>
    </S.LayOut>
  );
};

export default SanctionContoller;
