import React,{useState} from 'react'
import './MarketingTools.css'
import PromotionDiscounts from '../../components/pageComponents/MarketingToolsComponents/Promotion&Discounts/Promotion&Discounts';
import UserNotifications from './../../components/pageComponents/MarketingToolsComponents/UserNotifications/UserNotifications';

const MarketingTools = () => {

  // State to track the active button
  const [activeButton, setActiveButton] = useState('promotion-discounts');

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
              className={`user-btn ${activeButton === 'promotion-discounts' ? 'active' : ''}`}
              onClick={() => handleButtonClick('promotion-discounts')}
            >
              Promotion and Discounts
            </button>
            <button
              className={`user-btn ${activeButton === 'user-notification' ? 'active' : ''}`}
              onClick={() => handleButtonClick('user-notification')}
            >
              User Notification
            </button>
          </div>
        </div>

        <div className='mt-4'>
          {activeButton === 'promotion-discounts' && <PromotionDiscounts />}
          {activeButton === 'user-notification' && <UserNotifications />}
        </div>
      </div>

    </>
  )
}

export default MarketingTools