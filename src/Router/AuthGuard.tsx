import { Navigate, Outlet } from "react-router-dom";
interface AuthGuardsProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardsProps) {
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
