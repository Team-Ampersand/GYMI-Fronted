import styled from '@emotion/styled';

export const LayOut = styled.div`
  width: 439px;
  height: 49px;
  margin-bottom: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RoutBtn = styled.a`
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ toggle }: { toggle: boolean }) =>
    toggle ? '#000000' : '#AFAFAF'};
  cursor: pointer;
`;
