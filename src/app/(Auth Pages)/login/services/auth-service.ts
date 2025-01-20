import axiosService from '../../../../../core/config/axios';

export interface LoginResponse {
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const postLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosService.post<LoginResponse>('auth/login', data);
  return response;
};
