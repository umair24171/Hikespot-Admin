import React, { useState } from 'react';
import './Compliance.css';

const Compliance = () => {
  const [selectedStatus, setSelectedStatus] = useState("Pending");

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  return (
    <>
      <div className="financial-box text-white">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="financial-box-info">
              <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="" className="financial-box-img" />
              <h4 className='financial-box-heading1'>Maharrm Hasanli</h4>
              <p className='financial-box-number'>+1 123 456 789 0</p>
              <h5 className='financial-box-heading2'>hasanalidriver@gmail.com</h5>
              <div className="d-flex align-items-center justify-content-between gap-3">
                <p>25/05/2024</p>
                <p>1:20PM</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 financial-mainBox-payment">
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#FFBC07", textAlign: "center" }} >Incident Report</h3>
            <div className="compliance-box">
              <p>I am waiting for long time to pick the ride.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 financial-mainBox-payment d-flex align-items-center justify-content-center">
            <div className="dropdown compliance-btn">
              <button className="btn dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedStatus}
              </button>
              <ul className="dropdown-menu">
                {["Pending", "Approved", "Failed"].map((status) => (
                  <li key={status} className={`dropdown-item ${selectedStatus === status ? "selected" : ""}`} onClick={() => handleStatusChange(status)}>
                    <span>{status}</span>
                    <span className="status-dot"></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compliance;
