import React, { useEffect, useState } from 'react';
import './TripData.css';
import icon1 from '../../assets/card icon2.png';
import { BiFilterAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BookingTable from '../../components/pageComponents/Dashboard/BookingTable/BookingTable';

const TripData = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [rideFilter, setRideFilter] = useState(null);
  const [rides, setRides] = useState([]);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handleRideFilter = (filter) => {
    setRideFilter(filter);
  };

  const resetFilters = () => {
    setSelectedRating(null);
    setSelectedDate(null);
    setRideFilter(null);
  };


  useEffect(() => {
    const fetchRides = async () => {
      try {
        const ridesCollection = collection(fireDB, 'rides');
        const q = query(ridesCollection, where('rideStatus', '==', 'Scheduled'));
        const snapshot = await getDocs(q);
        const rideData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRides(rideData);
        console.log(rides)
      } catch (error) {
        console.error("Error fetching rides: ", error);
      }
    };

    fetchRides();
  }, []);

  const sendNotification = async (userId, message) => {
    try {
      const response = await axios.post(`https://onesignal.com/api/v1/notifications`, {
        app_id: '0661cbc1-2790-483a-8b30-8fcc3daa487e',
        include_external_user_ids: [userId],
        contents: { en: message },
      }, {
        headers: {
          Authorization: `Basic MDE0NDc1YzgtMGFiNy00YjdhLWExMjItMDlmZWU4MTBhOTQ1`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Notification sent:', response.data);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const handleSendNotifications = () => {
    rides.forEach(ride => {
      const message = `Your ride from ${ride.pickupAddress} to ${ride.destinationAddress} is scheduled.`;
      sendNotification(ride.userId, message);
    });
  };

  return (
    <>
      <div className="tripData">
        <div className="trip-mainBox text-white">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="trip-card trip-info-card text-center">
                <div className="trip-card-body">
                  <img className='trip-card-icons' src={icon1} alt="" />
                  <p className="trip-card-title mt-4">Today Rides</p>
                  <h5 className="trip-card-price mt-2">1,200</h5>
                  <h5 className="trip-card-sub-title mt-2">Rides Active</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <button className='trip-btn' onClick={() => setShowDatePicker(!showDatePicker)}>
                <BiFilterAlt size={20} className='trip-btn-icon1' />
                Date Filter
                {selectedDate ? selectedDate.toLocaleDateString() : 'Select a date'}
                <IoIosArrowDown size={15} className='trip-btn-icon2' />
              </button>
              {showDatePicker && (
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateSelect}
                  inline
                />
              )}
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <div className='dropdown'>
                <button className='trip-btn btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  Rating Filter
                  <IoIosArrowDown size={15} className='trip-btn-icon2' />
                </button>
                <ul className='dropdown-menu trip-menu mt-2'>
                  {['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'].map((rating, index) => (
                    <li key={index} onClick={() => handleRatingSelect(rating)}>
                      <a className={`dropdown-item trip-menu-item ${selectedRating === rating ? 'selected' : ''}`} href='#'>
                        {rating}
                        <span className='circle'></span>
                      </a>
                      {index < 4 && <hr className='trip-menu-line' />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <div className='dropdown'>
                <button className='trip-btn btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  Ride Filter
                  <IoIosArrowDown size={15} className='trip-btn-icon2' />
                </button>
                <ul className='dropdown-menu trip-menu mt-2'>
                  {['None of them', 'Accepted', 'Pending', 'Completed', 'Scheduled', 'Cancelled'].map((ride, index) => (
                    <li key={index} onClick={() => handleRideFilter(ride)}>
                      <a className={`dropdown-item trip-menu-item ${rideFilter === ride ? 'selected' : ''}`} href='#'>
                        {ride}
                        <span className='circle'></span>
                      </a>
                      {index < 3 && <hr className='trip-menu-line' />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
              <button className='trip-btn btn btn-secondary' onClick={resetFilters}>
                Reset Filter
              </button>
            </div>
          </div>
        </div>

        {/* table */}
        <BookingTable
          ratingFilter={selectedRating}
          dateFilter={selectedDate}
          rideFilter={rideFilter}
          sendNotification={sendNotification}
        />
      </div>
    </>
  );
};

export default TripData;
