import CourtDetailList from 'components/Home/molecules/CourtDetailList';
import * as S from './style';
import { useState } from 'react';

interface Props {
  area: number;
  reservation: {
    name: string;
    num: number;
  }[];
}

interface a_type {
  [num: number]: string;
}

const a: a_type = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
};

const CourtDetail = ({ area, reservation }: Props) => {
  return (
    <S.Layer area={a[area]}>
      <S.TopBox>
        <h2>{area}번 코트</h2>
        {reservation.length > 0 && <S.ReportBtn>신고하기</S.ReportBtn>}
      </S.TopBox>
      {reservation.length > 0 ? (
        <CourtDetailList users={reservation} />
      ) : (
        <S.TextBox>
          <p>예약되지 않은 코트입니다.</p>
          <p>코트를 사용하고 싶으시면 예약해주세요!</p>
        </S.TextBox>
      )}
    </S.Layer>
  );
};

export default CourtDetail;
