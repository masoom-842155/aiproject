import { create } from 'zustand';
import { UserProfile } from '../types';

interface UserState {
  profile: UserProfile | null;
  setProfile: (profile: UserProfile) => void;
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));