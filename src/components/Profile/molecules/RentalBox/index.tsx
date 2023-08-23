import EquipmentItem from 'components/Equipment/atom/EquipmentItem';
import * as S from './style';
import RentalNull from 'components/Profile/atom/RentallNull';

const RentalBox = ({ name, title }: { name: string; title: string }) => {
  return (
    <S.Wrapper style={{ gridArea: name }}>
      <S.Title>{title}</S.Title>
      {name == 'b' ? (
        <S.BoxWrapper>
          <RentalNull type="b" />
        </S.BoxWrapper>
      ) : (
        <S.BoxWrapper>
          <EquipmentItem />
          <EquipmentItem />
          <EquipmentItem />
          <EquipmentItem />
          <EquipmentItem />
          <EquipmentItem />
          <EquipmentItem />
          <EquipmentItem />
        </S.BoxWrapper>
      )}
    </S.Wrapper>
  );
};

export default RentalBox;
