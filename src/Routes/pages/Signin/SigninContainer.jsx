import React from "react";
import SigninPresenter from "./SigninPresenter";

const SigninContainer = ({ isSignedIn, wallet }) => {
  return <SigninPresenter isSignedIn={isSignedIn} wallet={wallet} />;
};

export default SigninContainer;
