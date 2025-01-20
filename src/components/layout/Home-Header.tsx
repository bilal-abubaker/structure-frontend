import React, { useState } from 'react';
import { Phone, Mail, Menu } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#1B2537] p-4 text-white">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            Calen<span className="text-orange-500">dax</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="tel:+12487219539"
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <Phone className="h-4 w-4" />
            <span>+1 (248) 721 9539</span>
          </Link>
          <Link
            href="mailto:info@rev-research.com"
            className="flex items-center gap-2 hover:text-orange-500"
          >
            <Mail className="h-4 w-4" />
            <span>info@rev-research.com</span>
          </Link>
          <Link href="/contact" className="hover:text-orange-500">
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={handleMenuToggle}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="flex items-center justify-center rounded-md p-2 hover:bg-gray-700"
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1B2537] p-6 text-white">
              <SheetTitle className="text-white">Menu</SheetTitle>
              <SheetHeader>
                {/* <nav className="space-y-4">
                  <Link
                    href="tel:+12487219539"
                    className="flex items-center gap-2 hover:text-orange-500"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+1 (248) 721 9539</span>
                  </Link>
                  <Link
                    href="mailto:info@rev-research.com"
                    className="flex items-center gap-2 hover:text-orange-500"
                  >
                    <Mail className="h-4 w-4" />
                    <span>info@rev-research.com</span>
                  </Link>
                  <Link href="/contact" className="hover:text-orange-500">
                    Contact Us
                  </Link>
                </nav> */}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
