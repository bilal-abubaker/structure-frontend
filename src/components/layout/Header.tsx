'use client';

import { Bell, Lock, Menu, CircleUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSidebarStore } from '@/stores/sidebar';
import CustomDropdownMenu from '../ui/menu-item';
import { useAuth } from '@/hooks/useAuth';

export interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isDanger?: boolean;
}

export function Header() {
  const { toggleSidebar, isOpen, setIsOpen } = useSidebarStore();

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  const menuItems: MenuItem[] = [{ label: 'Logout', onClick: handleLogout }];

  return (
    <header className="bg-surface sticky top-0 z-40 h-16 border-b border-border/40 backdrop-blur-sm">
      <div className="flex h-full items-center justify-end px-4 lg:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        {/* <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button> */}

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Lock className="h-5 w-5" />
          </Button>
          <CustomDropdownMenu
            buttonVariant="secondary"
            buttonSize="icon"
            buttonIcon={<CircleUser className="h-5 w-5" />}
            buttonClassName="rounded-full"
            label="My Account"
            menuItems={menuItems}
          />
        </div>
      </div>
    </header>
  );
}
