import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SigninPresenter = ({ wallet, isSignedIn, walletSelect, signIn }) => {
  /* Router */
  const navigate = useNavigate();

  /* State */
  const initialState = {
    user_id: '',
    user_pw: '',
    near_addr: '',
  };
  const [loginInfo, setLoginInfo] = useState(initialState);

  /* Functions */
  const handleLoginInfo = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn(loginInfo);
    if (result) {
      setLoginInfo(initialState);
      return true;
    }
    return false;
  };

  const handleSignIn = async () => {
    await walletSelect();
  };

  /* Hooks */
  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn]);

  /* Render */

  return (
    <main className="grow bg-gray-50">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h1 className="h2 font-cabinet-grotesk">
                Welcome back, Creative!
              </h1>
            </div>
            {/* Form */}
            <div className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <label
                      className="block text-gray-500 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      User ID
                    </label>
                    <input
                      id="email"
                      name="user_id"
                      type="text"
                      className="form-input w-full text-gray-800"
                      required
                      value={loginInfo.user_id}
                      onChange={handleLoginInfo}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <label
                      className="block text-gray-500 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="user_pw"
                      type="password"
                      className="form-input w-full text-gray-800"
                      required
                      value={loginInfo.user_pw}
                      onChange={handleLoginInfo}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between mt-6">
                  <Link
                    className="font-medium text-sm sm:text-base text-blue-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    to="/signup"
                  >
                    Join The Community
                  </Link>
                  <div className="ml-2">
                    <button
                      type="submit"
                      className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm"
                    >
                      Sign In To Creative
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex items-center my-6">
                <div
                  className="border-t border-gray-200 grow mr-3"
                  aria-hidden="true"
                />
                <div className="text-sm text-gray-500 italic">or</div>
                <div
                  className="border-t border-gray-200 grow ml-3"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <button
                    className="btn-sm text-white bg-[#1D9BF0] hover:bg-[#1A90DF] w-full relative flex items-center"
                    onClick={handleSignIn}
                  >
                    <svg
                      className="fill-white opacity-80"
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8Z" />
                    </svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Join with Near Wallet
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

export default SigninPresenter;
