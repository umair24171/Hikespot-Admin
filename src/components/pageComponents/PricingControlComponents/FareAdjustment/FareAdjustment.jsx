import React, { useState, useEffect, useContext } from 'react';
import './FareAdjustment.css';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../../../../context/myContext';
import { toast } from 'react-toastify';

const FareAdjustment = () => {
  const [formData, setFormData] = useState({
    minFare: '',
    manualMinFare: '',
    maxFare: '',
    manualMaxFare: ''
  });

  const navigate = useNavigate();

  const [isFormFilled, setIsFormFilled] = useState(false);

  const { addFareAdjustment } = useContext(MyContext);

  useEffect(() => {
    const { minFare, manualMinFare, maxFare, manualMaxFare } = formData;
    setIsFormFilled(
      (minFare || manualMinFare) && (maxFare || manualMaxFare)
    );
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'minFare' && value !== '') {
      setFormData(prevState => ({
        ...prevState,
        minFare: value,
        manualMinFare: ''
      }));
    } else if (name === 'manualMinFare' && value !== '') {
      setFormData(prevState => ({
        ...prevState,
        manualMinFare: value,
        minFare: ''
      }));
    } else if (name === 'maxFare' && value !== '') {
      setFormData(prevState => ({
        ...prevState,
        maxFare: value,
        manualMaxFare: ''
      }));
    } else if (name === 'manualMaxFare' && value !== '') {
      setFormData(prevState => ({
        ...prevState,
        manualMaxFare: value,
        maxFare: ''
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    const finalMinFare = formData.manualMinFare || formData.minFare;
    const finalMaxFare = formData.manualMaxFare || formData.maxFare;

    const success = await addFareAdjustment({
      minFare: finalMinFare,
      maxFare: finalMaxFare
    });

    if (success) {
      toast.success("Fare price added successfully!")
      setFormData({
        minFare: '',
        manualMinFare: '',
        maxFare: '',
        manualMaxFare: ''
      });
      navigate("/admin/fare-adjustment-list")

    } else {
      toast.error("Failed to add fare price. Please try again!")
    }
  };

  return (
    <>
      <Link to="/admin/fare-adjustment-list">
        <p style={{ fontSize: "20px", fontWeight: "800", color: "#FFBC07", marginTop: "50px" }}>
          Adjust The Fare Price For Ride
        </p>
      </Link>

      <div className="mainBox">
        <div className="promotion-mainBox">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label htmlFor="minFare" className="form-label">Add Min Fare Price</label>
              <input
                type="number"
                id="minFare"
                name="minFare"
                min="1"
                max="100"
                placeholder="ZAR 0"
                className="form-control"
                value={formData.minFare}
                onChange={handleInputChange}
                disabled={formData.manualMinFare !== ''}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="manualMinFare" className="form-label">Or Add Min Fare Price Manually</label>
              <input
                type="text"
                placeholder="Enter minimum price"
                className="form-control"
                id="manualMinFare"
                name="manualMinFare"
                value={formData.manualMinFare}
                onChange={handleInputChange}
                disabled={formData.minFare !== ''}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="maxFare" className="form-label">Add Max Fare</label>
              <input
                type="number"
                id="maxFare"
                name="maxFare"
                min="1"
                max="100"
                placeholder="ZAR 0"
                className="form-control"
                value={formData.maxFare}
                onChange={handleInputChange}
                disabled={formData.manualMaxFare !== ''}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="manualMaxFare" className="form-label">Or Add Max Fare Price Manually</label>
              <input
                type="text"
                placeholder="Enter maximum price"
                className="form-control"
                id="manualMaxFare"
                name="manualMaxFare"
                value={formData.manualMaxFare}
                onChange={handleInputChange}
                disabled={formData.maxFare !== ''}
              />
            </div>
          </form>

          <button
            className={`form-btn ${isFormFilled ? 'btn-filled' : ''}`}
            disabled={!isFormFilled}
            onClick={handleSubmit}
          >
            Add New Fare Price
          </button>
        </div>
      </div>
    </>
  );
}

export default FareAdjustment;
