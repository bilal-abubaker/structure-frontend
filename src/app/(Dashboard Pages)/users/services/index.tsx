import axiosService from '../../../../../core/config/axios';
import { User } from '../components/user-management/user-management-list';

export async function fetchUsers(): Promise<User[]> {
  try {
    const users = await axiosService.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    ); // Replace '/users' with your API endpoint

    console.log(users, 'users');
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return []; // Fallback to an empty array
  }
}
