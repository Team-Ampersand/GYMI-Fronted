import SidebarList from 'components/common/molecules/SidebarList';
import * as S from './style';
import { GYMILogo } from 'asset/svg';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <S.Layer>
      <Link href="/">
        <S.LogoBox>
          <GYMILogo width="40" height="40" viewBox="0 0 150 150" />
          <h1>GYMI</h1>
        </S.LogoBox>
      </Link>
      <SidebarList />
    </S.Layer>
  );
};

export default Sidebar;
