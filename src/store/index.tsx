import { User } from '@/types/api';
import { create } from 'zustand';

export const useBearStore = create<{
  token: string;
  userInfo: {
    userEmail: string;
    userName: string;
  };
  // eslint-disable-next-line no-unused-vars
  updateUserInfo: (userInfo: User.userItem) => void;
}>((set: any) => ({
  token: '',
  userInfo: {
    userEmail: '',
    userName: ''
  },
  updateUserInfo: (userInfo: User.userItem) => set({ userInfo })
}));
