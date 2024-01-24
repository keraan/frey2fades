import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
      </div>
    )
}