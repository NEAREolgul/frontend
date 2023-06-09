import React, { useEffect, useState } from 'react';
import CREATIVE_BG from '../../../assets/images/creative-bg-01.jpg';
import CREATIVE_AVATAR from '../../../assets/images/creative-01.jpg';
import { EDITOR_URL, getSession } from '../../../utils/index';
import ContentModal from './components/ContentModal';
import MintModal from './components/MintModal';
import Thumbnail from './components/Thumbnail';

const MyPagePresenter = ({ contentList, createContent, validate }) => {
  /* Router */
  /* State */
  const [isModal, setIsModal] = useState(false);
  const [isMintModal, setIsMintModal] = useState(false);
  const [content, setContent] = useState();
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

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleCreateContent = async (dd) => {
    const result = await createContent(dd);
    if (result) {
      setIsModal(false);
      return true;
    }
    return false;
  };

  const handleMintModal = (e, item) => {
    e.preventDefault();
    setContent(item);
    setIsMintModal(!isMintModal);
    return true;
  };

  /* Hooks */
  useEffect(() => {
    handleUserInfo();
  }, []);

  /* Render */
  const inProgressRender = progressList.map((item) => {
    const { content_id, content_title } = item;
    return (
      <a
        href={`${EDITOR_URL}/editor/${content_id}`}
        target="_blank"
        rel="noreferrer"
        key={content_id}
        className="mr-5"
      >
        <div
          style={{
            width: '256px',
            height: '256px',
            border: '1px solid lightgray',
          }}
        >
          <Thumbnail content={item} />
        </div>
        <div>{content_title}</div>
        <div
          className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm m-6"
          onClick={(e) => handleMintModal(e, item)}
        >
          Minting
        </div>
      </a>
    );
  });

  const isNftRender = nftList.map((item) => {
    const { content_id, content_title } = item;
    return (
      <div
        key={content_id}
        style={{
          width: '256px',
          height: '256px',
          border: '1px solid lightgray',
        }}
      >
        {content_title}
      </div>
    );
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
          {progressList.length === 0 && (
            <div
              className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm m-6"
              onClick={handleModal}
            >
              Create Masterpiece
            </div>
          )}

          <div className="p-3 flex flex-wrap">
            {inProgressRender}
            <div
              style={{
                width: '256px',
                height: '256px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm m-6"
                onClick={handleModal}
                // onClick={handle}
              >
                Create New Masterpiece
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="h3">My NFT</div>
          <div className="btn-sm text-white bg-red-500 shadow-sm m-6">
            You haven't NFT
          </div>
          <div className="p-3">{isNftRender}</div>
        </div>
      </div>
      <ContentModal modal={isModal} submit={handleCreateContent} />
      <MintModal modal={isMintModal} submit={validate} content={content} />
    </section>
  );
};

export default MyPagePresenter;
