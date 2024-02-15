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

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { SignOutButton } from "@clerk/nextjs";
import { Input } from "./ui/input";
import { CommandMenu } from "./CommandMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
    // render the mobile menu if the screen size is less than 1024 px;
    return (
      <div className="flex w-screen items-center p-4">
        <div className="text-xl font-bold">
          <Link href="/">
            <h1 className="">{`HSC Questions`}</h1>
          </Link>
        </div>
        <div className="mr-auto">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/maths" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Maths
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    );
  }
  return (
    <div className="sticky top-0 z-40 flex h-16 w-full items-center p-4 dark:bg-black bg-white ">
      <div className="text-3xl font-bold">
        <Link href="/">
          <h1 className="">{`HSC Questions`}</h1>
        </Link>
      </div>
      <div className="order-2 ml-auto">
        <NavigationMenu>
          <NavigationMenuList className="mr-3">
            {/* search field */}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xl font-medium text-muted-foreground opacity-100">
              <span className="text-xl">Ctrl</span>;<p> to search</p>
            </kbd>
            <CommandMenu />
          </NavigationMenuList>
          <NavigationMenuList>
            <Link href="/maths" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Maths
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
