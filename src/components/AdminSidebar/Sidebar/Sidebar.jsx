import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

import icon1 from '../../../assets/1.png';
import icon2 from '../../../assets/Group 33825.png';
import icon3 from '../../../assets/Group 1597882917.png';
import icon4 from '../../../assets/Group 1597882918.png';
import icon5 from '../../../assets/Door Ajar.png';
import icon6 from '../../../assets/3.png';
import icon7 from '../../../assets/Group 1597882921.png';
import icon8 from '../../../assets/Vector.png';
import icon9 from '../../../assets/Door Ajar.png';
import icon10 from '../../../assets/2.png';
import myContext from '../../../context/myContext';
import { toast } from 'react-toastify';

const Sidebar = () => {

    const { logout } = useContext(myContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const success = await logout();
        if (success) {
            toast.success("Admin logout successfully")
            navigate('/login');
        } else {
            console.log('Failed to log out');
        }
    };

    return (
        <aside id='sidebar' className='sidebar'>
            <ul id="sidebar-nav" className="sidebar-nav">
                <li className="nav-item">
                    <Link to="/admin/dashboard" className="nav-link">
                        <img src={icon1} alt="" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/user-management" className="nav-link">
                        <img src={icon2} alt="" />
                        <span>User Management</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/trip-data" className="nav-link">
                        <img src={icon3} alt="" />
                        <span>Trip Data</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/financial-information" className="nav-link">
                        <img src={icon4} alt="" />
                        <span>Financial Information</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/vehicle-management" className="nav-link">
                        <img src={icon5} alt="" />
                        <span>Vehicle Management</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/safety-compliance" className="nav-link">
                        <img src={icon6} alt="" />
                        <span>Safety and Compliance</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/pricing-controls" className="nav-link">
                        <img src={icon7} alt="" />
                        <span>Pricing Controls</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/customer-support" className="nav-link">
                        <img src={icon8} alt="" />
                        <span>Customer Support</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/marketing-tools" className="nav-link">
                        <img src={icon9} alt="" />
                        <span>Marketing Tools</span>
                    </Link>
                </li>
            </ul>
            <ul id="sidebar-nav" className="sidebar-nav">
                <li className="nav-item-end">
                    <Link onClick={handleLogout} className="nav-link-end">
                        <img src={icon10} alt="" />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
