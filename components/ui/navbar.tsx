import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <div className="w-full align-middle flex justify-center p-2 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="px-4 py-2 text-sm font-medium"
            >
              About Me
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="px-4 py-2 text-sm font-medium"
            >
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="px-4 py-2 text-sm font-medium"
            >
              Certificates
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="px-4 py-2 text-sm font-medium"
            >
              Contact Me
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
