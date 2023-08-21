import CourtDetailUser from 'components/Home/atoms/CourtDetailUser';
import * as S from './style';

const CourtDetailList = () => {
  return (
    <S.Layer>
      <CourtDetailUser />
      <CourtDetailUser />
      <CourtDetailUser />
      <CourtDetailUser />
    </S.Layer>
  );
};

export default CourtDetailList;
