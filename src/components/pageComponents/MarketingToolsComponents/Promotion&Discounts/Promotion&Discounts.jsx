import React, { useState, useEffect, useContext } from 'react';
import './Promotion&Discounts.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import MyContext from '../../../../context/myContext';  // Ensure correct import path
import { Timestamp } from 'firebase/firestore';

const PromotionDiscounts = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    discount: '',
    startDate: null,
    endDate: null
  });

  const navigate = useNavigate();

  const [isFormFilled, setIsFormFilled] = useState(false);
  const { savePromotion } = useContext(MyContext);  // Use the correct context

  useEffect(() => {
    const { title, description, discount, startDate, endDate } = formData;
    setIsFormFilled(title && description && discount && startDate && endDate);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (dates) => {
    const [startDate, endDate] = dates;
    setFormData(prevState => ({
      ...prevState,
      startDate,
      endDate
    }));
  };

  const sendPromotionNotification = async () => {
    const { title, description, discount, startDate, endDate } = formData;

    if (!startDate || !endDate) {
      toast.error("Please select a valid date range.");
      return;
    }

    const oneSignalAppId = "0661cbc1-2790-483a-8b30-8fcc3daa487e";
    const oneSignalApiKey = "MDE0NDc1YzgtMGFiNy00YjdhLWExMjItMDlmZWU4MTBhOTQ1";

    // Create notification data
    const notificationData = {
      app_id: oneSignalAppId,
      headings: { en: title },
      contents: { en: description },
      included_segments: ['All']
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
      navigate("/admin/promotion-discounts-list")

      // Save promotion in the database
      await savePromotion({
        title,
        description,
        discount,
        startDate: Timestamp.fromDate(startDate),
        endDate: Timestamp.fromDate(endDate),
        timestamp: Timestamp.now(),
      });

    } catch (error) {
      console.error('Error sending notification:', error);
      toast.error("Failed to send notification");
    }
  };

  return (
    <>
      <Link to="/admin/promotion-discounts-list">
        <p style={{ fontSize: "18px", fontWeight: "600", color: "#FFBC07", display: "flex", alignItems: "center", gap: "15px", justifyContent: "right" }}>
          All Promotion Lists
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
              <label htmlFor="description" className="form-label">Promotion Description</label>
              <textarea
                placeholder="Write description here ..."
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="discount" className="form-label">Discount Offer (%)</label>
              <input
                type="number"
                id="discount"
                name="discount"
                min="1"
                max="100"
                placeholder="0%"
                className="form-control"
                value={formData.discount}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">Start Date and End Date</label>
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
            onClick={sendPromotionNotification}
          >
            Send Notification
          </button>
        </div>
      </div>
    </>
  );
};

export default PromotionDiscounts;
