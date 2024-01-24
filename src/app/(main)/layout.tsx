import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <div className="mb-auto flex justify-center">
          {children}
        </div>
        <Footer />
      </div>
    )
}