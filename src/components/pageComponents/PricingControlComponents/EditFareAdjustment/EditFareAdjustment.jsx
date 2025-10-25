import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // To get location and navigate
import myContext from '../../../../context/myContext';
import { toast } from 'react-toastify';

const EditFareAdjustment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { editFareAdjustment, fetchFareAdjustments } = useContext(myContext);
    const [formData, setFormData] = useState({
        minFare: '',
        maxFare: '',
    });

    useEffect(() => {
        if (location.state && location.state.fare) {
            setFormData(location.state.fare);
        }
    }, [location.state]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = async () => {
        const success = await editFareAdjustment(formData.id, formData);
        if (success) {
            toast.success("Fare updated successfully!")
            navigate('/admin/fare-adjustment-list');
        }
    };

    return (
        <div className="edit-fare-adjustment">
            <h3>Edit Fare Adjustment</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="editMinFare" className="form-label">Min Fare Price</label>
                    <input
                        type="number"
                        id="editMinFare"
                        name="minFare"
                        min="1"
                        max="100"
                        placeholder="ZAR 0"
                        className="form-control"
                        value={formData.minFare}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="editMaxFare" className="form-label">Max Fare Price</label>
                    <input
                        type="number"
                        id="editMaxFare"
                        name="maxFare"
                        min="1"
                        max="100"
                        placeholder="ZAR 0"
                        className="form-control"
                        value={formData.maxFare}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <button onClick={handleSave} className="list-fare-btn1">Save Changes</button>
            <button onClick={() => navigate('/admin/fare-adjustment-list')} className="list-fare-btn2">Cancel</button>
        </div>
    );
};

export default EditFareAdjustment;
