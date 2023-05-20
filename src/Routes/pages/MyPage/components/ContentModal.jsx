import React, { useState } from 'react';

const ContentModal = ({ modal, close, submit }) => {
  /* Router */
  /* State */
  const initialState = {
    content_title: '',
    content_desc: '',
  };
  const [contentInfo, setContentInfo] = useState(initialState);
  /* Functions */
  const handleContentInfo = (e) => {
    setContentInfo({ ...contentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submit(contentInfo);
    if (result) {
      setContentInfo(initialState);
    }
  };
  /* Hooks */
  /* Render */
  return (
    modal && (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '9999',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ width: '600px', height: '400px', borderRadius: '10px' }}
          className="bg-white p-3"
        >
          <div className="h3">Create New Masterpiece</div>
          <div>
            <input
              type="text"
              name="content_title"
              value={contentInfo.content_title}
              onChange={handleContentInfo}
            />
          </div>
          <div>
            <textarea
              name="content_desc"
              value={contentInfo.content_desc}
              onChange={handleContentInfo}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm m-6"
            >
              Create Masterpiece
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default ContentModal;
