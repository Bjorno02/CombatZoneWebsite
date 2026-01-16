import { cn } from "@/lib/utils";
import { CONTAINER_MAX_WIDTH, CONTAINER_PADDING } from "@/lib/constants";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "default" | "wide";
}

export function Container({ children, className, maxWidth = "default" }: ContainerProps) {
  const maxWidthClass = maxWidth === "wide" ? "max-w-[1400px]" : CONTAINER_MAX_WIDTH;
  
  return (
    <div className={cn(maxWidthClass, "mx-auto", CONTAINER_PADDING, className)}>
      {children}
    </div>
  );
}
