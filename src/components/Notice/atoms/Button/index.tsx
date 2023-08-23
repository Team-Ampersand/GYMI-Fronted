import { ReactElement } from 'react';
import { Layer } from './style';

interface Props {
  color: string;
  children: ReactElement;
  onClick?: () => void;
}

const Button = ({ color, children, onClick }: Props) => {
  return (
    <Layer bgColor={color} onClick={onClick}>
      {children}
    </Layer>
  );
};

export default Button;
