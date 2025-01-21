'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar';
import { Calendar, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const menuItems = [{ icon: Users, label: 'User Management', href: '/users' }];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen, setIsOpen, isCollapsed, setCollapsed } = useSidebarStore();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleNavigation = (href: string, hasSubItems: boolean) => {
    if (!hasSubItems) {
      router.push(href);
      setIsOpen(false);
    } else {
      toggleSubMenu(href);
    }
  };

  const toggleSubMenu = (href: string) => {
    setExpandedItem(expandedItem === href ? null : href);
  };

  useEffect(() => {
    const mainContent = document.querySelector('[data-sidebar-collapsed]');
    if (mainContent) {
      mainContent.setAttribute(
        'data-sidebar-collapsed',
        isCollapsed.toString()
      );
    }
  }, [isCollapsed]);

  return (
    <div>
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 transform bg-[hsl(var(--sidebar))] transition-all duration-200 ease-in-out lg:translate-x-0',
          {
            '-translate-x-full': !isOpen,
            'translate-x-0': isOpen,
            'w-64': !isCollapsed,
            'w-16': isCollapsed,
          }
        )}
      >
        <div className="p-4">
          <div
            className={cn('mb-8 flex items-center gap-2', {
              'justify-center': isCollapsed,
            })}
          >
            <Calendar className="h-8 w-8 flex-shrink-0 text-white" />
            {!isCollapsed && (
              <span className="text-xl font-bold text-white">Dummy</span>
            )}
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.href}>
                <div
                  className={cn(
                    'flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    pathname === item.href ||
                      pathname.startsWith(item.href + '/')
                      ? 'bg-primary text-white'
                      : 'text-white/80 hover:bg-primary/20 hover:text-white',
                    {
                      'justify-center': isCollapsed,
                    }
                  )}
                  onClick={() => handleNavigation(item.href, false)}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  User Management
                </div>
              </div>
            ))}
          </nav>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-6 hidden h-6 w-6 rounded-full border border-border bg-background shadow-sm lg:flex"
          onClick={() => setCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
