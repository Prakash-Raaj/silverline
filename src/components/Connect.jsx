import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import qr from '../assets/images/qrcode.png';
import Wallet from './Wallet';

const Connect = () => {
  const [selected, setSelected] = useState('QR Code');
  const [qrbtn, setQrBtn] = useState('');
  const [walletBtn, setWalletBtn] = useState('');
  const isLaptop = useMediaQuery({
    query: '(min-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  return (
    <div className="connect-wrapper">
      <div className="connect">
        <div className="btn-select">
          <div
            className={`btn-connectpage ${qrbtn}`}
            onClick={() => {
              setSelected('QR Code');
              setQrBtn('qrbtn');
              setWalletBtn('');
            }}
          >
            QR Code
          </div>
          <div
            className={`btn-connectpage ${walletBtn}`}
            onClick={() => {
              setSelected('Wallet');
              setWalletBtn('walletBtn');
              setQrBtn('');
            }}
          >
            {isLaptop ? 'Desktop' : 'Mobile'}
          </div>
        </div>
        {selected === 'QR Code' ? (
          <div className="qr-connect">
            <p>Scan QR code with a WalletConnect-compatible wallet</p>
            <img src={qr} alt="qr code" className="qr-img" />
            <p style={{ cursor: 'pointer' }}>Copy to clipboard</p>
          </div>
        ) : (
          <div className="wallet-connect">
            {isLaptop ? (
              <Wallet />
            ) : (
              <div className="wallet-mobile">
                <p>Connect to mobile Wallet</p>
                <button>Connect</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Connect;
