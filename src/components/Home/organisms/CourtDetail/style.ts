import styled from '@emotion/styled';

export const Layer = styled.div`
  grid-area: ${({ area }: { area: string }) => area};
  width: 100%;
  height: 100%;
`;
