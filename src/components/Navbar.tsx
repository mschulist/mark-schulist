"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const paths = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <NavigationMenu>
        <NavigationMenuList>
          {paths.map((path) => (
            <a
              href={path.href}
              key={path.href}
              className="p-4 from-cyan-950 to-zinc-800 bg-gradient-to-br rounded-2xl hover:text-cyan-400 transition-colors duration-300 ease-in-out"
            >
              {path.label}
            </a>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
