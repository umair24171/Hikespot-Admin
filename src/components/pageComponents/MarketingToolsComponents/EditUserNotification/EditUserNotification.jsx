import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import myContext from '../../../../context/myContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EditUserNotification.css'; // Ensure you have a CSS file for custom styles

const EditUserNotification = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { editNotification } = useContext(myContext);
    const { notification } = location.state || {};

    const getDate = (timestamp) => {
        if (timestamp && timestamp.seconds) {
            const date = new Date(timestamp.seconds * 1000);
            return date;
        }
        return null;
    };

    const [title, setTitle] = useState(notification?.title || '');
    const [description, setDescription] = useState(notification?.description || '');
    const [startDate, setStartDate] = useState(getDate(notification?.startDate));
    const [endDate, setEndDate] = useState(getDate(notification?.endDate));

    useEffect(() => {
        if (notification) {
            setStartDate(getDate(notification.startDate));
            setEndDate(getDate(notification.endDate));
        }
    }, [notification]);

    const handleSave = async () => {
        const updatedNotificationData = {
            title,
            description,
            startDate: startDate ? startDate.toISOString() : notification.startDate, // Use the original startDate if not changed
            endDate: endDate ? endDate.toISOString() : notification.endDate, // Use the original endDate if not changed
        };

        const success = await editNotification(notification.id, updatedNotificationData);
        if (success) {
            navigate('/admin/user-notification-list');
        }
    };


    return (
        <div className="edit-notification-container">
            <div className="form-wrapper">
                <h2>Edit Notification</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date Schedule</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(dates) => {
                                const [start, end] = dates;
                                setStartDate(start || startDate); // If date not selected, retain previous date
                                setEndDate(end || endDate); // If date not selected, retain previous date
                            }}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            isClearable
                            className="form-control"
                            placeholderText="Select a date range"
                        />
                    </div>

                    <button type="button" onClick={handleSave} className="btn btn-primary">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditUserNotification;
