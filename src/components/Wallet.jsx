import React from 'react';
import ledger from '../assets/images/ledger.png';
import tokenary from '../assets/images/tokenary.png';
import cryptocom from '../assets/images/cryptocom.png';
import zerion from '../assets/images/zerion.webp';
import infiwallet from '../assets/images/infiwallet.jpeg';
import ambire from '../assets/images/ambire.png';
import onekey from '../assets/images/onekey.png';
import vision from '../assets/images/vision.png';
import rice from '../assets/images/rice.png';

const Wallet = () => {
  const wallets = [
    { label: 'Crypto.com', image: cryptocom },
    { label: 'Zerion', image: zerion },
    { label: 'Ledger', image: ledger },
    { label: 'Tokenary', image: tokenary },
    { label: 'Infinity Wallet', image: infiwallet },
    { label: 'Ambire', image: ambire },
    { label: 'OneKey', image: onekey },
    { label: 'Vision', image: vision },
    { label: 'RICE Wallet', image: rice },
  ];
  return (
    <div className="wallet-page">
      <p>Choose your preferred wallet</p>
      <input type="text" placeholder="Search" />
      <div className="wallets-grid">
        {wallets.map((wallet) => {
          return (
            <div className="wallet-item">
              <img src={wallet.image} alt="wallet.label" />
              <p>{wallet.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wallet;
