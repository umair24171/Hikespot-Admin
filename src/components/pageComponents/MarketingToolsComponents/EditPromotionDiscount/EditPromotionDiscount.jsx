import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import myContext from './../../../../context/myContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Timestamp } from 'firebase/firestore';

const EditPromotion = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { editPromotions } = useContext(myContext);
    const { promotion } = location.state || {};

    const parseDate = (date) => {
        if (!date) return null; // handle null or undefined
        if (date instanceof Timestamp) {
            return date.toDate();
        }
        return new Date(date);
    };


    const [title, setTitle] = useState(promotion?.title || '');
    const [description, setDescription] = useState(promotion?.description || '');
    const [discount, setDiscount] = useState(promotion?.discount || '');
    const [startDate, setStartDate] = useState(parseDate(promotion?.startDate) || null);
    const [endDate, setEndDate] = useState(parseDate(promotion?.endDate) || null);

    useEffect(() => {
        if (promotion) {
            setStartDate(parseDate(promotion.startDate));
            setEndDate(parseDate(promotion.endDate));
        }
    }, [promotion]);

    const handleSave = async () => {
        const updatedPromotionData = {
            title,
            description,
            discount,
            startDate: startDate ? startDate.toISOString() : null, // Convert to ISO string
            endDate: endDate ? endDate.toISOString() : null, // Convert to ISO string
        };
    
        const success = await editPromotions(promotion.id, updatedPromotionData);
        if (success) {
            navigate('/admin/promotion-discounts-list');
        }
    };
    


    return (
        <div className="edit-promotion-container">
            <h2>Edit Promotion</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="discount" className="form-label">Discount</label>
                    <input
                        type="text"
                        id="discount"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date Schedule</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(dates) => {
                            const [start, end] = dates;
                            setStartDate(start);
                            setEndDate(end);
                        }}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        isClearable
                        className="form-control"
                        placeholderText="Select a date range"
                    />
                </div>

                <button type="button" onClick={handleSave} className="btn btn-primary">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditPromotion;
