import React ,{useState}from 'react'
import './PricingControls.css'
import FareAdjustment from './../../components/pageComponents/PricingControlComponents/FareAdjustment/FareAdjustment';
import SurgePriceManagement from './../../components/pageComponents/PricingControlComponents/SurgePriceManagement/SurgePriceManagement';
const PricingControls = () => {

  // State to track the active button
  const [activeButton, setActiveButton] = useState('fare-adjustment');

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
              className={`user-btn ${activeButton === 'fare-adjustment' ? 'active' : ''}`}
              onClick={() => handleButtonClick('fare-adjustment')}
            >
              Fare Adjustment
            </button>
            <button
              className={`user-btn ${activeButton === 'surge-price-management' ? 'active' : ''}`}
              onClick={() => handleButtonClick('surge-price-management')}
            >
              Surge Price Management
            </button>
          </div>
        </div>

        <div className='mt-4'>
          {activeButton === 'fare-adjustment' && <FareAdjustment />}
          {activeButton === 'surge-price-management' && <SurgePriceManagement />}
        </div>
      </div>

    </>
  )
}

export default PricingControls