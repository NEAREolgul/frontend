import React, { useEffect, useState } from "react";
import * as nearAPI from "near-api-js";

const MintPresenter = () => {
  const [tokenImg, setTokenImg] = useState(null);

  const { keyStores, connect, Contract } = nearAPI;

  useEffect(() => {
    async function setupContract() {
      const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();
      console.log(myKeyStore);

      const connectionConfig = {
        networkId: "testnet",
        keyStore: myKeyStore, // first create a key store
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };
      const nearConnection = await connect(connectionConfig);
      console.log(nearConnection);

      const account = await nearConnection.account("simonee.testnet");
      const contract = new Contract(
        account, // the account object that is connecting
        "hano.testnet",
        {
          // name of contract you're connecting to
          viewMethods: ["nft_token"], // view methods do not change state but usually return a value
        }
      );
      const test = await contract.nft_token({ token_id: "token-1" });
      // `contract` object has `my_smart_contract_function` function on it:
      setTokenImg(test.metadata);
    }

    setupContract();
  }, []);
  console.log(tokenImg);

  return (
    <main className="grow bg-gray-50">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {tokenImg ? <img src={tokenImg.media} alt="z" /> : ""}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MintPresenter;
