import { InternalAxiosRequestConfig } from 'axios';
import getToken from './getToken';

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
