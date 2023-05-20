import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../Layout';
import { Main, Signin, Signup, AddArtist } from './pages';
const IndexRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addartist" element={<AddArtist />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
