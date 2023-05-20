import AppPresenter from "./AppPresenter";
import "./css/style.css";
const AppContainer = ({ isSignedIn, contractId, wallet }) => {
  return (
    <AppPresenter
      isSignedIn={isSignedIn}
      contractId={contractId}
      wallet={wallet}
    />
  );
};

export default AppContainer;
