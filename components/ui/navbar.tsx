"use client";

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/dark";

export default function Navbar() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let lastScrollY = window.scrollY;

    const updateOffset = () => {
      cancelAnimationFrame(frameId);

      frameId = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;
        const nextOffset = scrollingDown ? -72 : 0;

        setOffsetY(nextOffset);
        lastScrollY = currentScrollY;
      });
    };

    updateOffset();

    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <div
      className="w-full align-middle flex justify-center p-2 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ease-out will-change-transform"
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/home#about"
              className="px-4 py-2 text-sm font-medium"
            >
              About Me
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/home#projects"
              className="px-4 py-2 text-sm font-medium"
            >
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/home#certificates"
              className="px-4 py-2 text-sm font-medium"
            >
              Certificates
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/home#contact"
              className="px-4 py-2 text-sm font-medium"
            >
              Contact Me
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
