"use client";
import {
  Button,
  Divider,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextNavbar,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  type ShortNavbarItemProps = {
    path: string;
    text: string;
  };
  function ShortNavbarItem({ path, text }: ShortNavbarItemProps) {
    return (
      <NavbarItem className="" isActive={pathname === path}>
        <Link href={path} className="text-black opacity-70 h-full w-full">
          {text}
        </Link>
      </NavbarItem>
    );
  }

  return (
    <NextNavbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-full shadow-md"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-black",
          // Hover navbar effect
          "transition-colors",
          "hover:after:content-['']",
          "hover:after:absolute",
          "hover:after:bottom-0",
          "hover:after:left-0",
          "hover:after:right-0",
          "hover:after:h-[2px]",
          "hover:after:rounded-[2px]",
          "hover:after:bg-black",
          "transition-all duration-1000 ease-in-out",
        ],
      }}
    >
      <NavbarContent className="" justify="start">
        <NavbarBrand>
          <p>Frey2Fades</p>
        </NavbarBrand>
      </NavbarContent>

      <div className="flex-grow" />

      {/* Hamburger button */}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Full size navbar */}
      <NavbarContent className="hidden lg:flex">
        <ShortNavbarItem path="/home" text="Home" />
        <ShortNavbarItem path="/portfolio" text="Portfolio" />
        {/* <ShortNavbarItem path="/contact" text="Contact" /> */}
        <Divider orientation="vertical" className="h-8" />
        <Link href="/booking" className="text-black h-full">
          <Button radius="sm">Book Now</Button>
        </Link>
      </NavbarContent>

      {/* Hamburger menu */}
      <NavbarMenu className="pb-10">
        <ShortNavbarItem path="/home" text="Home" />
        <ShortNavbarItem path="/portfolio" text="Portfolio" />
        {/* <ShortNavbarItem path="/contact" text="Contact" /> */}
        <Link href="/booking" className="text-black w-full">
          <Button radius="sm" className="w-full">
            Book Now
          </Button>
        </Link>
      </NavbarMenu>
    </NextNavbar>
  );
}
