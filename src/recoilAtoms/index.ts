import { atom } from 'recoil';

export const noticeStatus = atom<'read' | 'write' | 'modify' | 'delete'>({
  key: 'noticeStatus',
  default: 'read',
});

export const noticeDetailId = atom<number | null>({
  key: 'noticeDetailId',
  default: null,
});

export const noticeDeleteList = atom<Array<any>>({
  key: 'noticeDeleteList',
  default: [],
});
