import { apiClient } from 'lib/apiClient';
import setToken from 'lib/setToken';

export const TokenReissue = async (refreshToken: string) => {
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
