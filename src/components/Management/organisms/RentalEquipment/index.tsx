import ListBox from 'components/Management/atoms/ListBox';
import * as S from './style';
import EquipmentBox from 'components/Management/molecules/EquipmentBox';
import SanctionContoller from 'components/Management/molecules/SanctionContoller';

const RentalEquipment = () => {
  return (
    <S.Wrapper>
      <ListBox>
        <>
          <EquipmentBox />
          <EquipmentBox />
          <EquipmentBox />
          <EquipmentBox />
          <EquipmentBox />
          <EquipmentBox />
        </>
      </ListBox>
      <SanctionContoller />
    </S.Wrapper>
  );
};

export default RentalEquipment;
