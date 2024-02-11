"use client";
import { InlineWidget } from "react-calendly";

export default function Booking() {
  const url = `https://calendly.com/${process.env.NEXT_PUBLIC_CALENDLY_KEY}`;
  return (
    <div className="w-2/3">
      <InlineWidget
        url={url}
        styles={{
          height: "100vh",
        }}
      />
    </div>
  );
}
