import { create } from 'zustand';

interface SidebarStore {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isCollapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: (open: boolean) => set({ isOpen: open }),
  isCollapsed: false,
  setCollapsed: (collapsed: boolean) => set({ isCollapsed: collapsed }),
  toggleSidebar: () =>
    set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
