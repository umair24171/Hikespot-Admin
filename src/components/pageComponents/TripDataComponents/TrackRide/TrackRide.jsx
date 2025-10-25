import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TrackRide.css';
import { FaArrowLeft } from 'react-icons/fa';

const TrackRide = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <div className='captain-details'>
                <div className='d-flex align-items-center gap-5'>
                    <FaArrowLeft className='icon-captain' onClick={() => navigate(-1)} />
                    <h1 className='captain-heading'>Track Ride</h1>
                </div>

                <div className='responsive-map'>
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5576647833736!2d71.43996391227496!3d30.183412480470505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b317b4e5db26f%3A0xa669616ba8f3b885!2sAziz%20Hotel%20Chowk%2C%20Multan%2C%20Punjab%2C%20Pakistan!5e1!3m2!1sen!2s!4v1722873852577!5m2!1sen!2s`} 
                        width="100%" 
                        height="450" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default TrackRide;
