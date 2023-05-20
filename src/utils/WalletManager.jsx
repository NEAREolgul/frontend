import React, { createContext, useContext, useEffect, useState } from 'react';
import '../global';
import { setupWalletSelector } from '@near-wallet-selector/core';
import { setupModal } from '@near-wallet-selector/modal-ui';
import { setupNearWallet } from '@near-wallet-selector/near-wallet';
import '@near-wallet-selector/modal-ui/styles.css';
import { HOST_DOMAIN, deleteCookie, setCookie } from '.';
import UserAPI from '../API/module/UserAPI';

export const CONTRACT_ADDRESS = process.env.VITE_CONTRACT_NAME;

const WalletContext = createContext(null);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('Cannot find WalletContext');
  }
  return context;
};

const WalletManager = ({ children }) => {
  /* Router */
  /* State */
  const [wallet, setWallet] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [selector, setSelector] = useState();
  const [account, setAccount] = useState();
  const [userInfo, setUserInfo] = useState();
  /* Functions */
  /**
   * 지갑 초기화
   * --
   * 지갑을 불러오기 위해서 selector를 초기화하는 함수
   */
  const handleStartup = async () => {
    const _selector = await setupWalletSelector({
      network: 'testnet',
      modules: [setupNearWallet()],
    });

    setSelector(_selector);
  };

  /**
   * 지갑 불러오기
   * --
   * 지갑을 불러오는 메서드, 실행시, 모달이 생성됨
   */
  const handleWalletSelect = async () => {
    const modal = setupModal(selector, {
      contractId: 'ongdv.testnet',
    });

    modal.show();
  };

  /**
   * 계정 정보 불러오기
   * --
   * 계정정보를 불러옴
   * @returns
   */
  const handleGetAccount = async () => {
    if (!selector) {
      return;
    }

    const _wallet = await selector.wallet();
    const [accounts] = await _wallet.getAccounts();
    setIsSignedIn(selector.isSignedIn());
    setWallet(_wallet);
    setAccount(accounts);

    const sess = await UserAPI.getUserByAddr(accounts.accountId);

    const ss = JSON.stringify(sess);
    setCookie('NEARFace', ss);
    setUserInfo(sess);
  };

  const handleSignInWallet = async () => {
    const wallet = await selector.wallet('near-wallet');
    const accounts = await wallet.signIn({ contractId: 'ongdv.testnet' });
  };

  /**
   * 로그아웃
   * --
   * 계정정보를 삭제함
   * @returns
   */
  const handleSignOut = async () => {
    if (!selector) {
      return;
    }
    const wallet = await selector.wallet();
    await wallet.signOut();
    await handleStartup();
    setIsSignedIn(false);
    setAccount();
    deleteCookie('NEARFace', { path: '/', domain: HOST_DOMAIN });
  };
  /* Hooks */
  useEffect(() => {
    handleStartup();
  }, []);

  useEffect(() => {
    handleGetAccount();
  }, [selector]);

  /* Render */
  return (
    <WalletContext.Provider
      value={{
        wallet: wallet,
        isSignedIn,
        account,
        userInfo,
        startup: handleStartup,
        walletSelect: handleWalletSelect,
        signinWallet: handleSignInWallet,
        signOut: handleSignOut,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletManager;
