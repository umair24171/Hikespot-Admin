import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { fireDB } from '../../../../Firebase/FirebaseConfig'; // Adjust the path as needed
import './TopCaptains.css';

const TopCaptains = () => {
  const [captains, setCaptains] = useState([]);

  // Fetch captains data from Firestore
  useEffect(() => {
    const fetchCaptains = async () => {
      try {
        const captainsRef = collection(fireDB, 'users');
        const q = query(captainsRef, where('appStatus', '==', 'captain'));
        const querySnapshot = await getDocs(q);
        const fetchedCaptains = querySnapshot.docs.map(doc => doc.data());
        setCaptains(fetchedCaptains);
      } catch (error) {
        console.error("Error fetching captains: ", error);
      }
    };

    fetchCaptains();
  }, []);

  return (
    <div className="all-captains">
      {captains.map((captain, index) => (
        <div className="captains mb-3" key={index}>
          <div className="row align-items-center">
            {/* Left */}
            <div className="col-lg-6 d-flex align-items-center">
              <img src={captain.imageUrl || user1} alt={captain.username || 'User'} className="user-img" />
              <div className="user-info ms-3">
                <p className="user-name">{captain.username || 'Unknown'}</p>
                <p className="user-number">{captain.phoneNumber || 'N/A'}</p>
              </div>
            </div>
            {/* Right */}
            <div className="col-lg-6">
              <div className="d-flex justify-content-between">
                <p className="info">Rides Complete :</p>
                <p className="detail">{captain.totalRides || 0}</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="info">Income :</p>
                <p className="detail">ZAR {captain.income || 0}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCaptains;
