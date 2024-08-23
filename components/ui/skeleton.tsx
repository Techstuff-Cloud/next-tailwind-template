import { cn } from "@/lib/utils/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-surface-400-500-token",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
