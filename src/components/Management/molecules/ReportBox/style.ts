import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    > p {
      font-size: 12px;
      font-weight: 200;
    }

    > a {
      font-size: 16px;
      font-weight: 400;
      color: #ff5d5d;
    }
  }
`;

export const ReportInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  > h1 {
    font-size: 20px;
    font-weight: 500;
  }

  > p {
    font-size: 16px;
    font-weight: 200;
  }
`;
