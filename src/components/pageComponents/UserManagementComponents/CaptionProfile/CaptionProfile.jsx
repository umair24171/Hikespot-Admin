import React from 'react';
import './CaptionProfile.css';
import { MdArrowForward } from "react-icons/md";
import { Link } from 'react-router-dom';

const CaptionProfile = ({ users = [] }) => {
  if (users.length === 0) {
    return <h3 className='text-white mt-5 text-center'>No captain found</h3>;
  }
  
  console.log(users)
  return (
    <div className='CaptainTable'>
      <div className="table-responsive mt-3">
        <table className='table v-align'>
          <tbody>
            {users.map(user => (
              <tr key={user.uid} className='mb-5'>
                <td className='text-center col-driver'>
                  <div className="user-cell">
                    <img src={user.imageUrl || 'default-image-url'} alt="Driver" className="user-img" />
                    <div className="user-info">
                      <p className="user-name">{user.firstname} {user.lastname}</p>
                    </div>
                  </div>
                </td>
                <td className='col-from'>{user.phoneNumber}</td>
                <td className='col-stepover'>{user.email}</td>
                <td className='col-stepover'>
                  <Link to={`/admin/details-captain/${user.uid}`} >
                    <button className='capitalBtn'>See Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CaptionProfile;
