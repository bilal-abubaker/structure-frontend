import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Define item type for more structured menu content
export interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isDanger?: boolean;
}

interface CustomDropdownMenuProps {
  buttonVariant?: "ghost" | "secondary" | "default";
  buttonSize?: "sm" | "icon";
  buttonIcon: React.ReactNode;
  buttonClassName?: string;
  label?: string;
  menuItems: MenuItem[];
  buttonText?: string;
}

const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({
  buttonVariant = "ghost",
  buttonSize = "sm",
  buttonIcon,
  buttonClassName = "",
  label,
  menuItems,
  buttonText,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          className={buttonClassName}
        >
          {buttonIcon}
          <span
            className={
              buttonText
                ? "sr-only sm:not-sr-only sm:whitespace-nowrap"
                : "sr-only"
            }
          >
            {buttonText || "Menu"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
        {label && <DropdownMenuSeparator />}
        {menuItems.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            className={item.isDanger ? "text-red-600" : ""}
          >
            {item.icon}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdownMenu;
