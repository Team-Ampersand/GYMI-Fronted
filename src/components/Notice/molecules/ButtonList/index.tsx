import { ModifyPen, PlusIcon, TrashCan } from 'asset/svg';
import Button from 'components/Notice/atoms/Button';
import { useRecoilState } from 'recoil';
import { noticeDetailId, noticeStatus } from 'recoilAtoms';
import { Palette } from 'styles/globals';
import { Layer } from './style';

const ButtonList = () => {
  const [status, setStatus] = useRecoilState(noticeStatus);
  const [noticeId, setNoticeId] = useRecoilState(noticeDetailId);

  if (noticeId !== null)
    return (
      <Layer>
        <Button
          bgColor={Palette.PRIMARY_P3}
          onClick={() => setStatus('modify')}
        >
          <>
            <ModifyPen />
            <h3>수정하기</h3>
          </>
        </Button>
        <Button
          bgColor={Palette.SYSTEM_ERROR}
          onClick={() => setStatus('delete')}
        >
          <>
            <TrashCan />
            <h3>삭제하기</h3>
          </>
        </Button>
        <Button
          bgColor={Palette.WHITE}
          onClick={() => {
            setStatus('read');
            setNoticeId(null);
          }}
          border={`1px solid ${Palette.NEUTRAL_N3}`}
          color={`1px solid ${Palette.NEUTRAL_N3}`}
        >
          <h3>돌아가기</h3>
        </Button>
      </Layer>
    );
  else if (status === 'write' || status === 'modify')
    return (
      <Layer>
        <Button bgColor={Palette.PRIMARY_P3}>
          <h3>확인</h3>
        </Button>
        <Button
          bgColor={Palette.WHITE}
          onClick={() => {
            setStatus('read');
          }}
          border={`1px solid ${Palette.NEUTRAL_N3}`}
          color={`1px solid ${Palette.NEUTRAL_N3}`}
        >
          <h3>취소</h3>
        </Button>
      </Layer>
    );
  else if (status === 'delete')
    return (
      <Layer>
        <Button bgColor={Palette.SYSTEM_ERROR}>
          <>
            <TrashCan />
            <h3>삭제하기</h3>
          </>
        </Button>
        <Button
          bgColor={Palette.WHITE}
          onClick={() => {
            setStatus('read');
          }}
          border={`1px solid ${Palette.NEUTRAL_N3}`}
          color={`1px solid ${Palette.NEUTRAL_N3}`}
        >
          <h3>취소</h3>
        </Button>
      </Layer>
    );
  else
    return (
      <Layer>
        <Button bgColor={Palette.PRIMARY_P3} onClick={() => setStatus('write')}>
          <>
            <PlusIcon />
            <h3>작성하기</h3>
          </>
        </Button>
        <Button
          bgColor={Palette.NEUTRAL_N3}
          onClick={() => setStatus('delete')}
        >
          <h3>편집</h3>
        </Button>
      </Layer>
    );
};

export default ButtonList;
