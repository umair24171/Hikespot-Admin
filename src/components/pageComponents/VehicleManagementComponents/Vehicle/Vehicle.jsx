import React, { useEffect, useState, useContext } from 'react';
import './Vehicle.css';
import { Link } from 'react-router-dom';
import myContext from '../../../../context/myContext';

const Vehicle = () => {
  const [captains, setCaptains] = useState([]);
  const { fetchCaptains } = useContext(myContext);

  useEffect(() => {
    const getCaptains = async () => {
      const captainsData = await fetchCaptains();
      setCaptains(captainsData);
      console.log(captains);
    };

    getCaptains();
  }, [fetchCaptains]);

  return (
    <div className='CaptainTable'>
      <div className="table-responsive mt-3">
        <table className='table v-align'>
          <tbody>
            {captains.map(captain => (
              <tr key={captain.id} className='mb-5'>
                <td className='text-center col-driver'>
                  <div className="user-cell">
                    <img src={captain.imageUrl || 'default-image-url'} alt="Driver" className="user-img" />
                    <div className="user-info">
                      <p className="user-name">{captain.firstname} {captain.lastname}</p>
                    </div>
                  </div>
                </td>
                <td className='col-from'>{captain.phoneNumber}</td>
                <td className='col-stepover'>{captain.email}</td>
                <td className='col-stepover'>
                  <Link to={`/admin/vehicle-details/${captain.id}`}>
                    <button className='capitalBtn'>See Car Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vehicle;
