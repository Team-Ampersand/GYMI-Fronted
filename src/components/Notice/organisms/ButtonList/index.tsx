import { ModifyPen, TrashCan } from 'asset/svg';
import Button from 'components/Notice/atoms/Button';
import { useState } from 'react';
import { Palette } from 'styles/globals';
import { Layer } from './style';

const ButtonList = () => {
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <Layer>
      {edit ? (
        <>
          <Button color={Palette.PRIMARY_P3}>
            <>
              <ModifyPen />
              <h3>수정하기</h3>
            </>
          </Button>
          <Button color={Palette.SYSTEM_ERROR}>
            <>
              <TrashCan />
              <h3>삭제하기</h3>
            </>
          </Button>
          <Button color={Palette.NEUTRAL_N3} onClick={() => setEdit(false)}>
            <h3>취소</h3>
          </Button>
        </>
      ) : (
        <>
          <Button color={Palette.PRIMARY_P3}>
            <>
              <h3>공지 작성하기</h3>
            </>
          </Button>
          <Button color={Palette.NEUTRAL_N3} onClick={() => setEdit(true)}>
            <>
              <h3>편집</h3>
            </>
          </Button>
        </>
      )}
    </Layer>
  );
};

export default ButtonList;
