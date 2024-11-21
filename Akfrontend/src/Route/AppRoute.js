
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import DefaultLayout from "../layout/DefaultLayout";
import Loader from "./Loader"; // A fallback loader component (optional)

// Lazy load components
const Adminpanel = lazy(() => import("../views/adminpanel/Adminpanel"));
const Orderplace = lazy(() => import("../views/adminpanel/placeOrder/index"));
const Routess = lazy(() => import("../views/adminpanel/route/Routess"));
const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));
const Employees = lazy(() => import("../views/adminpanel/employees/Employees"));
const Login = lazy(() => import("../views/pages/login/Login"));
const Register = lazy(() => import("../views/pages/register/Register"));
const Areas = lazy(() => import("../views/areacomponent/Areas"));
const Cafe = lazy(() => import("../views/adminpanel/cafe/Cafe"));
const CafeUser = lazy(() => import("../views/adminpanel/cafeuser/CafeUser"));
const CafeDeals = lazy(() => import("../views/adminpanel/Cafedeals/CafeDeals"));
const Product = lazy(() => import("../views/adminpanel/product/Product"));
const Payment = lazy(() => import("../views/adminpanel/payment/Payment"));
const Modulepermmission = lazy(() =>
  import("../views/adminpanel/modulepermmission/Modulepermmission")
);
const Invoices = lazy(() => import("../views/adminpanel/invoices/Invoices"));
const ProductList = lazy(() =>
  import("../views/adminpanel/placeOrder/productList")
);
const PaymentCheckout = lazy(() =>
  import("../views/adminpanel/placeOrder/paymentcheckout")
);
const Enquiry = lazy(() => import("../views/adminpanel/enquiry/Enquiry"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense >
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/adminpanel" element={<Adminpanel />} />
              <Route path="/adminpanel/product" element={<Product />} />
              <Route path="/adminpanel/areas" element={<Areas />} />
              <Route path="/adminpanel/order" element={<Orderplace />} />
              <Route path="/adminpanel/route" element={<Routess />} />
              <Route path="/adminpanel/cafe" element={<Cafe />} />
              <Route path="/adminpanel/cafeduser" element={<CafeUser />} />
              <Route path="/adminpanel/cafedeal" element={<CafeDeals />} />
              <Route path="/adminpanel/employee" element={<Employees />} />
              <Route path="/adminpanel/payment" element={<Payment />} />
              <Route
                path="/adminpanel/modulepermmission"
                element={<Modulepermmission />}
              />
              <Route path="/adminpanel/invoices" element={<Invoices />} />
              <Route path="/adminpanel/enquiry" element={<Enquiry />} />
              <Route
                path="/adminpanel/order/home"
                element={<ProductList />}
              />
              <Route
                path="/adminpanel/order/paymentcheckout"
                element={< PaymentCheckout/>}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
