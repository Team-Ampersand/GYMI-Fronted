import ListBox from 'components/Management/atoms/ListBox';
import SanctionBox from 'components/Management/molecules/SanctionBox';
import * as S from './style';
import SanctionContoller from 'components/Management/molecules/SanctionContoller';

const Sanction = () => {
  return (
    <S.Wrapper>
      <ListBox>
        <>
          <SanctionBox />
          <SanctionBox />
          <SanctionBox />
          <SanctionBox />
          <SanctionBox />
          <SanctionBox />
          <SanctionBox />
        </>
      </ListBox>
      <SanctionContoller />
    </S.Wrapper>
  );
};

export default Sanction;
