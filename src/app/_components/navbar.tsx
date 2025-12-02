"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false);
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 z-50 bg-background w-full border-b-3 border-primary flex flex-col">
      <div className="flex w-full justify-between items-center p-2">
        <Link
          className="flex flex-row items-center text-xl font-black mr-2"
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
        >
          <Image
            src="/nav-icon.webp"
            alt="SSA at UCSD"
            width={72}
            height={72}
            className="mr-1"
          />
          at UC San Diego
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:block ml-auto mr-4">
          <NavigationMenuList className="gap-3">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  className="text-lg font-bold hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem className="ml-1">
              <NavigationMenuLink
                className="text-lg bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:text-primary-foreground h-10 px-4 py-2"
                href="https://members.ssaucsd.org"
                target="_blank"
              >
                Member Login
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 border-t border-dashed border-primary/20">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-bold hover:text-primary transition-colors"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://members.ssaucsd.org"
            target="_blank"
            className="text-lg bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 hover:text-primary-foreground px-4 py-2 mt-2"
            onClick={() => setIsOpen(false)}
          >
            Member Login
          </Link>
        </div>
      </div>
    </div>
  );
}
