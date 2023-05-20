import React, { useEffect, useState } from 'react';
import MyPagePresenter from './MyPagePresenter';
import { useWallet } from '../../../utils/WalletManager';
import { ContentAPI } from '../../../API';
import { v4 } from 'uuid';

const MyPageContainer = () => {
  /* Router */
  /* State */
  const { userInfo } = useWallet();
  const [contentList, setContentList] = useState([]);
  /* Functions */
  const handleContentList = async () => {
    if (userInfo) {
      const result = await ContentAPI.getContentByUser(userInfo.user_id);
      setContentList(result);
      console.log(result);
      return true;
    }
    setContentList([]);
  };

  const handleCreateContent = async (contentInfo) => {
    const postData = {
      content_id: v4(),
      user_id: userInfo.user_id,
      content_title: contentInfo.content_title,
      content_desc: contentInfo.content_desc,
    };
    console.log(postData);
    const result = await ContentAPI.createContent(postData);
    if (result) {
      await handleContentList();
      return true;
    }
  };

  /* Hooks */
  useEffect(() => {
    handleContentList();
  }, [userInfo]);

  /* Render */
  return (
    <MyPagePresenter
      contentList={contentList}
      createContent={handleCreateContent}
    />
  );
};

export default MyPageContainer;
