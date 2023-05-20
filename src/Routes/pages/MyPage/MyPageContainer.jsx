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
    const result = await ContentAPI.createContent(postData);
    if (result) {
      await handleContentList();
      return true;
    }
  };

  const handleValidate = async (files) => {
    console.log(typeof files[0]);
    const formData = new FormData();
    formData.append('files', files[0]);
    formData.append('files', files[1]);
    const result = await ContentAPI.vlidate(formData);
    if (result) {
      return result;
    }
    return false;
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
      validate={handleValidate}
    />
  );
};

export default MyPageContainer;
