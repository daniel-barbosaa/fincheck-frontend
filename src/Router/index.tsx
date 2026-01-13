import * as Sentry from "@sentry/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./auth-guard";

import { PublicLayout } from "../view/layouts/public-layout";
import { lazy } from "react";
import { PrivateLayout } from "../view/layouts/private-layout";

const Login = lazy(() => import("../view/pages/login/index"));
const Register = lazy(() => import("../view/pages/register/index"));
const Dashboard = lazy(() => import("../view/pages/dashboard/index"));
const Profile = lazy(() => import("../view/pages/profile/index"));

const SentryBrowserRouter = Sentry.withSentryRouting(BrowserRouter);

export function Router() {
  return (
    <SentryBrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<PublicLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route element={<PrivateLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </SentryBrowserRouter>
  );
}
