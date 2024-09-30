"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

import Image from "next/image";
// import { products, resources } from "./header";

export function MobileHeader() {
  const [openMenu, setIsOpenMenu] = React.useState(false);

  return (
    <header className={cn("lg:hidden py-5 z-50 bg-white ] items-center")}>
      <div className=" container flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={"/images/Logo.svg"}
              alt="logo"
              width={164}
              height={62}
            />
          </Link>
        </div>
        <div className=" hidden lg:block">
          <NavigationsLinks setIsOpenMenu={setIsOpenMenu} />
        </div>

        <div className=" lg:hidden">
          <Sheet open={openMenu} onOpenChange={setIsOpenMenu}>
            <SheetTrigger asChild>
              <button>
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <NavigationsLinks setIsOpenMenu={setIsOpenMenu} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

interface NavigationsLinksProps {
  setIsOpenMenu: (isOpen: boolean) => void;
}
const NavigationsLinks: React.FC<NavigationsLinksProps> = ({
  setIsOpenMenu,
}) => {
  return (
    <NavigationMenu className=" w-full mx-auto lg:mx-0">
      <NavigationMenuList className="flex-col gap-4 lg:flex-row">
        <NavigationMenuItem onClick={() => setIsOpenMenu(false)}>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem onClick={() => setIsOpenMenu(false)}>
          <Link href="/ship-particulars" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Ship Particulars
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem onClick={() => setIsOpenMenu(false)}>
          <Link href="/emission-estimation" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Emission Estimations
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem onClick={() => setIsOpenMenu(false)}>
          <Link href="/sg-port-emission" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              SG Port Emissions
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
