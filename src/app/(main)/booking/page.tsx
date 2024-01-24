"use client"
import { InlineWidget } from "react-calendly";

export default function Booking() {
    return (
        <div>
            <InlineWidget 
                url="https://calendly.com/khuynh8" 
                styles={
                    {
                        height: '1000px', 
                        width: '1000px',
                    }
                }
            />
        </div>
    )
}