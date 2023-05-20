import React from "react";
import NftcreateAPI from '../../../API/module/NftcreateAPI';

const NFTcreatePresenter = () => {

  const uploadImage = () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
      console.error('파일을 선택하세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    NftcreateAPI.sendIpfs(formData);
  };

  return (
    <main className="grow bg-gray-50">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">NFTcreatePresenter</div>
          <input type="file" id="fileInput" />
          <button onClick={uploadImage}>Upload Image</button>
        </div>
      </section>
    </main>
  );
};

export default NFTcreatePresenter;
