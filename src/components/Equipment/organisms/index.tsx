import ListBoard from '../molecules/ListBoard';
import RentalBoard from '../molecules/RentalBoard';
import { Wrapper } from './style';

const Equipment = () => {
  return (
    <Wrapper>
      <ListBoard />
      <div>
        <RentalBoard />
      </div>
    </Wrapper>
  );
};

export default Equipment;
