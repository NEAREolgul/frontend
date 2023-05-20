import Blog from '../../../Components/Blog';
import Carousel from '../../../Components/Carousel';
import Creatives from '../../../Components/Creatives';
import Inspiration from '../../../Components/Inspiration';
import * as nearAPI from 'near-api-js';
import { useWallet } from '../../../utils/WalletManager';
import { useState, useEffect } from 'react';
import '../../../assets/css/Nftdetail.css';

const MainPresenter = () => {
  /* Router */
  /* State */
  const { account } = useWallet();
  const [tokenImg, setTokenImg] = useState(null);
  const { keyStores, connect, Contract } = nearAPI;

  /* Hooks */
  useEffect(() => {
    async function setupContract() {
      const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();

      const connectionConfig = {
        networkId: 'testnet',
        keyStore: myKeyStore, // first create a key store
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
      };
      const nearConnection = await connect(connectionConfig);

      const act = await nearConnection.account(account);
      const contract = new Contract(
        act, // the account object that is connecting
        'ismarket.testnet',
        {
          // name of contract you're connecting to
          viewMethods: ['nft_tokens'], // view methods do not change state but usually return a value
        }
      );
      const tokens = await contract.nft_tokens({ from_index: 0, limit: 10 });
      // `contract` object has `my_smart_contract_function` function on it:
      setTokenImg(tokens);
    }

    setupContract();
  }, []);
  /* Functions */
  /* Render */
  return (
    <div className="mt80">
      <Inspiration List={false} tokenImg={tokenImg} />;
      <Carousel title="Trending Collections" />
      <Blog />
      <Creatives />
    </div>
  );
};

export default MainPresenter;
