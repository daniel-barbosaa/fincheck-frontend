import { useAuth } from "../../../app/hooks/use-auth";
import { Button } from "../../components/button";

export function Dashboard() {
  const { signout } = useAuth();

  return (
    <>
      <h1>Dashboard page</h1>
      <Button onClick={signout}>sair</Button>
    </>
  );
}
