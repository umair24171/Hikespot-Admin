import React from 'react';
import './FinancialManagement.css';
import Earning from '../../components/pageComponents/Dashboard/Graphs/Earning';
import { TbCaptureFilled } from "react-icons/tb";
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import user from '../../assets/user1.png';
import BookingTable from './../../components/pageComponents/Dashboard/BookingTable/BookingTable';
import { MdArrowOutward } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

const FinancialManagement = () => {

  const rows = [
    {
      id: 1,
      driver: 'Maharrm Hasanli',
      customer: 'Maharrm Hasanli',
      from: '309 S Peach St Bunnell, Florida(FL)',
      stepover: '1601 29th St. Suite 1292 Boulder, CO 80301',
      to: '8 Zircon Ct Palm Coast, Colorado(CL)',
      trackRide: 'View On Map',
      rideDetails: 'ZAR 800 25/05/2024 1:20PM',
      carDetails: 'Jaguar F-PACE Car Sport F Type 25843 Completed',
    },
    {
      id: 2,
      driver: 'Maharrm Hasanli',
      customer: 'Maharrm Hasanli',
      from: '309 S Peach St Bunnell, Florida(FL)',
      stepover: '1601 29th St. Suite 1292 Boulder, CO 80301',
      to: '8 Zircon Ct Palm Coast, Colorado(CL)',
      trackRide: 'View On Map',
      rideDetails: 'ZAR 800 25/05/2024 1:20PM',
      carDetails: 'Jaguar F-PACE Car Sport F Type 25843 Completed',
    },
    {
      id: 3,
      driver: 'Maharrm Hasanli',
      customer: 'Maharrm Hasanli',
      from: '309 S Peach St Bunnell, Florida(FL)',
      stepover: '1601 29th St. Suite 1292 Boulder, CO 80301',
      to: '8 Zircon Ct Palm Coast, Colorado(CL)',
      trackRide: 'View On Map',
      rideDetails: 'ZAR 800 25/05/2024 1:20PM',
      carDetails: 'Jaguar F-PACE Car Sport F Type 25843 Completed',
    },
    {
      id: 4,
      driver: 'Maharrm Hasanli',
      customer: 'Maharrm Hasanli',
      from: '309 S Peach St Bunnell, Florida(FL)',
      stepover: '1601 29th St. Suite 1292 Boulder, CO 80301',
      to: '8 Zircon Ct Palm Coast, Colorado(CL)',
      trackRide: 'View On Map',
      rideDetails: 'ZAR 800 25/05/2024 1:20PM',
      carDetails: 'Jaguar F-PACE Car Sport F Type 25843 Completed',
    },
    {
      id: 5,
      driver: 'Maharrm Hasanli',
      customer: 'Maharrm Hasanli',
      from: '309 S Peach St Bunnell, Florida(FL)',
      stepover: '1601 29th St. Suite 1292 Boulder, CO 80301',
      to: '8 Zircon Ct Palm Coast, Colorado(CL)',
      trackRide: 'View On Map',
      rideDetails: 'ZAR 800 25/05/2024 1:20PM',
      carDetails: 'Jaguar F-PACE Car Sport F Type 25843 Completed',
    },
    {
      id: 6,
      driver: 'Maharrm Hasanli',
      customer: 'Maharrm Hasanli',
      from: '309 S Peach St Bunnell, Florida(FL)',
      stepover: '1601 29th St. Suite 1292 Boulder, CO 80301',
      to: '8 Zircon Ct Palm Coast, Colorado(CL)',
      trackRide: 'View On Map',
      rideDetails: 'ZAR 800 25/05/2024 1:20PM',
      carDetails: 'Jaguar F-PACE Car Sport F Type 25843 Completed',
    },
  ];

  return (
    <div className="financialData container">
      <div className="financial-mainBox">
        <div className="financial-btn-box">
          <button className='financial-btn'>
            <TbCaptureFilled size={17} color='#FFBC07' />
            Admin Available Balance
            <b className='financial-btn-price'>ZAR 200K</b>
          </button>
        </div>
      </div>

      <Earning />

      <div className="title d-flex justify-content-between mt-5">
        <p>Withdraw Request</p>
        <p className='d-flex align-items-center gap-2'>No of Requests : 56</p>
      </div>

      <div className="financial-box text-white">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="financial-box-info">
              <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="" className="financial-box-img" />
              <h4 className='financial-box-heading1'>Maharrm Hasanli</h4>
              <p className='financial-box-number'>+1 123 456 789 0</p>
              <h5 className='financial-box-heading2'>hasanalidriver@gmail.com</h5>
              <div className="d-flex align-items-center justify-justify-content-evely gap-3">
                <p>25/05/2024</p>
                <p>1:20PM</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 financial-mainBox-payment">
            <button className='financial-btn'>
              Bank Account Number :
              <b className='financial-btn-price'>SA IB 45 0000 001123456001</b>
            </button>

            <div className='financial-box-payment'>
              <h4 className='financial-box-payment-heading1'>Payment Request</h4>
              <div className="financial-box-payment-btn-box">
                <h4 className='financial-box-payment-heading2'>ZAR 310</h4>
                <button className='financial-box-pay-btn'>
                  Send Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="financial-box text-white">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="financial-box-info">
              <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="" className="financial-box-img" />
              <h4 className='financial-box-heading1'>Maharrm Hasanli</h4>
              <p className='financial-box-number'>+1 123 456 789 0</p>
              <h5 className='financial-box-heading2'>hasanalidriver@gmail.com</h5>
              <div className="d-flex align-items-center justify-justify-content-evely gap-3">
                <p>25/05/2024</p>
                <p>1:20PM</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 financial-mainBox-payment">
            <button className='financial-btn'>
              Bank Account Number :
              <b className='financial-btn-price'>SA IB 45 0000 001123456001</b>
            </button>

            <div className='financial-box-payment'>
              <h4 className='financial-box-payment-heading1'>Payment Request</h4>
              <div className="financial-box-payment-btn-box">
                <h4 className='financial-box-payment-heading2'>ZAR 310</h4>
                <button className='financial-box-pay-btn'>
                  Send Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="financial-box text-white">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="financial-box-info">
              <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="" className="financial-box-img" />
              <h4 className='financial-box-heading1'>Maharrm Hasanli</h4>
              <p className='financial-box-number'>+1 123 456 789 0</p>
              <h5 className='financial-box-heading2'>hasanalidriver@gmail.com</h5>
              <div className="d-flex align-items-center justify-justify-content-evely gap-3">
                <p>25/05/2024</p>
                <p>1:20PM</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 financial-mainBox-payment">
            <button className='financial-btn'>
              Bank Account Number :
              <b className='financial-btn-price'>SA IB 45 0000 001123456001</b>
            </button>

            <div className='financial-box-payment'>
              <h4 className='financial-box-payment-heading1'>Payment Request</h4>
              <div className="financial-box-payment-btn-box">
                <h4 className='financial-box-payment-heading2'>ZAR 310</h4>
                <button className='financial-box-pay-btn'>
                  Send Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="financial-box text-white">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="financial-box-info">
              <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="" className="financial-box-img" />
              <h4 className='financial-box-heading1'>Maharrm Hasanli</h4>
              <p className='financial-box-number'>+1 123 456 789 0</p>
              <h5 className='financial-box-heading2'>hasanalidriver@gmail.com</h5>
              <div className="d-flex align-items-center justify-justify-content-evely gap-3">
                <p>25/05/2024</p>
                <p>1:20PM</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 financial-mainBox-payment">
            <button className='financial-btn'>
              Bank Account Number :
              <b className='financial-btn-price'>SA IB 45 0000 001123456001</b>
            </button>

            <div className='financial-box-payment'>
              <h4 className='financial-box-payment-heading1'>Payment Request</h4>
              <div className="financial-box-payment-btn-box">
                <h4 className='financial-box-payment-heading2'>ZAR 310</h4>
                <button className='financial-box-pay-btn'>
                  Send Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialManagement;
