import { AccessToken, RefreshToken } from './localStorage';

const setToken = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(AccessToken, accessToken);
  localStorage.setItem(RefreshToken, refreshToken);
};

export default setToken;
