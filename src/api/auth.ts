import { useFetch } from 'hooks/useFetch';
import { apiClient } from 'lib/apiClient';
import setToken from 'lib/setToken';

export const TokenReissue = async (refreshToken: string) => {
  const { data } = await useFetch({ url: '/auth', method: 'patch' });
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
    const newAccessToken: string = data.accessToken;
    refreshToken = data.refreshToken;
    return { newAccessToken, refreshToken };
  } catch {
    return { newAccessToken: '', refreshToken };
  }
};
