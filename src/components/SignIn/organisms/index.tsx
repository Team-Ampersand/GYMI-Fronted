import GauthLoginButton from '../atom/GauthLoginButton';
import { SignInWrapper } from './style';
import SigninHeader from '../molecules/Header';
import { useRouter } from 'next/router';
import { gauthUrl } from 'lib/gauthUrl';

const SignIn = () => {
  const router = useRouter();

  return (
    <SignInWrapper>
      <SigninHeader />
      <GauthLoginButton onClick={() => router.replace(gauthUrl)} />
    </SignInWrapper>
  );
};

export default SignIn;
