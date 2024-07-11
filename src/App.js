import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Home from './pages/home'; 
import Login from './pages/login';
import Manager from './pages/manager_login';
import Tenant from './pages/tenant_login';
import TenantSignUp from './pages/tenant_signup';
import CurrentHappenings from './pages/current_happenings';
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
      </Routes>
    </Router>
  );
}

export default App;
