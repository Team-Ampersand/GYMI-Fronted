import {
  BellIcon,
  GridIcon,
  HomeIcon,
  KeysIcon,
  ProfileIcon,
  Student,
} from 'asset/svg';

interface MenuDataType {
  icon: any;
  name: string;
  url: string;
  show: string[];
}

export const MenuData: MenuDataType[] = [
  {
    icon: HomeIcon,
    name: '홈',
    url: '/',
    show: ['admin', 'member'],
  },
  {
    icon: ProfileIcon,
    name: '프로필',
    url: '/profile',
    show: ['admin', 'member'],
  },
  {
    icon: BellIcon,
    name: '공지사항',
    url: '/notice',
    show: ['admin', 'member'],
  },
  {
    icon: GridIcon,
    name: '예약하기',
    url: '/reservation',
    show: ['admin', 'member'],
  },
  {
    icon: KeysIcon,
    name: '기자재대여',
    url: '/rental',
    show: ['admin', 'member'],
  },
  {
    icon: Student,
    name: '학생관리',
    url: '/student',
    show: ['admin'],
  },
];
