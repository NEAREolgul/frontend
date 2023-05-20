import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./global";

import { Wallet } from "./utils/near-wallet";

const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });

window.onload = async () => {
  const isSignedIn = await wallet.startUp();
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          isSignedIn={isSignedIn}
          wallet={wallet}
          contractId={CONTRACT_ADDRESS}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
