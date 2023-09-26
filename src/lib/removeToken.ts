import { AccessToken, RefreshToken } from './localStorage';

const removeToken = () => {
  localStorage.removeItem(RefreshToken);
  localStorage.removeItem(AccessToken);
};

export default removeToken;
