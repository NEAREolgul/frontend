import { Outlet } from 'react-router-dom';
import Header from '../../Components/header';
import { useWallet } from '../../utils/WalletManager';

const MainLayout = () => {
  /* Router */
  /* State */
  const { wallet, isSignedIn, account, signOut } = useWallet();

  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <div className="font-inter antialiased bg-white text-gray-800 tracking-tight`}">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header
          wallet={wallet}
          isSignedIn={isSignedIn}
          account={account}
          signOut={signOut}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
