import { MenuData } from 'asset/data/SidebarMenuData';
import { useRouter } from 'next/router';
import * as S from './style';

const CommonHeader = () => {
  const { pathname } = useRouter();

  return (
    <S.HeaderWrapper>
      <S.Title>{MenuData.find((i) => pathname === i.url)?.name}</S.Title>
    </S.HeaderWrapper>
  );
};

export default CommonHeader;
