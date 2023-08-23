import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

const LogoutBtn = ({ onClick }: { onClick: () => void }) => {
  return <Button onClick={onClick}>로그아웃</Button>;
};

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.875rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${Palette.SYSTEM_ERROR};
  background-color: ${Palette.WHITE};
  border: 1px solid ${Palette.SYSTEM_ERROR};
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default LogoutBtn;
