import axiosService from '../../../../../core/config/axios';

export interface EventResponse {
  data: any;
}

export interface UserDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber1: string;
  roles: number[] | { id: number }[];
  id?: string;
}

export interface UserData {
  data?: { name: string };
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber1: string;
  roles: {
    id: number;
    name: string;
  }[];
}

const getUsers = async (search: string): Promise<EventResponse> => {
  const response = await axiosService.get<EventResponse>(
    `https://jsonplaceholder.typicode.com/users?search=${search}`
  );
  return response;
};

const createUser = async (data: UserDTO): Promise<EventResponse> => {
  const response = await axiosService.post<EventResponse>('users', data);
  return response;
};

const editUser = async (id: number, data: any): Promise<EventResponse> => {
  const response = await axiosService.put<EventResponse>(`users/${id}`, data);
  return response;
};

const deleteUser = async (id: number): Promise<EventResponse> => {
  const response = await axiosService.delete<EventResponse>(`users/${id}`);
  return response;
};

export { getUsers, createUser, editUser, deleteUser };
