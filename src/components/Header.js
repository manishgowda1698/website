import React from 'react';

import Logo from '../assets/logos.png';

const Header = () => {
  return(
    <header className='py-2'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='' style={{ height: '150px' }}/>
          </a>
          <button className='btn btn-sm'>work with me</button>
        </div>
      </div>
    </header>
  ) 
};

export default Header;
