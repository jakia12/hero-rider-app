import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DashboardLaout from "../pages/dashboardLayout/DashboardLaout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

import SignUp from "../pages/signUp/SignUp";
import Main from '../layout/Main';

import NotFound from "../pages/notFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import DisplayError from "../components/displayError/DisplayError";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main/>}>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        
        <Route path="/login" element={<Login />} />
      </Route>
      {/* admin dashboard route */}
      <Route
        path="/dashboard"
        element={
          <DashboardLaout />
        }
        errorElement={<DisplayError />}
      >
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
             
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);
