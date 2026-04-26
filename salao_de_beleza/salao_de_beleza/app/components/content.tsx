import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface ContentProps {
  children: ReactNode;
  className?: string;
}

export function Content({ children, className }: ContentProps) {
  return (
    <div className={cn("px-4 contain-content", className)}>{children}</div>
  );
}
