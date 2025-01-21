import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services/users-service';

export const useGetUsers = (search: string) => {
  return useQuery({
    queryKey: ['users', search],
    queryFn: () => getUsers(search),
  });
};
