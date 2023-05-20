import React from 'react';
import SigninPresenter from './SigninPresenter';
import { useWallet } from '../../../utils/WalletManager';
import UserAPI from '../../../API/module/UserAPI';
import { useNavigate } from 'react-router-dom';

const SigninContainer = () => {
  /* Router */
  const navigate = useNavigate();

  /* State */
  const { isSignedIn, wallet, signOut, walletSelect, signinWallet } =
    useWallet();

  /* Functions */
  const handleLogin = async (loginInfo) => {
    const result = await UserAPI.signIn(loginInfo);
    if (result) {
      await signinWallet(result.near_addr);
      // navigate('/');
      return true;
    }
    return false;
  };

  /* Hooks */
  /* Render */
  return (
    <SigninPresenter
      isSignedIn={isSignedIn}
      wallet={wallet}
      signOut={signOut}
      walletSelect={walletSelect}
      signIn={handleLogin}
    />
  );
};

export default SigninContainer;
