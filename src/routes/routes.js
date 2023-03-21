import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../pages/login/Login";
import LearnerSignUp from "../pages/signUp/LearnerSignUp";
import RiderSignUp from "../pages/signUp/RiderSignUp";

import SignUp from "../pages/signUp/RiderSignUp";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login />} />
        <Route path="/riderSignUp" element={<RiderSignUp />} />
        <Route path="/learnerSignUp" element={<LearnerSignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
      {/* admin dashboard route */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
        errorElement={<DislayError />}
      >
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Overview />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/myOrders"
          element={
            <BuyerRoute>
              <MyOrder />
            </BuyerRoute>
          }
        />
        <Route
          path="/dashboard/payment/:id"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
          loader={paymentLoader}
        ></Route>

        <Route
          path="/dashboard/addProducts"
          element={
            <SellerRoute>
              <AddProduct />
            </SellerRoute>
          }
        />

        <Route
          path="/dashboard/myProducts"
          element={
            <SellerRoute>
              <MyProduct />
            </SellerRoute>
          }
        />

        <Route
          path="/dashboard/allSellers"
          element={
            <AdminRoute>
              <AllSellers />
            </AdminRoute>
          }
        />

        <Route
          path="/dashboard/allBuyers"
          element={
            <AdminRoute>
              <AllBuyers />
            </AdminRoute>
          }
        />

        <Route
          path="/dashboard/reportedProducts"
          element={
            <AdminRoute>
              <ReportedProducts />
            </AdminRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);
