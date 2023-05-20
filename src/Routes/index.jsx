import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../Layout';
import { Main, Signin, Signup, RegisterArtist } from './pages';
const IndexRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/registerartist" element={<RegisterArtist />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
