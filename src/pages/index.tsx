import CourtDetail from 'components/Home/organisms/CourtDetail';
import CourtReservationStatus from 'components/Home/organisms/CourtReservationStatus';
import { HomeTemplate } from 'components/Home/templates/HomeTemplate/style';

const Home = () => {
  return (
    <HomeTemplate>
      <CourtReservationStatus />
      <CourtDetail area="one" />
      <CourtDetail area="two" />
      <CourtDetail area="three" />
      <CourtDetail area="four" />
    </HomeTemplate>
  );
};

export default Home;
