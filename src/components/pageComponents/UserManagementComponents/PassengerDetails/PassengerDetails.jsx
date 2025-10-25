import React, { useEffect, useState } from 'react'
import './PassengerDetails.css'
import { VscVerifiedFilled } from 'react-icons/vsc';
import { FaArrowLeft } from 'react-icons/fa6';
import Ranking from '../Rankings/Ranking';
import ChartRanking from './../ChartRanking/ChartRanking';
import Ratings from '../Ratings/Ratings';
import RidesHistory from './../RidesHistory/RidesHistory';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../../../../Firebase/FirebaseConfig';


const PassengerDetails = () => {

    const { id } = useParams(); // Get the ID from the URL
    const [passenger, setPassenger] = useState(null);

    useEffect(() => {
        const fetchPassenger = async () => {
            try {
                const docRef = doc(fireDB, 'users', id); // Reference to the document
                const docSnap = await getDoc(docRef); // Get the document
                console.log(docSnap)
                if (docSnap.exists()) {
                    setPassenger(docSnap.data()); // Set the passenger data
                } else {
                    console.error('No such document!');
                }
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };
        fetchPassenger();
        console.log("user detail", passenger)
    }, [id]);

    if (!passenger) {
        return <h3>Loading...</h3>;
    }


    return (
        <>
            <div className='captain-details'>
                <div className=' d-flex align-items-center gap-5'>
                    {/* icons */}
                    <FaArrowLeft className='icon-captain' />
                    {/* heading */}
                    <h1 className='captain-heading'>Tammy Spencer Passenger Profile</h1>
                </div>

                {/* -----------------------------------------------1--------------------------------------------- */}
                <div className='mt-3 row text-white'>
                    <div className="col-lg-5">
                        <div className="box1">
                            <img className='box1-img' src={passenger.imageUrl} alt="" />
                            <h3 className='box1-heading '>{passenger.firstname} {passenger.lastname}</h3>
                            <p className='box1-para'>{passenger.phoneNumber}</p>
                            <h4 className='box1-sub-heading'>{passenger.email}</h4>
                            {/* <h3 className='box1-heading '>Maharrm Hasanli</h3>
                            <p className='box1-para'>+1 123 456 789 0</p>
                            <h4 className='box1-sub-heading'>hasanalidriver@gmail.com</h4> */}
                        </div>
                    </div>


                    <div className="col-lg-7">
                        <div className="row">
                            <h4 className='status'>Status Verified
                                <VscVerifiedFilled />
                            </h4>

                            <div className="col-lg-12">
                                <div className="box2">
                                    <h4 className='box2-heading'>Vehicle Registration</h4>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img className='box3-img' src={passenger.idCardFront} alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <img className='box3-img' src={passenger.idCardBack} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* -----------------------------------------------2--------------------------------------------- */}

                <div className=''>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className='ranking-box text-white'>
                                <div className="row">
                                    <div className="col lg-6">
                                        <h5 className='ranking-heading'>Total Booked and Complete Rides</h5>
                                        <h1 className='ranking-sub-heading'>2400</h1>
                                    </div>
                                    <div className="col lg-6 chart-container">
                                        <ChartRanking />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5">
                            <Ratings />
                        </div>
                    </div>
                </div>

                {/* -----------------------------------------------3--------------------------------------------- */}

                <div className="col-lg-12">
                    <RidesHistory />
                </div>
            </div>
        </>
    )
}

export default PassengerDetails