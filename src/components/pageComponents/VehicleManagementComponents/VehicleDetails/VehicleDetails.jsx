import React, { useContext, useEffect, useState } from 'react';
import './VehicleDetails.css';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { FaArrowLeft } from 'react-icons/fa6';
import myContext from '../../../../context/myContext';
import { useParams } from 'react-router-dom';

const VehicleDetails = () => {
    const { id } = useParams();
    const { fetchCaptainById } = useContext(myContext);
    const [captain, setCaptain] = useState(null);

    useEffect(() => {
        const getCaptainDetails = async () => {
            const captainData = await fetchCaptainById(id);
            setCaptain(captainData);
            console.log(captain)
        };

        getCaptainDetails();
    }, [id, fetchCaptainById]);

    if (!captain) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='captain-details'>
                <div className='d-flex align-items-center gap-5'>
                    <FaArrowLeft className='icon-captain' />
                    <h1 className='captain-heading'>Car Details and Inspection</h1>
                </div>

                <div className='mt-3 row text-white'>
                    <div className="col-lg-4">
                        <div className="box1">
                            <img className='box1-img' src={captain.imageUrl} alt="" />
                            <h3 className='box1-heading'>{captain.firstname} {captain.lastname} <VscVerifiedFilled /></h3>
                            <p className='box1-para'>{captain.phoneNumber}</p>
                            <h4 className='box1-sub-heading'>{captain.email}</h4>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <h4 className='car-main-heading'>Car Details</h4>
                        <h6 className='car-label'>Car Model Name</h6>
                        <h2 className='car-data'>{captain.driverModel.carModel}</h2>
                        {/* <h2 className='car-data'>Jaguar F-PACE Car Sport F Type</h2> */}
                        <h6 className='car-label'>Car Number Plate</h6>
                        <h2 className='car-data'>{captain.driverModel.carNumberPlate}</h2>
                    </div>
                </div>

                <h3 className='car-second-heading'>Inspection</h3>
                <div className="inspection">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="vehicle-registration">
                                <h3 className="vehicle-heading">Vehicle Registration</h3>
                                <div className='d-flex align-items-center justify-content-center gap-2'>
                                    <img className='vehicle-registration-img' src={captain.driverModel.carRegistrationFront} alt="" />
                                    <img className='vehicle-registration-img' src={captain.driverModel.carRegistrationBack} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="vehicle-registration">
                                <h3 className="vehicle-heading">Driving License</h3>
                                <img className='driving-license-img' src={captain.driverModel.drivingLicence} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VehicleDetails;
