// stores/useAuthStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null, // Token is fetched from cookie
      setUser: (user: unknown) => {
        set({ user });
      },
      setToken: (token: string) => {
        Cookies.set('token', token, { expires: 7, path: '' }); // Save token in cookie
        set({ token });
      },
      clearToken: () => {
        Cookies.remove('token'); // Remove token from cookie
        set({ token: null });
      },
      clearUser: () => {
        set({ user: null });
      },
    }),
    {
      name: 'auth-store', // Unique name for the persisted store
      storage: createJSONStorage(() => localStorage), // Persisting in localStorage
    },
  ),
);
