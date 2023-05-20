import IndexRouter from "../Routes";

const AppPresenter = ({ isSignedIn, contractId, wallet }) => {
  return (
    <IndexRouter
      isSignedIn={isSignedIn}
      contractId={contractId}
      wallet={wallet}
    />
  );
};

export default AppPresenter;
