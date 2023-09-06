import ListBox from 'components/Management/atoms/ListBox';
import * as S from './style';
import ReportBox from 'components/Management/molecules/ReportBox';

const Report = () => {
  return (
    <S.Wrapper>
      <ListBox>
        <>
          <ReportBox />
          <ReportBox />
          <ReportBox />
        </>
      </ListBox>
    </S.Wrapper>
  );
};

export default Report;
