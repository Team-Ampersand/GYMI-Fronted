import * as S from './style';

interface Props {
  area: string;
}

const CourtDetail = ({ area }: Props) => {
  return <S.Layer area={area}></S.Layer>;
};

export default CourtDetail;
