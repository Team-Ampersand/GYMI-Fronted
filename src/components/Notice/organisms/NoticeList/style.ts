import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`;
