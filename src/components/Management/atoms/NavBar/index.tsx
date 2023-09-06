import { ManagementOption } from 'asset/data/ManagementOption';
import ContentBox from '../ContentBox';
import * as S from './style';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const { query } = useRouter();

  return (
    <S.LayOut>
      <ContentBox>
        <S.Wrapper>
          {ManagementOption.map(({ routeName, queryValue }) => (
            <Link
              key={routeName}
              href={{ query: queryValue ? { mode: queryValue } : null }}
            >
              <S.RoutBtn toggle={queryValue === query.mode}>
                {routeName}
              </S.RoutBtn>
            </Link>
          ))}
        </S.Wrapper>
      </ContentBox>
    </S.LayOut>
  );
};

export default NavBar;
