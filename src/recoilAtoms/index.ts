import { atom } from 'recoil';

export const noticeStatus = atom<'read' | 'write' | 'modify' | 'delete'>({
  key: 'noticeStatus',
  default: 'read',
});
