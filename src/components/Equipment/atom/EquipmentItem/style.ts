import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 190px;
  height: 218px;
  background: #fff;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Imgbox = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  img {
    border-radius: 8px;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
