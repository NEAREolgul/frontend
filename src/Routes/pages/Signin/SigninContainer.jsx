import React from 'react';
import SigninPresenter from './SigninPresenter';
import { useWallet } from '../../../utils/WalletManager';

const SigninContainer = () => {
  /* Router */
  /* State */
  const { isSignedIn, wallet, signOut, walletSelect } = useWallet();
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <SigninPresenter
      isSignedIn={isSignedIn}
      wallet={wallet}
      signOut={signOut}
      walletSelect={walletSelect}
    />
  );
};

export default SigninContainer;
