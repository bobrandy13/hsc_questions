"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [windowDimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>();
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  if (!windowDimensions) {
    return <div>loading</div>;
  }

  if (windowDimensions.width < 1024) {
    // render the mobile menu
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Subjects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <p className={"p-2"}>Maths</p>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  return (
    <div className="sticky top-0 z-40 flex h-16 w-full items-center bg-white p-4 dark:bg-black">
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
          <NavigationMenuList>
            <Link href="/upload_own" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Upload your own
              </NavigationMenuLink>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
