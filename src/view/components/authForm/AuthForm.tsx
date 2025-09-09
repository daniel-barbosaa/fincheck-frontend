import { Link } from "react-router-dom";
import { Button } from "../Button";
import type React from "react";

interface AuthFormProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkTo: string;
  buttonText: string;
  children: React.ReactNode;
}

export function AuthForm({
  title,
  subtitle,
  linkText,
  linkTo,
  buttonText,
  children,
}: AuthFormProps) {
  return (
    <div>
      <header className=" flex flex-col items-center gap-y-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          {title}
        </h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">{subtitle}</span>
          <Link
            to={linkTo}
            className="text-teal-900 font-medium tracking-[-0.5px]"
          >
            {linkText}
          </Link>
        </p>
      </header>

      <form action="" className="mt-[60px] flex flex-col gap-y-4">
        {children}

        <Button type="submit" className="mt-2">
          {buttonText}
        </Button>
      </form>
    </div>
  );
}
