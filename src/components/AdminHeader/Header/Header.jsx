import React from 'react'
import './Header.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <>
      <header id='header' className='header d-flex align-items-center'>
        {/* logo */}
        <Logo/>
        {/* search */}
        <Search/>
        {/* nav */}
        <Nav/>
      </header>


    </>
  )
}

export default Header