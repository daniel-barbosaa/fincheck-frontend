import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./auth-guard";
import { Login } from "../view/pages/login";
import { Register } from "../view/pages/register";
import { Dashboard } from "../view/pages/dashboard";
import { AuthLayout } from "../view/layouts/auth-layout";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
