import NoticeItem from 'components/Notice/molecules/NoticeItem';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { noticeDeleteList, noticeStatus } from 'recoilAtoms';
import { Layer } from './style';

const NoticeList = () => {
  const notices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const status = useRecoilValue(noticeStatus);
  const setDeleteList = useSetRecoilState(noticeDeleteList);

  useEffect(() => {
    if (status !== 'delete') setDeleteList([]);
  }, [status, setDeleteList]);

  return (
    <Layer>
      {notices.map((notice, key) => (
        <NoticeItem key={key + 1} id={notice} />
      ))}
    </Layer>
  );
};

export default NoticeList;
