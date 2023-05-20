import BuyNFTPresenter from './BuyNFTPresenter';
import { useState } from 'react';
import PostAuthor01 from '../../../assets/images/blog-author-01.jpg';
import PostAuthor02 from '../../../assets/images/blog-author-02.jpg';
import PostAuthor03 from '../../../assets/images/blog-author-03.jpg';
import PostAuthor04 from '../../../assets/images/blog-author-04.jpg';
import PostAuthor05 from '../../../assets/images/blog-author-05.jpg';

const BuyNFTContainer = (props) => {
  /* Router */
  /* State */
  const { isSignedIn } = props;
  const [buyList, setBuyList] = useState([
    {
      price: '8',
      user_nm: 'Simon',
      authSrc: PostAuthor03,
    },
    {
      price: '19',
      user_nm: 'KyeonWoo',
      authSrc: PostAuthor05,
    },
    {
      price: '26',
      user_nm: 'BoGeum',
      authSrc: PostAuthor01,
    },
  ]);
  const [bidList, setBidList] = useState([
    {
      price: '38',
      user_nm: 'Simon',
      authSrc: PostAuthor03,
    },
    {
      price: '58',
      user_nm: 'KyeongWoo',
      authSrc: PostAuthor05,
    },
  ]);

  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <BuyNFTPresenter
      buyList={buyList}
      setBuyList={setBuyList}
      bidList={bidList}
      setBidList={setBidList}
      isSignedIn={isSignedIn}
    />
  );
};

export default BuyNFTContainer;
