import { useWallet } from '../../../utils/WalletManager';
import RegisterArtistPresenter from './RegisterArtistPresenter';
import { useEffect } from 'react';

const RegisterArtistContainer = () => {
  /* Router */
  /* State */
  const { isSignedIn } = useWallet();
  /* Hooks */
  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn]);
  /* Functions */
  /* Render */
  return <RegisterArtistPresenter />;
};

export default RegisterArtistContainer;
