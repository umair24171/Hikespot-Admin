import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ListUserNotification.css';
import { IoIosArrowForward } from 'react-icons/io';
import myContext from '../../../../context/myContext';
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../../../../Firebase/FirebaseConfig';
import { format } from 'date-fns';
import { Timestamp } from 'firebase/firestore';

const ListUserNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [userDetailsMap, setUserDetailsMap] = useState(new Map());
  const [loading, setLoading] = useState(true);
  const { fetchNotifications, deleteNotification } = useContext(myContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNotifications = async () => {
      const notificationsData = await fetchNotifications();
      setNotifications(notificationsData);

      const userIds = new Set(
        notificationsData.flatMap(notification => notification.users)
      );

      try {
        const userDocs = await Promise.all(
          Array.from(userIds).map(userId =>
            getDoc(doc(fireDB, 'users', userId))
          )
        );

        const userDetails = userDocs.reduce((acc, doc) => {
          acc[doc.id] = doc.data();
          return acc;
        }, {});

        setUserDetailsMap(new Map(Object.entries(userDetails)));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };

    loadNotifications();
  }, [fetchNotifications]);

  const formatDate = (timestamp) => {
    if (timestamp && timestamp.seconds) {
      // For Firestore Timestamp objects
      return format(new Date(timestamp.seconds * 1000), 'yyyy-MM-dd');
    } else if (typeof timestamp === 'string') {
      // For ISO date strings
      return format(new Date(timestamp), 'yyyy-MM-dd');
    } else if (timestamp instanceof Date) {
      // For Date objects
      return format(timestamp, 'yyyy-MM-dd');
    }
    return '-'; // Return a dash if the date is not valid
  };


  const handleEdit = (notification) => {
    let startDate = notification.startDate;
    let endDate = notification.endDate;

    // Check if startDate and endDate are Firestore Timestamp objects and convert them
    if (startDate instanceof Timestamp) {
      startDate = startDate.toDate();
    } else {
      startDate = new Date(startDate);
    }

    if (endDate instanceof Timestamp) {
      endDate = endDate.toDate();
    } else {
      endDate = new Date(endDate);
    }

    // Verify the date objects are valid
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.error('Invalid date value', { startDate, endDate });
      return; // Don't proceed if the dates are invalid
    }

    navigate('/admin/user-notification-edit', {
      state: {
        notification: {
          ...notification,
          startDate: startDate.toISOString().slice(0, 10),
          endDate: endDate.toISOString().slice(0, 10)
        }
      }
    });
  };



  const handleDelete = async (id) => {
    const success = await deleteNotification(id);
    if (success) {
      setNotifications(await fetchNotifications());
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Link to="/admin/user-notification">
        <p style={{ fontSize: "18px", fontWeight: "600", color: "#FFBC07", display: "flex", alignItems: "center", gap: "15px", justifyContent: "right" }}>
          Add New Notification
          <IoIosArrowForward />
        </p>
      </Link>

      <p style={{ fontSize: "18px", fontWeight: "800", color: "#FFBC07" }}>No of Results: {notifications.length}</p>

      <div className="list-promotion-discount">
        <div className="row">
          {notifications.map(notification => (
            <div className="col-lg-6" key={notification.id}>
              <div className="list-promotion-mainBox">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={notification.title}
                      readOnly
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="description" className="form-label">Promotion Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      value={notification.description}
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="users" className="form-label">Users</label>
                    <input
                      type="text"
                      id="users"
                      name="users"
                      className="form-control"
                      value={notification.users.map(userId => {
                        const user = userDetailsMap.get(userId);
                        return user ? `${user.email}` : 'Unknown';
                      }).join(', ')}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">Start Date and End Date</label>
                    <br />
                    <p className="form-control">
                      {formatDate(notification.startDate)} - {formatDate(notification.endDate)}
                    </p>
                  </div>
                </form>

                <div className='d-flex align-items-center justify-content-between'>
                  <button className="list-form-btn1" onClick={() => handleEdit(notification)}>Edit Notification</button>
                  <button className="list-form-btn2" onClick={() => handleDelete(notification.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListUserNotification;
