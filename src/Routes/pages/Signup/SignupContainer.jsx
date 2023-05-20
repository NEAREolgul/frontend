import { useWallet } from '../../../utils/WalletManager';
import SignupPresenter from './SignupPresenter';

const SignupContainer = () => {
  /* Router */
  /* State */
  const { wallet, isSignedIn, walletSelect, account, signOut } = useWallet();
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <SignupPresenter
      wallet={wallet}
      isSignedIn={isSignedIn}
      walletSelect={walletSelect}
      account={account}
      signOut={signOut}
    />
  );
};

export default SignupContainer;
