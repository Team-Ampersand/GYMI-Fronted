import styled from '@emotion/styled';
import CourtDetail from 'components/Home/organisms/CourtDetail';
import CourtReservationStatus from 'components/Home/organisms/CourtReservationStatus';
import { HomeTemplate } from 'components/Home/templates/HomeTemplate/style';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';

const array = [1, 2, 3, 4];

const Sidebar = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #ddd;
`;

const reservation: {
  name: string;
  num: number;
}[] = [
  { name: '강경민', num: 3101 },
  { name: '손정민', num: 3115 },
];

const Home = () => {
  return (
    <CommonTemplate>
      <Sidebar />
      <HomeTemplate>
        <CourtReservationStatus />
        {array.map((item, key) => (
          <>
            <CourtDetail area={key + 1} reservation={reservation} />
          </>
        ))}
      </HomeTemplate>
    </CommonTemplate>
  );
};

export default Home;
