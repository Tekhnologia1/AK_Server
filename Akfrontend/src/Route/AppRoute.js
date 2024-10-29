import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adminpanel from '../views/adminpanel/Adminpanel';
import Orderplace from '../views/adminpanel/Orderplace';
// import Product from '../views/adminpanel/Product';
// import Areas from '../views/adminpanel/Areas';
import Routess from '../views/adminpanel/route/Routess';
// import Cafe from '../views/adminpanel/Cafe';
import Cafedeal from '../views/adminpanel/Cafedeal';
import Dashboard from '../views/dashboard/Dashboard';
import Employees from '../views/adminpanel/Employees';
import Enquiry from '../views/adminpanel/Enquiry';
import Login from "../views/pages/login/Login";
import DefaultLayout from "../layout/DefaultLayout";
import Register from "../views/pages/register/Register";
import ProtectedRoute from '../components/ProtectedRoute'
import Home from "../views/home1/Home";
import PaymentCheckout from "../views/home/Paymentcheckout";
import Areas from "../views/areacomponent/Areas";
import Cafe from "../views/adminpanel/cafe/Cafe";
import CafeUser from "../views/adminpanel/cafeuser/CafeUser";
import CafeDeals from "../views/adminpanel/Cafedeals/CafeDeals";
import Product from "../views/adminpanel/product/Product";
import Payment from "../views/adminpanel/payment/Payment";
import Modulepermmission from "../views/adminpanel/modulepermmission/Modulepermmission";
import Invoices from "../views/adminpanel/invoices/Invoices";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/register" element={< Register/>} /> 
        <Route path="/login" element={<Login />} />
   

        <Route path="/dashboard" element={ <DefaultLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/adminpanel" element={<Adminpanel />} />
          <Route path="/dashboard/adminpanel/product" element={<Product />} />
          <Route path="/dashboard/adminpanel/areas" element={<Areas />} />
          <Route path="/dashboard/adminpanel/order" element={<Orderplace />} />
          <Route path="/dashboard/adminpanel/route" element={<Routess />} />
          <Route path="/dashboard/adminpanel/cafe" element={<Cafe/>} />
          <Route path="/dashboard/adminpanel/cafeduser" element={<CafeUser />} />
          <Route path="/dashboard/adminpanel/cafedeal" element={<CafeDeals />} />

          <Route path="/dashboard/adminpanel/employee" element={<Employees />} />
          <Route path="/dashboard/adminpanel/payment" element={<Payment />} />

          <Route path="/dashboard/adminpanel/modulepermmission" element={<Modulepermmission />} />

          <Route path="/dashboard/adminpanel/invoices" element={<Invoices/>} />

          <Route path="/dashboard/adminpanel/enquiry" element={<Enquiry />} />
          <Route path="/dashboard/adminpanel/order/home" element={<Home/>} />
          <Route path="/dashboard/adminpanel/order/paymentcheckout" element={<PaymentCheckout/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
