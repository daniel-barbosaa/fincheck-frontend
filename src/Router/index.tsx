import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./auth-guard";

import { AuthLayout } from "../view/layouts/auth-layout";
import { lazy } from "react";

const Login = lazy(() => import("../view/pages/login/index"));
const Register = lazy(() => import("../view/pages/register/index"));
const Dashboard = lazy(() => import("../view/pages/dashboard/index"));
const Profile = lazy(() => import("../view/pages/profile/index"));

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
