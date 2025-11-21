import type { HTMLAttributes } from "react";
import { cn } from "../../app/utils/class-name-merge";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: Readonly<CardProps>) {
  return <div className={cn("rounded-2xl bg-white", className)} {...props} />;
}
