import React, { useEffect, useState, useContext } from 'react';
import './BookingTable.css';
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowOutward } from 'react-icons/md';
import myContext from '../../../../context/myContext';
import { toast } from 'react-toastify';

const BookingTable = ({ ratingFilter, dateFilter, rideFilter, sendNotification }) => {

    const [rides, setRides] = useState([]);
    const { fetchRides } = useContext(myContext);

    useEffect(() => {
        const loadRides = async () => {
            const ridesData = await fetchRides();
            setRides(ridesData);
        };

        loadRides();
    }, [fetchRides]);

    // Filter rides based on the selected filters
    const filteredRides = rides.filter(ride => {
        let isMatch = true;

        if (ratingFilter && ride.rating !== ratingFilter) {
            isMatch = false;
        }

        if (dateFilter) {
            const rideDate = new Date(ride.rideDate).toLocaleDateString();
            const selectedDate = new Date(dateFilter).toLocaleDateString();
            if (rideDate !== selectedDate) {
                isMatch = false;
            }
        }

        if (rideFilter && ride.rideStatus !== rideFilter && rideFilter !== 'None of them') {
            isMatch = false;
        }

        return isMatch;
    });

    const handleRideClick = (ride) => {
        if (ride.rideStatus === 'Scheduled') {
            const message = `Your ride from ${ride.pickupAddress} to ${ride.destinationAddress} is scheduled.`;
            sendNotification(ride.userId, message);
            toast.success(`Notification send successfully. Your ride from ${ride.pickupAddress} to ${ride.destinationAddress} is scheduled.`)
        }
    };

    return (
        <>
            <div className="title d-flex justify-content-between">
                <p>Ride Booking List</p>
                <p className='d-flex align-items-center gap-2'>
                    See All <IoIosArrowForward />
                </p>
            </div>

            <div className="row cardFilters mt-3"></div>

            <div className="table-responsive mt-3">
                <table className='table v-align'>
                    <thead className='thead-dark text-center'>
                        <tr>
                            <th className='col-driver'>Driver</th>
                            <th className='col-customer'>Customer</th>
                            <th className='col-from'>From</th>
                            <th className='col-stepover'>Stepover</th>
                            <th className='col-to'>To</th>
                            <th className='col-track'>Track Ride</th>
                            <th className='col-details'>Ride Details</th>
                            <th className='col-car'>Car Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRides.length > 0 ? filteredRides.map((ride) => (
                            <tr key={ride.id} onClick={() => handleRideClick(ride)} className='mb-5'>
                                <td className='text-center col-driver'>
                                    <div className="user-cell">
                                        <img src={ride.driverImage || "default-driver-image.png"} alt="Driver" className="user-img" />
                                        <div className="user-info">
                                            <p className="user-name">{ride.driverName || "N/A"}</p>
                                            <p className="user-number">{ride.driverPhone || "N/A"}</p>
                                            <p className="user-email">hasanalidriver@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-center col-customer'>
                                    <div className="user-cell">
                                        <img src={ride.userimage || "default-customer-image.png"} alt="Customer" className="user-img" />
                                        <div className="user-info">
                                            <p className="user-name">{ride.usernamme || "N/A"}</p>
                                            <p className="user-number">{ride.usernumber || "N/A"}</p>
                                            <p className="user-email">hasanalidriver@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='col-from'>{ride.pickupAddress || "N/A"}</td>
                                <td className='col-stepover'>{ride.stepOverAddress || "N/A"}</td>
                                <td className='col-to'>{ride.destinationAddress || "N/A"}</td>
                                <td className='col-track'>
                                    <a href={`/admin/track-ride/${ride.id}`} className='text-white'>
                                        View on Map
                                        <MdArrowOutward />
                                    </a>
                                </td>
                                <td className='col-details'>
                                    <p>{`ZAR ${ride.fare || 0}`}</p>
                                    <p>{ride.rideDate ? new Date(ride.rideDate).toLocaleString() : "N/A"}</p>
                                </td>
                                <td className='col-car'>
                                    <p>{`Car Model: ${ride.carModel || "N/A"}`}</p>
                                    <p>{`Car Number: ${ride.carNumber || "N/A"}`}</p>
                                    <p>Status: <b className='status'>{ride.rideStatus || "Pending"}</b></p>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="8" className="text-center">No rides found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BookingTable;
