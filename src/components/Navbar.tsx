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
  } from "@/components/ui/navigation-menu"
  

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
                    <div key={path.href} className="p-4">
                        <NavigationMenuItem key={path.href}>
                            <NavigationMenuLink href={path.href} className="hover:text-blue-500 transition-colors duration-200">
                                {path.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </div>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    </div>
);
};

export default Navbar;
