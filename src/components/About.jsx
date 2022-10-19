import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import vector from '../assets/images/Vector.png';

const About = () => {
  return (
    <div className="about-page">
      <img src={vector} alt="vector" className="vector-img" />
      <h2 className="about-header">About Silverline</h2>
      <div className="about-grid">
        <div className="about-card">
          <p>
            SilverlineSwap is a decentralized exchange that <br />
            provides the smoothest peer-to-peer trading <br />
            experience and users can trade any token on the <br />
            Binance Smart Chain network using SilverLineSwap. <br />
            We have the distinctive feature that nobody else <br />
            has the GUN to protect your crypto identity & Nobu <br />
            an AI personal assistant, who will walk you through <br />
            your cryptocurrency adventure. and SPARC is the <br />
            first prediction platform in the world where players
            <br /> who didn't win are rewarded. We are known for the
            <br /> best use cases and seek to solve Sustainable <br />
            Development Goals
          </p>
        </div>
        <YoutubeEmbed embedId={'gD0r5kAW1kk'} />
      </div>
    </div>
  );
};

export default About;
