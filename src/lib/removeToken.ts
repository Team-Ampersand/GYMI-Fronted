import { AccessToken, RefreshToken } from './localstorage';

const removeToken = () => {
  localStorage.removeItem(RefreshToken);
  localStorage.removeItem(AccessToken);
};

export default removeToken;
