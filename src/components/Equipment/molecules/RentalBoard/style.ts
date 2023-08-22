import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Wrapper = styled.div`
  width: 304px;
  height: 550px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 0.5rem;
`;

export const SelectItem = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
`;

export const ItemImg = styled.div`
  position: relative;
  width: 100%;
  height: 146px;
  img {
    border-radius: 8px;
  }
`;

export const ItemDetail = styled.div`
  font-size: 12px;
  font-weight: 200;
`;

export const RentalBtn = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  background: ${Palette.PRIMARY_P3};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
`;
