import React, { useState, useEffect, useContext } from 'react';
import './UserManagement.css';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import CaptionProfile from './../../components/pageComponents/UserManagementComponents/CaptionProfile/CaptionProfile';
import PassengerProfile from './../../components/pageComponents/UserManagementComponents/PassengerProfile/PassengerProfile';
import myContext from '../../context/myContext';

const UserManagement = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState('captains-profile');

  const { fetchUsers } = useContext(myContext);
  const [captains, setCaptains] = useState([]);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const captainsList = await fetchUsers('captain');
      const passengersList = await fetchUsers('user');
      setCaptains(captainsList);
      setPassengers(passengersList);
    };

    loadUsers();
  }, [fetchUsers]);


  // Function to handle button click
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-auto d-flex gap-3 flex-wrap'>
            <button
              className={`user-btn ${activeButton === 'captains-profile' ? 'active' : ''}`}
              onClick={() => handleButtonClick('captains-profile')}
            >
              Captains Profile
            </button>
            <button
              className={`user-btn ${activeButton === 'passengers-profile' ? 'active' : ''}`}
              onClick={() => handleButtonClick('passengers-profile')}
            >
              Passengers Profile
            </button>
          </div>
          <div className='col-auto mt-2'>
            <Link to="/admin/capital-verification-request">
              <p className='user-para position-relative d-inline-flex align-items-center mb-0'>
                Captain Verification Request
                <IoIosArrowForward className='mx-2' />
              </p>
              <span className='user-badge bg-danger'>4</span>
            </Link>
          </div>
        </div>

        <div className='mt-4'>
          {activeButton === 'captains-profile' && <CaptionProfile users={captains} />}
          {activeButton === 'passengers-profile' && <PassengerProfile users={passengers} />}
        </div>
      </div>
    </>
  );
};

export default UserManagement;
