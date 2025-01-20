import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { log } from 'console';
import Cookies from 'js-cookie';

class AxiosService {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string, params?: object): Promise<T> {
    try {
      const response = await this.instance.get<T>(url, { params });

      return response?.data;
    } catch (error) {
      throw new Error('error');
    }
  }

  public async post<T>(url: string, data: object): Promise<T> {
    try {
      const response = await this.instance.post<T>(url, data);
      return response.data;
    } catch (error) {
      throw new Error('Error in POST request');
    }
  }

  public async patch<T>(url: string, data: object): Promise<T> {
    try {
      const response = await this.instance.patch<T>(url, data);
      return response.data;
    } catch (error) {
      throw new Error('Error in PATCH request');
    }
  }

  public async put<T>(url: string, data: object): Promise<T> {
    try {
      const response = await this.instance.put<T>(url, data);
      return response.data;
    } catch (error) {
      throw new Error('Error in PUT request');
    }
  }

  public async delete<T>(url: string): Promise<T> {
    try {
      const response = await this.instance.delete<T>(url);
      return response.data;
    } catch (error) {
      throw new Error('Error in DELETE request');
    }
  }
}

const axiosService = new AxiosService(
  process.env.NEXT_PUBLIC_BACKEND_URL || 'https://jsonplaceholder.typicode.com'
);
export default axiosService;
