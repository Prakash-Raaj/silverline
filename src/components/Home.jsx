import React from 'react';
import { BsArrowDownCircleFill } from 'react-icons/bs';

import usdt from '../assets/images/USDT.png';
import sln from '../assets/images/SLN.png';
import meteor from '../assets/images/meteor.png';
import mars from '../assets/images/mars.png';
import rocket from '../assets/images/rocket.png';
import yellowMars from '../assets/images/Yellow_mars.png';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-info">
        <h3 className="info-header">Get In Line For SilverLine</h3>
        <p>
          At the launch of the presale, SilverLine Token <br />
          will be landed on the Binance Smart Chain <br />
          planet. To get to Milkyway, purchase the <br />
          SilverLine Token at just $0.0013.
        </p>
        <button className="btn-join">
          Join our Community{' '}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
        <img
          src={meteor}
          alt="wave of something"
          className="meteor-img"
        />
      </div>
      <div className="home-sale">
        <img
          src={yellowMars}
          alt="yellow planet mars"
          className="yellow-mars-img"
        />
        <h2>PRE-SALE</h2>
        <div className="buy-sln">
          <div className="USDT">
            <input
              type="number"
              name="USDT"
              id="USDT"
              className="USDT-input"
              placeholder="Enter USDT BEP-20"
              min={10}
            />
            <span className="USDT-badge">
              <img src={usdt} alt="usdt logo" />
              <span>USDT</span>
            </span>
          </div>
          <div className="down-arrow">
            <BsArrowDownCircleFill className="down-arrow-icon" />
          </div>
          <div className="SLN">
            <input
              type="number"
              name="SLN"
              id="SLN"
              placeholder="SilverLine Amount"
              className="SLN-input"
            />
            <span className="SLN-badge">
              <img src={sln} alt="sln logo" />
              <span>SLN</span>
            </span>
          </div>
          <div className="min-amount">*min amount=10USDT</div>
          <button className="btn-buy">Buy SLN</button>
        </div>
        <img src={mars} alt="mars" className="mars-img" />
        <img src={rocket} alt="rocket" className="rocket-img" />
      </div>
    </div>
  );
};

export default Home;
