import { useNavigate } from 'react-router-dom';
import { UserAPI } from '../../../API';
import { useWallet } from '../../../utils/WalletManager';
import SignupPresenter from './SignupPresenter';

const SignupContainer = () => {
  /* Router */
  const navigate = useNavigate();
  /* State */
  const { wallet, isSignedIn, walletSelect, account, signOut } = useWallet();
  /* Functions */
  /**
   * 회원가입 요청
   * --
   * @param {*} userInfo
   * @returns
   */
  const handleSignUp = async (userInfo) => {
    const result = await UserAPI.signUp(userInfo);
    if (result) {
      navigate('/');
      return true;
    }
    return false;
  };
  /* Hooks */
  /* Render */
  return (
    <SignupPresenter
      wallet={wallet}
      isSignedIn={isSignedIn}
      walletSelect={walletSelect}
      account={account}
      signOut={signOut}
      signUp={handleSignUp}
    />
  );
};

export default SignupContainer;
