"use client"
import { Link, NavbarBrand, NavbarContent, NavbarItem, Navbar as NextNavbar } from "@nextui-org/react"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    type ShortNavbarItemProps = {
        path: string,
        text: string
    }
    function ShortNavbarItem({ path, text }: ShortNavbarItemProps) {
        return (
            <NavbarItem className="hover:bg-slate-50" isActive={pathname === path}>
                <Link href={path} className="text-black" >{text}</Link>
            </NavbarItem>
        )
    }

    return (
        <NextNavbar 
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
                ],
            }}
            >
            <NavbarBrand>
                <p>Frey 2 Fades</p>
            </NavbarBrand>
            <NavbarContent className="gap-5">
                <ShortNavbarItem path="/home" text="Home"/>
                <ShortNavbarItem path="/portfolio" text="Portfolio"/>
                <ShortNavbarItem path="/contact" text="Contact"/>
            </NavbarContent>
        </NextNavbar>
    )
}