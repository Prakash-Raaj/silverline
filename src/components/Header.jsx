import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const items = [
    'Home',
    'About',
    'Features',
    'Whitepaper',
    'Audit Report',
    'Tokenomics',
    'Team',
    'FAQ',
    'Blog',
  ];
  return (
    <div className="header">
      <img src={logo} alt="silverline logo" className="logo-img" />
      <div className="navBar">
        {items.map((item) => {
          if (
            item === 'Whitepaper' ||
            item === 'Blog' ||
            item === 'Audit Report'
          ) {
            return (
              <ul className="list-navBar">
                <li className="list-item-special">
                  <a href="#">{item}</a>
                </li>
              </ul>
            );
          } else {
            return (
              <ul className="list-navBar">
                <li className="list-item">
                  <a href="#">{item}</a>
                </li>
              </ul>
            );
          }
        })}
      </div>
      <Link to="/connect">
        <button className="btn-connect">Connect</button>
      </Link>
    </div>
  );
};

export default Header;
