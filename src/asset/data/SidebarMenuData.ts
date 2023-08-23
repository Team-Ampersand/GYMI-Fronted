import { BellIcon, GridIcon, HomeIcon, KeysIcon, ProfileIcon } from 'asset/svg';

interface MenuDataType {
  icon: any;
  name: string;
  url: string;
}

export const MenuData: MenuDataType[] = [
  {
    icon: HomeIcon,
    name: '홈',
    url: '/',
  },
  {
    icon: ProfileIcon,
    name: '프로필',
    url: '/profile',
  },
  {
    icon: BellIcon,
    name: '공지사항',
    url: '/notice',
  },
  {
    icon: GridIcon,
    name: '예약하기',
    url: '/reservation',
  },
  {
    icon: KeysIcon,
    name: '기자재 대여',
    url: '/rental',
  },
];
