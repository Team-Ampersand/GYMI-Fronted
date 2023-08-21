import * as S from './style';

interface Props {
  top: string;
  bottom: string;
}

const Court = ({ top, bottom }: Props) => {
  return (
    <S.Layer>
      <S.CourtBox top={top} bottom={bottom} />
    </S.Layer>
  );
};

export default Court;
