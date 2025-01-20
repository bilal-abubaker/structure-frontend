// hooks/useAuth.ts

import { useAuthStore } from '@/stores/auth';

export const useAuth = () => {
  const { user, token, clearToken, clearUser } = useAuthStore((state: any) => ({
    user: state.user,
    token: state.token,
    clearToken: state.clearToken,
    clearUser: state.clearUser,
  }));

  return {
    user,
    token,
    isAuthenticated: !!token,
    clearToken,
    clearAuth: () => {
      clearToken();
      clearUser();
    },
  };
};
