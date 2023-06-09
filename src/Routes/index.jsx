import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../Layout';
import {
  Main,
  Signin,
  Signup,
  Mint,
  RegisterArtist,
  NFTcreate,
  NFTlist,
  NFTdetail,
  BuyNFT,
  BidNFT,
  Edtior,
  MyPage,
} from './pages';

const IndexRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/registerartist" element={<RegisterArtist />} />
        <Route path="/nftcreate" element={<NFTcreate />} />
        <Route path="/nftlist" element={<NFTlist />} />
        <Route path="/nftdetail" element={<NFTdetail />} />
        <Route path="/buynft" element={<BuyNFT />} />
        <Route path="/bidnft" element={<BidNFT />} />
        <Route path="/editor" element={<Edtior />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
