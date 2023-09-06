import styled from '@emotion/styled';

export const LayOut = styled.div`
  position: sticky;
  right: 0;
  top: 20px;
  height: 0px;
`;

export const Wrapper = styled.div`
  width: 450px;
  height: 412px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StuInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > h1 {
    font-size: 24px;
    font-weight: 600;
  }
  > p {
    font-size: 20px;
    font-weight: 500;
    color: #656b80;
  }
`;

export const DayInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 500;
`;
