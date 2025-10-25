import React, { useState } from 'react'
import './SafetyCompliance.css'
import Vehicle from './../../components/pageComponents/VehicleManagementComponents/Vehicle/Vehicle';
import FleetOverView from './../../components/pageComponents/VehicleManagementComponents/FleetOverView/FleetOverView';
import Safety from './../../components/pageComponents/SafetyComplianceComponents/Safety/Safety';
import Compliance from '../../components/pageComponents/SafetyComplianceComponents/Compliance/Compliance';


const SafetyCompliance = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState('safety');

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
              className={`user-btn ${activeButton === 'safety' ? 'active' : ''}`}
              onClick={() => handleButtonClick('safety')}
            >
              Safety
            </button>
            <button
              className={`user-btn ${activeButton === 'compliance' ? 'active' : ''}`}
              onClick={() => handleButtonClick('compliance')}
            >
              Compliance
            </button>
          </div>
        </div>

        <div className='mt-4'>
          {activeButton === 'safety' && <Safety />}
          {activeButton === 'compliance' && <Compliance />}
        </div>
      </div>


    </>
  )
}

export default SafetyCompliance