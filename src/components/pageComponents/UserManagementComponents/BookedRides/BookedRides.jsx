import React from 'react'
import './BookedRides.css'
import ChartRanking from './../ChartRanking/ChartRanking';


const BookedRides = () => {
    return (
        <>
            <div className='ranking-box text-white'>
                <div className="row">
                    <div className="col lg-6">
                        <h5 className='ranking-heading'>Total Booked and Completed Rides</h5>
                        <h1 className='ranking-sub-heading'>1800</h1>
                    </div>
                    <div className="col lg-6 chart-container">
                        <ChartRanking />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookedRides