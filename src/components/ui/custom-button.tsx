"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
}

export function CustomButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        {
          "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700":
            variant === "default",
          "border-orange-500 text-orange-500 hover:bg-orange-500/20":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}