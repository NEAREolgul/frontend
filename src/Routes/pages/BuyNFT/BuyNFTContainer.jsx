import BuyNFTPresenter from './BuyNFTPresenter';
import { useState } from 'react';
import PostAuthor01 from '../../../assets/images/blog-author-01.jpg';
import PostAuthor02 from '../../../assets/images/blog-author-02.jpg';
import PostAuthor03 from '../../../assets/images/blog-author-03.jpg';

const BuyNFTContainer = (props) => {
  /* Router */
  /* State */
  const { isSignedIn } = props;
  const [buyList, setBuyList] = useState([
    {
      price: 26,
      user_nm: 'BoGeum',
      authSrc: { PostAuthor01 },
    },
    {
      price: 19,
      user_nm: 'YoHan',
      authSrc: { PostAuthor02 },
    },
    {
      price: 8,
      user_nm: 'Simon',
      authSrc: { PostAuthor03 },
    },
  ]);

  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <BuyNFTPresenter
      buyList={buyList}
      setBuyList={setBuyList}
      isSignedIn={isSignedIn}
    />
  );
};

export default BuyNFTContainer;
