import CourtBoard from '../molecules/CourtBoard';
import EquipmentBoard from '../molecules/EquipmentBoard';
import ProfileBoard from '../molecules/ProfileBoard';
import { Wrapper } from './style';

const Profile = () => {
  return (
    <Wrapper>
      <ProfileBoard />
      <CourtBoard />
      <EquipmentBoard />
    </Wrapper>
  );
};

export default Profile;
