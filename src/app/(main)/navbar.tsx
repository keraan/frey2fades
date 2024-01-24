"use client"
import { Divider, Link, NavbarBrand, NavbarContent, NavbarItem, Navbar as NextNavbar } from "@nextui-org/react"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    type ShortNavbarItemProps = {
        path: string,
        text: string
    }
    function ShortNavbarItem({ path, text }: ShortNavbarItemProps) {
        return (
            <NavbarItem className="" isActive={pathname === path}>
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
                    "transition-all duration-1000 ease-in-out"
                ],
            }}
            className="shadow-md"
            >
            <NavbarBrand>
                <p>Frey 2 Fades</p>
            </NavbarBrand>
            <NavbarContent className="gap-5 transition-all">
                <ShortNavbarItem path="/home" text="Home"/>
                {/* <Divider orientation="vertical" className="h-8"/> */}
                <ShortNavbarItem path="/portfolio" text="Portfolio"/>
                <ShortNavbarItem path="/contact" text="Contact"/>
                <Divider orientation="vertical" className="h-8"/>
                <NavbarItem isActive={pathname === '/booking'}>
                <Link href='/booking' className="text-black " >Book Now</Link>
            </NavbarItem>
            </NavbarContent>
        </NextNavbar>
    )
}