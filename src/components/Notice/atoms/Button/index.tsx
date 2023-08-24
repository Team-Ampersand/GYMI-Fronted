import { ReactElement } from 'react';
import { Layer } from './style';

interface Props {
  bgColor: string;
  color?: string;
  children: ReactElement;
  onClick?: () => void;
  border?: string;
}

const Button = ({ color, bgColor, children, onClick, border }: Props) => {
  return (
    <Layer bgColor={bgColor} onClick={onClick} border={border} color={color}>
      {children}
    </Layer>
  );
};

export default Button;
