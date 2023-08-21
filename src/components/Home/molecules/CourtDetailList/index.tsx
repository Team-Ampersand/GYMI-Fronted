import CourtDetailUser from 'components/Home/atoms/CourtDetailUser';
import * as S from './style';

interface Props {
  users: {
    name: string;
    num: number;
  }[];
}

const CourtDetailList = ({ users }: Props) => {
  return (
    <S.Layer>
      <CourtDetailUser name={users[0]?.name} num={users[0]?.num} />
      <CourtDetailUser name={users[1]?.name} num={users[1]?.num} />
      <CourtDetailUser name={users[2]?.name} num={users[2]?.num} />
      <CourtDetailUser name={users[3]?.name} num={users[3]?.num} />
    </S.Layer>
  );
};

export default CourtDetailList;
