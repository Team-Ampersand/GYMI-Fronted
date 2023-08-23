import NoticeItem from 'components/Notice/molecules/NoticeItem';
import { Layer } from './style';

const NoticeList = () => {
  const notices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Layer>
      {notices.map((notice, key) => (
        <NoticeItem key={key + 1} id={key} />
      ))}
    </Layer>
  );
};

export default NoticeList;
