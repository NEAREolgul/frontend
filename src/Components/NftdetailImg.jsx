import React from 'react';
import '../assets/css/Nftdetail.css';

function NFTdetailImg(props) {
  /* Router */

  /* State */
  const { imgSrc } = props;

  /* Hooks */

  /* Functions */

  /* Render */
  return (
    <a
      className="relative group hover:shadow-xl transition duration-150 ease-in-out"
      href="#0"
      data-aos="fade-down"
      data-aos-anchor="[data-aos-id-inpspiration]"
    >
      <img
        className="w-full detailimg aspect-square object-cover"
        src={imgSrc}
        width="176"
        height="176"
        alt="img"
      />
    </a>
  );
}

export default NFTdetailImg;
