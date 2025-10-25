import React, { useState } from 'react';
import './Safety.css';
import Captains from '../Captains/Captains';
import Passengers from '../Passengers/Passengers';

const Safety = () => {
  // State to track the active view (captains or passengers)
  const [activeView, setActiveView] = useState('captains');

  // State to track the active category filter
  const [activeCategory, setActiveCategory] = useState('all');

  // Function to handle view button click
  const handleViewClick = (view) => {
    setActiveView(view);
  };

  // Function to handle category button click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='row justify-content-between'>
          <div className='col-auto d-flex gap-3 flex-wrap'>
            <button
              className={`safety-btn ${activeView === 'captains' ? 'active' : ''}`}
              onClick={() => handleViewClick('captains')}
            >
              Captains
            </button>
            <button
              className={`safety-btn ${activeView === 'passengers' ? 'active' : ''}`}
              onClick={() => handleViewClick('passengers')}
            >
              Passengers
            </button>
          </div>

          <div className='col-auto d-flex gap-3 flex-wrap'>
            <button
              className={`safety-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('all')}
            >
              All
            </button>
            <button
              className={`safety-btn ${activeCategory === 'ambulance' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('ambulance')}
            >
              Ambulance
            </button>
            <button
              className={`safety-btn ${activeCategory === 'police' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('police')}
            >
              Police
            </button>
          </div>
        </div>

        <div className='mt-4'>
          {activeView === 'captains' && <Captains category={activeCategory} />}
          {activeView === 'passengers' && <Passengers category={activeCategory} />}
        </div>
      </div>
    </>
  );
};

export default Safety;
