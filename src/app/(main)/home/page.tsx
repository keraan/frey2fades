"use client";
import { Link, Button } from "@nextui-org/react";
import StickyCursor from "@/app/components/StickyCursor";
import { useRef } from "react";
import BookingButton from "@/app/components/BookingButton";

export default function Home() {
  const stickyElement = useRef(null);
  return (
    <div className="w-full">
      <StickyCursor stickyElement={stickyElement} />
      <div className="flex flex-col justify-center items-center m-1 h-full">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black opacity-70">
          Frey2Fades
        </h1>
        <div className="flex flex-row my-5">
          <p className="text-black opacity-70">
            A Blacktown based self taught barber
          </p>
        </div>
        <Link href="/booking" className="text-black mb-5">
          <Button
            radius="full"
            className="bg-gradient-to-tr from-black-500 to-white-500 shadow-lg"
            color="primary"
          >
            <BookingButton ref={stickyElement} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
