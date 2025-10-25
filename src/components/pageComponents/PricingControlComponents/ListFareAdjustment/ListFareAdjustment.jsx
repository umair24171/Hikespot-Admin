import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListFareAdjustment.css';
import myContext from '../../../../context/myContext';
import { toast } from 'react-toastify';

const ListFareAdjustment = () => {
  const [fareAdjustments, setFareAdjustments] = useState([]);
  const { fetchFareAdjustments, deleteFareAdjustment } = useContext(myContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFareAdjustments = async () => {
      const fetchedFares = await fetchFareAdjustments();
      setFareAdjustments(fetchedFares);
    };
    loadFareAdjustments();
  }, [fetchFareAdjustments]);

  const handleEdit = (fare) => {
    navigate(`/admin/fare-adjustment-edit/${fare.id}`, { state: { fare } });
  };

  const handleDelete = async (id) => {
    const success = await deleteFareAdjustment(id);
    if (success) {
      toast.success("Fare deleted successfully!")
      const fetchedFares = await fetchFareAdjustments();
      setFareAdjustments(fetchedFares);
    } else {
      toast.error("Failed to delete fare. Please try again.")
    }
  };

  return (
    <div className="list-promotion-discount text-white">
      {fareAdjustments.length > 0 ? (
        <div className="row">
          {fareAdjustments.map((fare) => (
            <div key={fare.id} className="col-lg-6">
              <div className="list-promotion-mainBox">
                <div>
                  <p><strong>Min Fare:</strong> {fare.minFare}</p>
                  <p><strong>Max Fare:</strong> {fare.maxFare}</p>
                </div>
                <div className="button-group">
                  <button onClick={() => handleEdit(fare)} className="list-fare-btn1">Edit Fare Price</button>
                  <button onClick={() => handleDelete(fare.id)} className="list-fare-btn2">Remove Fare Price</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className='text-center fw-bold'>No data found</h1>
      )}
    </div>
  );
};

export default ListFareAdjustment;
