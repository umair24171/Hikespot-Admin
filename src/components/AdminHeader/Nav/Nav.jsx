import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate(); // Create a history object

  const handleNotificationClick = () => {
    navigate('/admin/notifications'); // Redirect to the notifications page
  };

  return (
    <nav className='header-nav ms-auto'>
      <ul className="d-flex align-items-center">
        <li className="nav-item">
          <div className="nav-link nav-icon" onClick={handleNotificationClick}>
            <i className="bi bi-bell"></i>
            <span className='badge bg-danger badge-number'>4</span> {/* Update with dynamic count if needed */}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
