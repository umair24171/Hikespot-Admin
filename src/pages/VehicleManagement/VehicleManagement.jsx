import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import CaptionProfile from './../../components/pageComponents/UserManagementComponents/CaptionProfile/CaptionProfile';
import PassengerProfile from './../../components/pageComponents/UserManagementComponents/PassengerProfile/PassengerProfile';
import './VehicleManagement.css'
import Vehicle from './../../components/pageComponents/VehicleManagementComponents/Vehicle/Vehicle';
import FleetOverView from './../../components/pageComponents/VehicleManagementComponents/FleetOverView/FleetOverView';
const VehicleManagement = () => {

  // State to track the active button
  const [activeButton, setActiveButton] = useState('vehicle');

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
              className={`user-btn ${activeButton === 'vehicle' ? 'active' : ''}`}
              onClick={() => handleButtonClick('vehicle')}
            >
              Vehicle Details
            </button>
            <button
              className={`user-btn ${activeButton === 'fleet-overview' ? 'active' : ''}`}
              onClick={() => handleButtonClick('fleet-overview')}
            >
              Fleet Overview
            </button>
          </div>
        </div>

        <div className='mt-4'>
          {activeButton === 'vehicle' && <Vehicle />}
          {activeButton === 'fleet-overview' && <FleetOverView />}
        </div>
      </div>

    </>
  )
}

export default VehicleManagement