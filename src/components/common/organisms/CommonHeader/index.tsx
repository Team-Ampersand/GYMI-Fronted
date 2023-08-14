import { MenuData } from 'asset/data/MenuData';
import { useRouter } from 'next/router';
import * as S from './style';

const CommonHeader = () => {
  const { pathname } = useRouter();

  return (
    <S.HeaderWrapper>
      <S.Title>
        {MenuData.filter((i) => pathname.includes(i.routerName))[0].menuTitle}
      </S.Title>
    </S.HeaderWrapper>
  );
};

export default CommonHeader;
