import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Home from './pages/home'; 
import Login from './pages/login';
import Manager from './pages/manager_login';
import Tenant from './pages/tenant_login';
import TenantSignUp from './pages/tenant_signup';
import CurrentHappenings from './pages/current_happenings';
import Bills from './pages/bills';
import Meetings from './pages/meetings';
import PaymentHistory from './pages/billhistory';
import CameraStatus from './pages/camera_status';
import LiftStatus from './pages/lift_status';
/*import CurrentComplaints from './pages/current_complaints';
import RoomDisplay from './pages/room_display';
*/
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/manager_login" element={<Manager/>}/>
        <Route path="/tenant_login" element={<Tenant/>}/>
        <Route path="/tenant_signup" element={<TenantSignUp/>}/>
        <Route path="/current_happenings" element={<CurrentHappenings/>}/>
        <Route path="/bills" element={<Bills/>}/>
        <Route path="/meetings" element={<Meetings/>}/>
        <Route path="/payment_history" element={<PaymentHistory/>}/>
        <Route path="/camera_status" element={<CameraStatus/>}/>
        <Route path="/lift_status" element={<LiftStatus/>}/>
        {/*<Route path="/current_complaints" element={<CurrentComplaints/>}/>
        <Route path="/room_display" element={<RoomDisplay/>}/>
        */}
      </Routes>
    </Router>
  );
}

export default App;
