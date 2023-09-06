import { ReactElement } from 'react';
import * as S from './style';

interface Props {
  children: ReactElement;
}

const ContentBox = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default ContentBox;
