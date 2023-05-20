import React, { useEffect, useState } from 'react';
import MyPagePresenter from './MyPagePresenter';
import { useWallet } from '../../../utils/WalletManager';
import { ContentAPI } from '../../../API';

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
      return true;
    }
    setContentList([]);
  };
  /* Hooks */
  useEffect(() => {
    handleContentList();
  }, [userInfo]);

  /* Render */
  return <MyPagePresenter contentList={contentList} />;
};

export default MyPageContainer;
