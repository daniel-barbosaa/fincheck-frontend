import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/use-auth";
import { PageLoader } from "../view/components/ui/page-loader";

interface AuthGuardsProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardsProps) {
  const { signedIn, isLoading } = useAuth();

  if (isLoading) {
    return <PageLoader />;
  }

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
