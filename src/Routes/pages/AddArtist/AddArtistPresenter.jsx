import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddArtistPresenter = (props) => {
  /* Router */
  /* State */

  const { userInfo, setUserInfo } = useState({
    user_nm: 'HanHo',
    near_addr: '',
  });
  /* Hooks */
  /* Functions */
  useEffect(() => {
    return;
  }, []);

  /* Render */
  return (
    <main className="grow bg-gray-50">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h1 className="h2 font-cabinet-grotesk">
                Register as Artist and Make your Masterpiece!!
              </h1>
            </div>
            {/* Form */}
            <div className="max-w-sm mx-auto">
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label
                    className="block text-gray-500 text-sm font-medium mb-1"
                    htmlFor="Name"
                  >
                    Name
                  </label>
                  <input
                    id="user_nm"
                    type="text"
                    value={userInfo}
                    className="form-input w-full text-gray-800"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label
                    className="block text-gray-500 text-sm font-medium mb-1"
                    htmlFor="Email"
                  >
                    Email
                  </label>
                  <input
                    id="near_addr"
                    type="email"
                    value={userInfo}
                    className="form-input w-full text-gray-800"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center my-6">
                <div
                  className="border-t border-gray-200 grow mr-3"
                  aria-hidden="true"
                />
                <div className="text-sm text-gray-500 italic">Check</div>
                <div
                  className="border-t border-gray-200 grow ml-3"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <button className="btn-sm text-white bg-[#1D9BF0] hover:bg-[#1A90DF] w-full relative flex items-center">
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Register Artist
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddArtistPresenter;
