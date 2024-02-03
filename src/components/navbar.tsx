"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="flex h-16 w-full items-center p-4">
      <div className="text-3xl font-bold">
        <Link href="/">
          <h1 className="">{`Kevin's insane study app`}</h1>
        </Link>
      </div>
      <div className="order-2 ml-auto">
        <NavigationMenu>
          <NavigationMenuList>
            <Link href="/maths" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Maths
              </NavigationMenuLink>
            </Link>
          </NavigationMenuList>
          <NavigationMenuList>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Software Design and Development
              </NavigationMenuLink>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
