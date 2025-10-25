import React, { useContext, useEffect, useState } from 'react';
import icon1 from '../../../../assets/card icon.png';
import icon2 from '../../../../assets/card icon2.png';
import icon3 from '../../../../assets/card icon3.png';
import arrow from '../../../../assets/arrow.png';
import './Cards.css';
import myContext from './../../../../context/myContext';

const Cards = () => {

    const [captainCount, setCaptainCount] = useState("")
    const [acceptedRidesCount, setAcceptedRidesCount] = useState(0);
    const [cancelledRidesCount, setCancelledRidesCount] = useState(0);

    const { fetchCaptainsCount, fetchRidesCountByStatus } = useContext(myContext);

    useEffect(() => {
        const getCaptainsCount = async () => {
            const count = await fetchCaptainsCount();
            console.log("Total Captains Count:", count);
            setCaptainCount(count);
        };

        const getAcceptedRidesCount = async () => {
            const count = await fetchRidesCountByStatus('accepted');
            console.log("Accepted Rides Count:", count);
            setAcceptedRidesCount(count);
        };

        const getCancelledRidesCount = async () => {
            const count = await fetchRidesCountByStatus('cancelled');
            console.log("Cancelled Rides Count:", count);
            setCancelledRidesCount(count);
        };

        getCaptainsCount();
        getAcceptedRidesCount();
        getCancelledRidesCount();
    }, [fetchCaptainsCount, fetchRidesCountByStatus]);


    return (
        <div className="row dashboard">
            <div className="col-lg-3 col-md-6">
                <div className="card info-card text-center">
                    <div className="card-body">
                        <img className='card-icons' src={icon1} alt="" />
                        <p className="card-title mt-4">Number Of Register Captains</p>
                    </div>
                    <div className="card-footer text-center">
                        <h5 className="card-price mt-2">{captainCount}</h5>
                        {/* <h5 className="card-price mt-2">4,500</h5> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="card info-card text-center">
                    <div className="card-body">
                        <img className='card-icons' src={icon2} alt="" />
                        <h5 className="card-title mt-4">Today Rides Booked</h5>
                    </div>
                    <div className="card-footer">
                        <h5 className="card-price mt-3">{acceptedRidesCount}</h5>
                        {/* <h5 className="card-price mt-3">1,200</h5> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="card info-card text-center">
                    <div className="card-body">
                        <img className='card-icons' src={icon2} alt="" />
                        <h5 className="card-title mt-4">Today Rides Canceled</h5>
                    </div>
                    <div className="card-footer">
                        <h5 className="card-price">{cancelledRidesCount}</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="card info-card text-center">
                    <div className="card-body">
                        <img className='card-icons' src={icon3} alt="" />
                        <h5 className="card-title mt-4">Today Reports</h5>
                    </div>
                    <div className="card-footer">
                        <h5 className="card-price mt-2">12</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
