import React from "react";
import Navbar from "./navbar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
        <Navbar />
        <div className="mx-auto max-w-[1024px] px-unit-2 py-unit-2xl sm:px-unit-6">
          {children}
        </div>
      </div>
    )
}