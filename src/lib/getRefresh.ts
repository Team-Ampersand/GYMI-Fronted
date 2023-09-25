import { InternalAxiosRequestConfig } from 'axios';
import { apiClient } from './apiClient';
import getToken from './getToken';
import setToken from './setToken';

interface TokenType {
  accessToken: string | null;
  refreshToken: string | null;
}

export const getRefresh = async (config: InternalAxiosRequestConfig) => {
  if (typeof window !== 'object') return config;

  const { accessToken, refreshToken }: TokenType = await getToken();

  if (!config.headers['Authorization'])
    config.headers['Authorization'] = `Bearer ${accessToken}`;

  return config;
};

const refreshToken = async (refreshToken: string) => {
  try {
    const { data } = await apiClient.patch(
      '/auth',
      {},
      {
        headers: {
          refreshToken,
        },
      }
    );
    setToken(data.accessToken, data.refreshToken);
    const accessToken: string = data.accessToken;
    refreshToken = data.refreshToken;
    return { accessToken, refreshToken };
  } catch {
    return { accessToken: '', refreshToken };
  }
};
