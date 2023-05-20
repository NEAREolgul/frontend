import RegisterArtistPresenter from './RegisterArtistPresenter';
import { useEffect } from 'react';

const RegisterArtistContainer = ({ isSignedIn } = props) => {
  /* Router */
  /* State */
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
