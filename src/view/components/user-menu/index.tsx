import { DropdownMenu } from "../dropdown";
import { DropdownMenuTrigger } from "../dropdown/trigger";
import { DropdownMenuContent } from "../dropdown/content";
import { DropdownMenuItem } from "../dropdown/item";
import { ExitIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../../app/hooks/use-auth";
import { Link } from "react-router-dom";

export function UserMenu() {
  const { signout, user } = useAuth();

  const name = user?.name.slice(0, 2);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex size-12 items-center justify-center rounded-full border border-teal-100 bg-teal-50">
          <span className="text-sm font-medium -tracking-tighter text-teal-900 uppercase">
            {name}
          </span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mt-3 w-32">
        <DropdownMenuItem
          className="flex items-center justify-between"
          onSelect={signout}
        >
          Sair
          <ExitIcon className="size-4" />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between">
          <Link to="/profile">Perfil</Link>
          <ExitIcon className="size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
