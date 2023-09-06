import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    p {
      font-size: 12px;
      font-weight: 200;
    }

    > i {
      path {
        fill: red;
      }
    }
  }
`;

export const ReportInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 43px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > h1 {
      display: flex;
      font-size: 20px;
      font-weight: 500;

      > p {
        color: #ff5d5d;
      }
    }
  }

  > span {
    display: flex;
    flex-direction: column;
    gap: 4px;

    > p {
      font-size: 12px;
      font-weight: 500;

      :last-child {
        color: #bbbbcc;
      }
    }
  }
`;
