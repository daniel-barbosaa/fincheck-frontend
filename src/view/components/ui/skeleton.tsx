import { cn } from "../../../app/utils/class-name-merge";

interface SkeletonProps extends React.ComponentProps<"div"> {
  quantity?: number;
}

export function Skeleton({ quantity = 1, className, ...props }: SkeletonProps) {
  const array = Array.from({ length: quantity }).map((_, index) => index + 1);

  return array.map((item) => (
    <div
      key={item}
      className={cn("h-5 w-28 animate-pulse rounded-lg bg-gray-200", className)}
      {...props}
    />
  ));
}
