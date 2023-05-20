import { Outlet } from "react-router-dom";
import Header from "../../Components/header";

const MainLayout = ({ wallet, isSignedIn }) => {
  return (
    <div className="font-inter antialiased bg-white text-gray-800 tracking-tight`}">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header wallet={wallet} isSignedIn={isSignedIn} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
