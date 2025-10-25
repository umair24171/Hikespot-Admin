import React, { useState } from 'react'
import './CustomerSupport.css'
import UserFeedback from './../../components/pageComponents/CustomerSupportComponents/UserFeedback/UserFeedback';
import TicketManagement from './../../components/pageComponents/CustomerSupportComponents/TicketManagement/TicketManagement';
const CustomerSupport = () => {

  // State to track the active button
  const [activeButton, setActiveButton] = useState('user-feedback');

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
              className={`user-btn ${activeButton === 'user-feedback' ? 'active' : ''}`}
              onClick={() => handleButtonClick('user-feedback')}
            >
              User Feedback
            </button>
            <button
              className={`user-btn ${activeButton === 'ticket-management' ? 'active' : ''}`}
              onClick={() => handleButtonClick('ticket-management')}
            >
              Ticket Management
            </button>
          </div>
        </div>

        <div className='mt-4'>
          {activeButton === 'user-feedback' && <UserFeedback />}
          {activeButton === 'ticket-management' && <TicketManagement />}
        </div>
      </div>

    </>
  )
}

export default CustomerSupport