import SignupPresenter from "./SignupPresenter";

const SignupContainer = ({ wallet, isSignedIn }) => {
  return <SignupPresenter wallet={wallet} isSignedIn={isSignedIn} />;
};

export default SignupContainer;
