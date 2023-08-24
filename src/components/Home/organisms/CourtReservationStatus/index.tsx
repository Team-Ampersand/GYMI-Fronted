import * as S from './style';
import CourtList from 'components/Home/molecules/CourtList';

const CourtReservationStatus = () => {
  return (
    <S.Layer>
      <S.Title>코트 예약 현황</S.Title>
      <CourtList />
    </S.Layer>
  );
};

export default CourtReservationStatus;
