import { Outlet } from "react-router-dom";
import illustration from "../../assets/Login.png";
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-16 lg:w-1/2">
        <Logo className="h-6 text-gray-500" />

        <div className="w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>

      <div className="hidden h-full w-1/2 items-center justify-center p-8 lg:flex">
        <img
          src={illustration}
          className="h-full max-h-[960px] w-full max-w-[656px] rounded-4xl object-cover select-none"
        />

        <div className="absolute bottom-8 mx-8 max-w-[656px] rounded-b-4xl bg-white p-10">
          <Logo className="h-8 text-teal-900" />
          <p className="mt-6 text-xl font-medium text-gray-700">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
