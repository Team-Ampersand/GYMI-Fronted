import { useEffect, useRef, useState } from 'react';
import * as S from './style';

interface Props {
  icon: JSX.Element;
  name: string;
  active: boolean;
}

const SidebarItem = ({ icon, name, active }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [colorArea, setColorArea] = useState('');

  useEffect(() => {
    if (
      ref.current &&
      window
        .getComputedStyle(ref.current.children[0].children[0])
        .getPropertyValue('fill') !== 'none'
    )
      setColorArea('fill');
    else setColorArea('stroke');
  }, []);
  return (
    <S.Layer checked={active} colorArea={colorArea}>
      <S.ContentBox>
        <S.IconBox ref={ref}>{icon}</S.IconBox>
        <S.NameBox>{name}</S.NameBox>
      </S.ContentBox>
    </S.Layer>
  );
};

export default SidebarItem;
