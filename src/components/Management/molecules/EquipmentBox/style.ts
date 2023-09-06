import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 29px;
`;

export const EquipmentBanner = styled.img`
  width: 214px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

export const EquipmentInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    display: flex;
    justify-content: space-between;

    > h1 {
      font-size: 16px;
      font-weight: 600;
    }

    > p {
      font-size: 12px;
      font-weight: 200;
    }
  }

  > p {
    font-size: 14px;
    font-weight: 600;
  }
`;
