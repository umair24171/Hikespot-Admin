import React, { useEffect, useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const oneSignalAppId = "0661cbc1-2790-483a-8b30-8fcc3daa487e";
  const oneSignalApiKey = "MDE0NDc1YzgtMGFiNy00YjdhLWExMjItMDlmZWU4MTBhOTQ1";

  useEffect(() => {
    const fetchNotifications = async () => {
      // Fetch notifications from your server or API
      // Update this to match your backend setup
      // Example: const response = await fetch('/api/notifications');
      // const data = await response.json();
      const data = []; // Replace with actual fetch call
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <p>{notification.message}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Notification;
