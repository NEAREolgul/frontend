import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../Layout';
import { Main, Signin, Signup, RegisterArtist } from './pages';
const IndexRouter = ({ isSignedIn, contractId, wallet }) => {
  return (
    <Routes>
      <Route element={<MainLayout isSignedIn={isSignedIn} wallet={wallet} />}>
        <Route path="/" element={<Main />} />
        <Route
          path="/signup"
          element={<Signup isSignedIn={isSignedIn} wallet={wallet} />}
        />
        <Route
          path="/signin"
          element={<Signin isSignedIn={isSignedIn} wallet={wallet} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/registerartist"
          element={<RegisterArtist />}
          isSignedIn={isSignedIn}
        />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
