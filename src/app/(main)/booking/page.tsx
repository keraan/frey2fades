"use client";
import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <div className="w-2/3">
      <InlineWidget
        url="https://calendly.com/khuynh8"
        styles={{
          height: "100vh",
        }}
      />
    </div>
  );
}
