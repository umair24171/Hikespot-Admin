import React, { useState, useEffect, useContext } from 'react';
import './ListPromotion$Discount.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import myContext from './../../../../context/myContext';
import { formatDate } from './../../../../utils/dateUtils';
import { Timestamp } from 'firebase/firestore';

const ListPromotionDiscount = () => {
  const { fetchPromotions, deletePromotions } = useContext(myContext);
  const [promotions, setPromotions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promotionsList = await fetchPromotions();
        setPromotions(promotionsList);
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
    };

    fetchData();
  }, [fetchPromotions]);

  const handleEdit = (promotion) => {
    let startDate = promotion.startDate;
    let endDate = promotion.endDate;

    if (startDate instanceof Timestamp) {
      startDate = startDate.toDate();
    } else if (typeof startDate === 'string') {
      startDate = new Date(startDate);
    }

    if (endDate instanceof Timestamp) {
      endDate = endDate.toDate();
    } else if (typeof endDate === 'string') {
      endDate = new Date(endDate);
    }

    navigate('/admin/promotion-discounts-edit', {
      state: {
        promotion: {
          ...promotion,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString()
        }
      }
    });
  };



  const handleDelete = async (id) => {
    console.log('Delete promotion with id:', id);
    await deletePromotions(id);
    setPromotions(promotions.filter(promotion => promotion.id !== id));
  };

  return (
    <>
      <Link to="/admin/promotion-discounts">
        <p style={{ fontSize: "18px", fontWeight: "600", color: "#FFBC07", display: "flex", alignItems: "center", gap: "15px", justifyContent: "right" }}>
          Add New Promotion
          <IoIosArrowForward />
        </p>
      </Link>

      <p style={{ fontSize: "18px", fontWeight: "800", color: "#FFBC07" }}>No of Results: {promotions.length}</p>

      <div className="list-promotion-discount">
        <div className="row">
          {promotions.map(promotion => (
            <div className="col-lg-6" key={promotion.id}>
              <div className="list-promotion-mainBox">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={promotion.title}
                      readOnly
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="description" className="form-label">Promotion Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      value={promotion.description}
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="discount" className="form-label">Discount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="discount"
                      name="discount"
                      value={promotion.discount}
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">Start Date and End Date</label>
                    <br />
                    <p className="form-control">
                      {/* {console.log('Start Date:', promotion.startDate, 'End Date:', promotion.endDate)} */}
                      {formatDate(promotion.startDate)} - {formatDate(promotion.endDate)}
                    </p>

                  </div>
                </form>

                <div className='d-flex align-items-center justify-content-between'>
                  <button className="list-form-btn1" onClick={() => handleEdit(promotion)}>Edit Promotion</button>
                  <button className="list-form-btn2" onClick={() => handleDelete(promotion.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListPromotionDiscount;
