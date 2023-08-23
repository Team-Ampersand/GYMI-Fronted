import { ModifyPen, TrashCan } from 'asset/svg';
import Button from 'components/Notice/atoms/Button';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { noticeStatus } from 'recoilAtoms';
import { Palette } from 'styles/globals';
import { Layer } from './style';

const ButtonList = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [status, setStatus] = useRecoilState(noticeStatus);

  if (status === 'write' || status === 'modify')
    return (
      <Layer>
        <Button bgColor={Palette.PRIMARY_P3}>
          <h3>확인</h3>
        </Button>
        <Button
          bgColor={Palette.WHITE}
          onClick={() => {
            setStatus('read');
            setEdit(false);
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
        <Button bgColor={Palette.PRIMARY_P3}>
          <>
            <ModifyPen />
            <h3>삭제하기</h3>
          </>
        </Button>
        <Button
          bgColor={Palette.WHITE}
          onClick={() => {
            setStatus('read');
            setEdit(false);
          }}
          border={`1px solid ${Palette.NEUTRAL_N3}`}
          color={`1px solid ${Palette.NEUTRAL_N3}`}
        >
          <h3>취소</h3>
        </Button>
      </Layer>
    );
  else if (edit)
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
        <Button bgColor={Palette.NEUTRAL_N3} onClick={() => setEdit(false)}>
          <h3>취소</h3>
        </Button>
      </Layer>
    );
  return (
    <Layer>
      <Button bgColor={Palette.PRIMARY_P3} onClick={() => setStatus('write')}>
        <h3>공지 작성하기</h3>
      </Button>
      <Button bgColor={Palette.NEUTRAL_N3} onClick={() => setEdit(true)}>
        <h3>편집</h3>
      </Button>
    </Layer>
  );
};

export default ButtonList;
