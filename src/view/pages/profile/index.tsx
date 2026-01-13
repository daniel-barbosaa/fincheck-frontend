import { Link } from "react-router-dom";
import { useAuth } from "../../../app/hooks/use-auth";

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <h1>Perfil</h1>
      <div>
        <Link to="/">Dashboard</Link>
        <span>{user?.name}</span>
      </div>
    </>
  );
}
