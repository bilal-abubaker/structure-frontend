import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { postLogin } from '../services/auth-service';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/auth';

export const useLogin = () => {
  const { setToken, setUser } = useAuthStore((state: any) => state);

  const onSuccessSetItems = (data: any) => {
    console.log(data?.data?.token);
    setToken(data?.data?.token?.accessToken);
    setUser(data?.data?.user);
  };

  const router = useRouter();
  const loginHandler = () => {
    const mutation = useMutation({
      mutationFn: async (data: any) => {
        try {
          const response = await postLogin(data);
          return response;
        } catch (error) {
          throw new Error('API request failed');
        }
      },
      onSuccess: (data: any) => {
        if (onSuccessSetItems) {
          onSuccessSetItems(data);
        }
        if (data?.status) {
          router.push('/events/interested');
          toast.success('Login Successful');
        }
      },
      onError: (error: any) => {
        router.push('/users');

        toast.error('An error occurred. Please try again.');
      },
    });

    return mutation;
  };

  return { loginHandler };
};
