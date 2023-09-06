import RentalEquipment from 'components/Management/organisms/RentalEquipment';
import Report from 'components/Management/organisms/Report';
import Sanction from 'components/Management/organisms/Sanction';
import { ReactElement } from 'react';

interface ManagementOptionType {
  routeName: string;
  componentValue: ReactElement;
  queryValue?: string;
}

export const ManagementOption: ManagementOptionType[] = [
  {
    routeName: '신고 내역',
    componentValue: <Sanction />,
  },
  {
    routeName: '제재 내역',
    componentValue: <Report />,

    queryValue: 'report',
  },
  {
    routeName: '기자재 대여 현황',
    componentValue: <RentalEquipment />,
    queryValue: 'rental',
  },
];
