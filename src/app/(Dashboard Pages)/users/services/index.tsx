import axiosService from '../../../../../core/config/axios';
import { User } from '../components/user-management/user-management-list';

export interface ResponseTypes {
  users: User[];
  limit: number;
  skip: number;
  total: number;
}

export async function fetchUsers(searchParams): Promise<Response> {
  try {
    console.log(searchParams, 'searchParams');
    const users = await axiosService.get<Response>(
      `https://dummyjson.com/users?page=${searchParams.page}&skip=${searchParams.skip}&limit=${searchParams.limit}`
    ); // Replace '/users' with your API endpoint

    console.log(users, 'users 123 321');
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return []; // Fallback to an empty array
  }
}
