import React, { useContext, useEffect, useState } from 'react';
import './FleetOverView.css';
import { Stack, LinearProgress } from '@mui/material';
import myContext from '../../../../context/myContext';

const FleetOverView = () => {
  const [captains, setCaptains] = useState([]);
  const { fetchCaptains } = useContext(myContext);

  // Set a fixed maximum value for the rides to scale the progress bar
  const FIXED_MAX_RIDES = 100;

  useEffect(() => {
    const getCaptains = async () => {
      const captainsData = await fetchCaptains();
      setCaptains(captainsData.filter(captain => captain.appStatus === 'captain'));
    };

    getCaptains();
  }, [fetchCaptains]);

  return (
    <div className="fleet-overview text-white">
      <div className="row">
        {captains.map((captain, index) => (
          <div className="col-lg-6 mb-4" key={index}>
            <h4 className='fleet-overview-heading1'>Today Rides Booked Metrics</h4>
            <div className="rides-mainBox">
              <div className="row align-items-center mt-5">
                <div className="col-lg-8 mb-3">
                  <div className="d-flex">
                    <div className="main-first-box me-3">
                      <h5 className='ride-title'>Ride</h5>
                      <p className='ride-info'>{captain.driverModel.carService}</p>
                      <p className='ride-info'>4 seater</p>
                    </div>
                    <div>
                      <img className='rides-img' src="https://s3-alpha-sig.figma.com/img/0414/340f/0d67b5154235927e3fb288bbb83cf228?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpi3pJNmCn2Yv5NPzry8sKSSJ~cBhEMQowBGkReNlK-u-QSeVHv28U2D4fbs2enC69YHenN3f6wCSrJdMe04pDdw2D6t4UMpS4KrkvCzFYQ2NNaMwokStdubWtwFb5RPwUNhFr6I~P36y~5q9fLlW3D-hZyJw1l5av24NRbJtJAS4~ayoC~1qtlZcL8nBquGyGiBGvGya8cj94jn~Z6hH24Zo96Gf4QDLkM6A37JoTm3W9ynB4JxsQ-soePsE2anjic95t44fckaVx0E8Bt8D9aYugci4nGfxzXZHJi1apQxg1SBPrFnAXB~XO2e5a6zxUHmf1XF6l-sGDPboPNnBA__" alt="Captain's car" />
                      {/* <img className='rides-img' src={captain.driverModel.imageUrl} alt="Captain's car" /> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-3">
                  <p className="rides-count">{captain.driverModel.totalRides} Rides</p>
                </div>
                <div className="progressBar">
                  <Stack spacing={2}>
                    <LinearProgress 
                      style={{ height: "15px", borderRadius: "10px" }} 
                      className="linear-progress" 
                      variant='determinate' 
                      value={Math.min((captain.driverModel.totalRides / FIXED_MAX_RIDES) * 100, 100)} // Clamped between 0-100%
                    />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="row">
            <div className="col-lg-6 mb-4">
              <h4 className='fleet-overview-heading1'>Vehicle Active Rides</h4>
              <div className="rides-mainBox">
                <div className="row align-items-center mt-5">
                  <div className="col-lg-8 mb-3">
                    <div className="d-flex">
                      <div className="main-first-box me-3">
                        <h5 className='ride-title'>Ride</h5>
                        <p className='ride-info'>Business Class</p>
                        <p className='ride-info'>4 Seater</p>
                      </div>
                      <div>
                        <img className='rides-img' src="https://s3-alpha-sig.figma.com/img/0414/340f/0d67b5154235927e3fb288bbb83cf228?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpi3pJNmCn2Yv5NPzry8sKSSJ~cBhEMQowBGkReNlK-u-QSeVHv28U2D4fbs2enC69YHenN3f6wCSrJdMe04pDdw2D6t4UMpS4KrkvCzFYQ2NNaMwokStdubWtwFb5RPwUNhFr6I~P36y~5q9fLlW3D-hZyJw1l5av24NRbJtJAS4~ayoC~1qtlZcL8nBquGyGiBGvGya8cj94jn~Z6hH24Zo96Gf4QDLkM6A37JoTm3W9ynB4JxsQ-soePsE2anjic95t44fckaVx0E8Bt8D9aYugci4nGfxzXZHJi1apQxg1SBPrFnAXB~XO2e5a6zxUHmf1XF6l-sGDPboPNnBA__" alt="" />
                      </div>
                    </div>
                  </div>
                  <p className="rides-count">12 Rides Active</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <h4 className='fleet-overview-heading2'>24 Rides Active</h4>
              <div className="rides-mainBox">
                <div className="row align-items-center mt-5">
                  <div className="col-lg-8 mb-3">
                    <div className="d-flex">
                      <div className="main-first-box me-3">
                        <h5 className='ride-title'>Ride</h5>
                        <p className='ride-info'>Business Class</p>
                        <p className='ride-info'>4 Seater</p>
                      </div>
                      <div>
                        <img className='rides-img' src="https://s3-alpha-sig.figma.com/img/0414/340f/0d67b5154235927e3fb288bbb83cf228?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpi3pJNmCn2Yv5NPzry8sKSSJ~cBhEMQowBGkReNlK-u-QSeVHv28U2D4fbs2enC69YHenN3f6wCSrJdMe04pDdw2D6t4UMpS4KrkvCzFYQ2NNaMwokStdubWtwFb5RPwUNhFr6I~P36y~5q9fLlW3D-hZyJw1l5av24NRbJtJAS4~ayoC~1qtlZcL8nBquGyGiBGvGya8cj94jn~Z6hH24Zo96Gf4QDLkM6A37JoTm3W9ynB4JxsQ-soePsE2anjic95t44fckaVx0E8Bt8D9aYugci4nGfxzXZHJi1apQxg1SBPrFnAXB~XO2e5a6zxUHmf1XF6l-sGDPboPNnBA__" alt="" />
                      </div>
                    </div>
                  </div>
                  <p className="rides-count">12 Rides Active</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default FleetOverView;
