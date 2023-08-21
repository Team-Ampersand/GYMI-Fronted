import CourtDetailList from 'components/Home/molecules/CourtDetailList';
import * as S from './style';

interface Props {
  area: number;
}

interface a_type {
  [num: number]: string;
}

const a: a_type = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
};

const CourtDetail = ({ area }: Props) => {
  return (
    <S.Layer area={a[area]}>
      <S.TopBox>
        <h2>{area}번 코트</h2>
        <S.ReportBtn>신고하기</S.ReportBtn>
      </S.TopBox>
      <CourtDetailList />
    </S.Layer>
  );
};

export default CourtDetail;
