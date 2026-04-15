import type { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <div className="px-4 contain-content">{children}</div>;
}
