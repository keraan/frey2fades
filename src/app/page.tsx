"use client"
import { InlineWidget } from "react-calendly";

export default function Home() {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/khuynh8" />
    </div>
  );
}
