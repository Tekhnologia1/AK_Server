import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Login from "./views/pages/login/Login";
import "./scss/style.scss";

import AppRoutes from "./Route/AppRoute";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />


          <Route path="/dashboard" element={<DefaultLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path="/dashboard/adminpanel" element={<Adminpanel/>} />
            <Route path="/dashboard/adminpanel/product" element={<Product/>} />
            <Route path="/dashboard/adminpanel/areas" element={<Areas/>} />
            <Route path="/dashboard/adminpanel/order" element={<Orderplace/>} />
            <Route path="/dashboard/adminpanel/route" element={<Routess/>} />
            <Route path="/dashboard/adminpanel/cafe" element={<Cafe/>} />
            <Route path="/dashboard/adminpanel/cafedeal" element={<Cafedeal/>} />
            <Route path="/dashboard/adminpanel/employee" element={<Employees/>} />
            <Route path="/dashboard/adminpanel/enquiry" element={<Enquiry/>} />


          </Route>
        </Routes>
      </BrowserRouter> */}
      <AppRoutes/>
    </div>
  );
}

export default App;
