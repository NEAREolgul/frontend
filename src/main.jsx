import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './global';
import WalletManager from './utils/WalletManager';
import LoadingManager from './utils/LoadingManager';
import Loading from './components/Loading';

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingManager>
        <WalletManager>
          <Loading />
          <App />
        </WalletManager>
      </LoadingManager>
    </BrowserRouter>
  </React.StrictMode>
);
