import React from 'react';

import './home-page.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Hats</h1>
          <span className='subtitle'>Shop</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Jackets</h1>
          <span className='subtitle'>Shop</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Women</h1>
          <span className='subtitle'>Shop</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Men</h1>
          <span className='subtitle'>Shop</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Shoes</h1>
          <span className='subtitle'>Shop</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
