import { Outlet } from "react-router-dom";
import illustration from "../../assets/Login.png";

import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex h-full w-full">
      <div className="w-full h-full flex justify-center items-center flex-col lg:w-1/2 gap-y-16">
        <Logo className="h-6 text-gray-500" />

        <div className="w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>

      <div className="w-1/2 h-full hidden justify-center items-center p-8 lg:flex">
        <img
          src={illustration}
          className="object-cover w-full max-w-[656px] max-h-[960px] h-full select-none rounded-4xl"
        />

        <div className="max-w-[656px] bg-white p-10 absolute rounded-b-4xl bottom-8">
          <Logo className="text-teal-900 h-8" />
          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
