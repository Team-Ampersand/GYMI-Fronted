import { MenuData } from 'asset/data/SidebarMenuData';
import { useRouter } from 'next/router';
import * as S from './style';

const CommonHeader = () => {
  const { pathname } = useRouter();

  return (
    <S.HeaderWrapper>
      <S.Title>
        {pathname === '/'
          ? '홈'
          : MenuData.filter((i) => pathname.includes(i.url))[1].name}
      </S.Title>
    </S.HeaderWrapper>
  );
};

export default CommonHeader;
