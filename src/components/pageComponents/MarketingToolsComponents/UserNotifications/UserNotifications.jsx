import React, { useState, useEffect, useContext } from 'react';
import './UserNotifications.css';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import myContext from '../../../../context/myContext';
import { Timestamp } from 'firebase/firestore';

const UserNotifications = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { fetchUsers, saveNotification } = useContext(myContext);

  const handleUserSelect = (userType) => {
    setSelectedUser(userType);
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: null,
    endDate: null,
  });

  // New state for channel selection
  const [selectedChannel, setSelectedChannel] = useState(null);

  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    const { title, description, startDate, endDate } = formData;
    setIsFormFilled(title && description && startDate && endDate && selectedUser && selectedChannel);
  }, [formData, selectedUser, selectedChannel]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (dates) => {
    const [startDate, endDate] = dates;
    setFormData(prevState => ({
      ...prevState,
      startDate: startDate || null,
      endDate: endDate || null,
    }));
  };

  const sendNotification = async () => {
    const { title, description, startDate, endDate } = formData;
    if (!startDate || !endDate) {
      toast.error("Please select a valid date range.");
      return;
    }
    const oneSignalAppId = "0661cbc1-2790-483a-8b30-8fcc3daa487e";
    const oneSignalApiKey = "MDE0NDc1YzgtMGFiNy00YjdhLWExMjItMDlmZWU4MTBhOTQ1";

    const users = await fetchUsersBasedOnType(selectedUser);

    if (!users.length) {
      toast.error(`No ${selectedUser.toLowerCase()}s found.`);
      return;
    }

    const userIds = users.map(user => user.id);

    // Include channel_for_external_user_ids in the notification data
    const notificationData = {
      app_id: oneSignalAppId,
      headings: { en: title },
      contents: { en: description },
      include_external_user_ids: userIds,
      channel_for_external_user_ids: selectedChannel,
    };

    try {
      const response = await axios.post('https://onesignal.com/api/v1/notifications', notificationData, {
        headers: {
          Authorization: `Basic ${oneSignalApiKey}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Notification sent successfully:', response.data);
      toast.success("Notification sent successfully");

      await saveNotification({
        title,
        description,
        startDate: Timestamp.fromDate(startDate),
        endDate: Timestamp.fromDate(endDate),
        userType: selectedUser,
        users: userIds,
        timestamp: Timestamp.now(),
        channel: selectedChannel, // Save the selected channel as well
      });

    } catch (error) {
      console.error('Error sending notification:', error);
      toast.error("Failed to send notification");
    }
  };

  const fetchUsersBasedOnType = async (userType) => {
    const role = userType === 'Captains' ? 'captain' : 'user';
    return await fetchUsers(role);
  };

  return (
    <>
      <Link to="/admin/user-notification-list">
        <p style={{ fontSize: "18px", fontWeight: "600", color: "#FFBC07", display: "flex", alignItems: "center", gap: "15px", justifyContent: "right" }}>
          All Notification Lists
          <IoIosArrowForward />
        </p>
      </Link>

      <div className="mainBox">
        <div className="promotion-mainBox">
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                placeholder="Add Title"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description" className="form-label">Notification Description</label>
              <textarea
                placeholder="Write notification description here ..."
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description" className="form-label">Select Users</label>
              <div className='dropdown'>
                <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  {selectedUser || 'Select User Type'}
                </button>
                <ul className='dropdown-menu trip-menu mt-2'>
                  {['Captains', 'Passengers'].map((user, index) => (
                    <li key={index} onClick={() => handleUserSelect(user)}>
                      <a className={`dropdown-item trip-menu-item ${selectedUser === user ? 'selected' : ''}`}>
                        {user}
                        <span className='circle'></span>
                      </a>
                      {index < 1 && <hr className='trip-menu-line' />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dropdown for selecting channel */}
            <div className="form-group mb-3">
              <label htmlFor="channel" className="form-label">Select Notification Channel</label>
              <div className='dropdown'>
                <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  {selectedChannel || 'Select Channel'}
                </button>
                <ul className='dropdown-menu trip-menu mt-2'>
                  {['messages', 'rides', 'chats', 'promotions', 'payment'].map((channel, index) => (
                    <li key={index} onClick={() => setSelectedChannel(channel)}>
                      <a className={`dropdown-item trip-menu-item ${selectedChannel === channel ? 'selected' : ''}`}>
                        {channel.charAt(0).toUpperCase() + channel.slice(1)}
                        <span className='circle'></span>
                      </a>
                      {index < 4 && <hr className='trip-menu-line' />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date Schedule</label>
              <br />
              <DatePicker
                selected={formData.startDate}
                onChange={handleDateChange}
                startDate={formData.startDate}
                endDate={formData.endDate}
                selectsRange
                isClearable
                placeholderText="Select a date range"
                className="form-control"
              />
            </div>
          </form>

          <button
            className={`form-btn ${isFormFilled ? 'btn-filled' : ''}`}
            disabled={!isFormFilled}
            onClick={sendNotification}
          >
            Send Notification
          </button>
        </div>
      </div>
    </>
  );
};

export default UserNotifications;
