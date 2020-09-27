import React from 'react';

import Logo from '../../assets/logo.svg';

import './styles.css';

export default ({black}) => {
  return (

    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="http://">
        <img src={ Logo } alt="movies-js"/>
        </a>
      </div>

      <div className="header--user">
        <a href="http://">
        <img src="https://avatars2.githubusercontent.com/u/62979297?s=460&u=9b5e6fb6cf022d78e38e18eb6bad997f5d6a3503&v=4" alt="user"/>
        </a>
      </div>
    </header>
  );
}
