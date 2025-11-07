import { Link } from "react-router-dom";
import type React from "react";

interface AuthFormProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkTo: string;
  children: React.ReactNode;
  onSubmit?: () => void;
}

export function AuthForm({
  title,
  subtitle,
  linkText,
  linkTo,

  children,
  onSubmit,
}: AuthFormProps) {
  return (
    <div>
      <header className="flex flex-col items-center gap-y-4">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">
          {title}
        </h1>

        <p className="space-x-2">
          <span className="tracking-[-0.5px] text-gray-700">{subtitle}</span>
          <Link
            to={linkTo}
            className="font-medium tracking-[-0.5px] text-teal-900"
          >
            {linkText}
          </Link>
        </p>
      </header>

      <form onSubmit={onSubmit} className="mt-[60px] flex flex-col gap-y-4">
        {children}
      </form>
    </div>
  );
}
