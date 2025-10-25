import React, { useEffect } from 'react';
import splash from '../../assets/splash screen.png';
import './SplashScreen.css';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Redirect to the login page after 5 seconds
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen-container">
      <img src={splash} alt="splash screen" />
    </div>
  );
}

export default SplashScreen;
