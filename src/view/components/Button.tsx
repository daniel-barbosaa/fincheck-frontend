import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="h-12 rounded-2xl bg-teal-900 px-6 font-medium text-white transition-all hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
    />
  );
}
