import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import PageNotFound from './components/PageNotFound';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import AdminLayout from './pages/AdminLayout/AdminLayout';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import Dashboard from './pages/Dashboard/Dashboard';
import UserManagement from './pages/UserManagement/UserManagement';
import TripData from './pages/TripData/TripData';
import FinancialManagement from './pages/FinancialManagement/FinancialManagement';
import VehicleManagement from './pages/VehicleManagement/VehicleManagement';
import SafetyCompliance from './pages/SafetyCompliance/SafetyCompliance';
import PricingControls from './pages/PricingControls/PricingControls';
import CustomerSupport from './pages/CustomerSupport/CustomerSupport';
import MarketingTools from './pages/MarketingTools/MarketingTools';
import CaptainDetails from './components/pageComponents/UserManagementComponents/CaptainDetails/CaptainDetails';
import PassengerDetails from './components/pageComponents/UserManagementComponents/PassengerDetails/PassengerDetails';
import CapitalVerification from './components/pageComponents/UserManagementComponents/CapitalVerification/CapitalVerification';
import VerificationRequest from './components/pageComponents/UserManagementComponents/VerificationRequest/VerificationRequest';
import ViewDocument from './components/pageComponents/UserManagementComponents/ViewDocument/ViewDocument';
import TrackRide from './components/pageComponents/TripDataComponents/TrackRide/TrackRide';
import Vehicle from './components/pageComponents/VehicleManagementComponents/Vehicle/Vehicle';
import FleetOverView from './components/pageComponents/VehicleManagementComponents/FleetOverView/FleetOverView';
import VehicleDetails from './components/pageComponents/VehicleManagementComponents/VehicleDetails/VehicleDetails';
import Safety from './components/pageComponents/SafetyComplianceComponents/Safety/Safety';
import Compliance from './components/pageComponents/SafetyComplianceComponents/Compliance/Compliance';
import Captains from './components/pageComponents/SafetyComplianceComponents/Captains/Captains';
import Passengers from './components/pageComponents/SafetyComplianceComponents/Passengers/Passengers';
import UserFeedback from './components/pageComponents/CustomerSupportComponents/UserFeedback/UserFeedback';
import TicketManagement from './components/pageComponents/CustomerSupportComponents/TicketManagement/TicketManagement';
import UserNotifications from './components/pageComponents/MarketingToolsComponents/UserNotifications/UserNotifications';
import PromotionDiscounts from './components/pageComponents/MarketingToolsComponents/Promotion&Discounts/Promotion&Discounts';
import ListPromotionDiscount from './components/pageComponents/MarketingToolsComponents/ListPromotion$Discount/ListPromotion$Discount';
import ListUserNotification from './components/pageComponents/MarketingToolsComponents/ListUserNotification/ListUserNotification';
import FareAdjustment from './components/pageComponents/PricingControlComponents/FareAdjustment/FareAdjustment';
import SurgePriceManagement from './components/pageComponents/PricingControlComponents/SurgePriceManagement/SurgePriceManagement';
import ListFareAdjustment from './components/pageComponents/PricingControlComponents/ListFareAdjustment/ListFareAdjustment';
import EditFareAdjustment from './components/pageComponents/PricingControlComponents/EditFareAdjustment/EditFareAdjustment';
import MyState from './context/myState';
import OneSignal from 'react-onesignal';
import EditUserNotification from './components/pageComponents/MarketingToolsComponents/EditUserNotification/EditUserNotification';
import EditPromotionDiscount from './components/pageComponents/MarketingToolsComponents/EditPromotionDiscount/EditPromotionDiscount';
import Notification from './pages/Notification/Notification';

const App = () => {
  useEffect(() => {
    OneSignal.init({
      appId: '0661cbc1-2790-483a-8b30-8fcc3daa487e',
    });
  }, []);

  // useEffect(() => {
  //   window.OneSignal = window.OneSignal || [];
  //   OneSignal.push(function () {
  //     OneSignal.init({
  //       appId: "69e3fd5e-2785-48fa-b3f8-40c084d6c97c",
  //       notifyButton: {
  //         enable: true, // Shows the native bell icon for subscribing
  //       },
  //     });
  //   });
  // }, []);


  return (
    <>
      <MyState>
        <Routes>
          {/* <SplashScreen /> */}
          <Route path='/' element={<SplashScreen />} />
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='notifications' element={<Notification />} />

            <Route path='user-management' element={<UserManagement />} />
            <Route path='details-captain/:id' element={<CaptainDetails />} />
            <Route path='details-passenger/:id' element={<PassengerDetails />} />
            <Route path='capital-verification-request' element={<CapitalVerification />} />
            <Route path='verification-request/:id' element={<VerificationRequest />} />
            <Route path='view-document' element={<ViewDocument />} />

            <Route path='trip-data' element={<TripData />} />
            <Route path='track-ride/:id' element={<TrackRide />} />

            <Route path='financial-information' element={<FinancialManagement />} />

            <Route path='vehicle-management' element={<VehicleManagement />} />
            <Route path='vehicle' element={<Vehicle />} />
            <Route path='vehicle-details/:id' element={<VehicleDetails />} />
            <Route path='fleet-overview' element={<FleetOverView />} />


            <Route path='safety-compliance' element={<SafetyCompliance />} />
            <Route path='safety' element={<Safety />} />
            <Route path='captains' element={<Captains />} />
            <Route path='passengers' element={<Passengers />} />
            <Route path='compliance' element={<Compliance />} />

            <Route path='pricing-controls' element={<PricingControls />} />
            <Route path='fare-adjustment' element={<FareAdjustment />} />
            <Route path='fare-adjustment-list' element={<ListFareAdjustment />} />
            <Route path='fare-adjustment-edit/:id' element={<EditFareAdjustment />} />
            <Route path='surge-price-management' element={<SurgePriceManagement />} />

            <Route path='customer-support' element={<CustomerSupport />} />
            <Route path='user-feedback' element={<UserFeedback />} />
            <Route path='ticket-management' element={<TicketManagement />} />


            <Route path='marketing-tools' element={<MarketingTools />} />
            <Route path='promotion-discounts' element={<PromotionDiscounts />} />
            <Route path='promotion-discounts-list' element={<ListPromotionDiscount />} />
            <Route path='promotion-discounts-edit' element={<EditPromotionDiscount />} />
            <Route path='user-notification' element={<UserNotifications />} />
            <Route path='user-notification-list' element={<ListUserNotification />} />
            <Route path='user-notification-edit' element={<EditUserNotification />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </MyState>

    </>
  )
}
export default App;
