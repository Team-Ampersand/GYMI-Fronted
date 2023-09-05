import { MenuData } from 'asset/data/SidebarMenuData';
import SidebarItem from 'components/common/atoms/SidebarItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './style';

const SidebarList = () => {
  const { pathname } = useRouter();
  const role = 'admin';

  return (
    <S.Layer>
      {MenuData.map((menu, key) => {
        return (
          <Link href={menu.url} key={key}>
            <div>
              <SidebarItem
                icon={<menu.icon />}
                name={menu.name}
                active={pathname === menu.url}
                show={menu.show.includes(role)}
              />
            </div>
          </Link>
        );
      })}
    </S.Layer>
  );
};

export default SidebarList;
