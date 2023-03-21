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
    <Route path="/" element={<Home />}>
      <Route path="/login" element={<Login />} />
      <Route path="/riderSignUp" element={<RiderSignUp />} />
      <Route path="/learnerSignUp" element={<LearnerSignUp />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
