import React, { useEffect, useState } from 'react';
import CREATIVE_BG from '../../../assets/images/creative-bg-01.jpg';
import CREATIVE_AVATAR from '../../../assets/images/creative-01.jpg';
import { getSession } from '../../../utils/index';

const MyPagePresenter = ({ contentList }) => {
  /* Router */
  /* State */
  const [userInfo, setUserInfo] = useState({ user_id: '', near_addr: '' });
  const progressList = contentList.filter((item) => {
    return !item.is_nft;
  });

  const nftList = contentList.filter((item) => {
    return item.is_nft;
  });

  /* Functions */
  const handleUserInfo = () => {
    const ss = getSession();
    setUserInfo(ss);
  };
  /* Hooks */
  useEffect(() => {
    handleUserInfo();
  }, []);

  /* Render */
  const inProgressRender = progressList.map((item) => {
    return <div>11</div>;
  });

  const isNftRender = nftList.map((item) => {
    return <div>11</div>;
  });

  return (
    <section className="mt-24 h100vh">
      <div>
        <div
          class="text-center shadow-sm"
          data-aos-anchor="[data-aos-id-cards]"
          data-aos="fade-down"
        >
          <img
            class="w-full h-50 object-cover opacity-60"
            src={CREATIVE_BG}
            width="258"
            height="64"
            alt="Creative 01 bg"
          />
          <div class="bg-white px-4 pb-6">
            <div class="relative inline-flex -mt-8 mb-3">
              <img
                class="inline-flex rounded-full"
                src={CREATIVE_AVATAR}
                width="128"
                height="128"
                alt="Creative 01"
              />
            </div>
            <div class="mb-5">
              <div class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline">
                {userInfo.user_id}
              </div>
              <div class="text-sm font-medium text-gray-500">
                @{userInfo.near_addr}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="h3">In Progress</div>
          <div>{inProgressRender}</div>
        </div>
        <div className="w-full text-center">
          <div className="h3">My NFT</div>
          <div>{isNftRender}</div>
        </div>
      </div>
    </section>
  );
};

export default MyPagePresenter;
