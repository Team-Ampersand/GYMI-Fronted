import styled from '@emotion/styled';
import { CommonTemplate } from 'components/common/templates/CommonTemplate/style';

export const HomeTemplate = styled(CommonTemplate)`
  padding: 45px 38px;
  display: grid;
  gap: 20px 28px;
  grid-template-areas:
    'status one three'
    'status two four';
`;
