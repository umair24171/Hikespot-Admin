import React from 'react'
import './Logo.css';
import logo from '../../../assets/logo.png'

const Logo = () => {
  const handleToggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  }
  return (
    <>
      <div className='d-flex align-items-center justify-content-between'>
        <a href="/" className='logo d-flex align-items-center'>
          <img src={logo} alt="" />
        </a>
        <i className="bi bi-list text-white toggle-sidebar-btn" onClick={handleToggleSidebar}></i>
      </div>
    </>
  )
}

export default Logo