import React from 'react';
import './ServicesType.css';

const ServicesType = () => {
    return (
        <div className="service-box">
            <h1 className='service-heading1'>Type of Service Captain Use</h1>

            <div className="service-box2">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='service-heading2'>Captain Using Taxi Rides</h1>
                        <p className='service-para'>HikeSpot Captain to pick and drop customers in a Taxi.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="service-img" src="https://s3-alpha-sig.figma.com/img/3bb0/5e68/5801241b703a031edb4f624e2cd57a09?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J790hcO6ldMxXt77F90s89gqpZzvzYzlTjw0b6Sch7gRdU8W6zVdMAroCk5bKBOHtxdMkhX~qmRRmomcIjAeg6-o71bpr-QXJpJ0mQ58JC-PRvVo21NAci22kl8arXgwMy60Ws9okhIXyy1p9sJ0PCYFGhkKLo7iT1DeT~6pIlmeB51HRwPGFwEyb9Ttu1zb7wX0nDrXToVNiKB6jjEYw3~l3aK~Fq1ZGA87y367HMF5P3kHcX1jToNkfTzU8DgeASZN4dikk8udwQJeMNylN8vlFjdgYy09~cQqVcmoBBu37Ex1QaeR35HwrrI06k4YLASZBnyS-20CNh-PE-WM4w__" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesType;
