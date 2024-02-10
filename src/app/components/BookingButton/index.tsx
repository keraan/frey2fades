import { forwardRef } from "react";

const BookingButton = forwardRef(function index(props, ref: any) {
  return (
    <div ref={ref}>
      <p className="text-white font-medium">Book Now</p>
    </div>
  );
});

export default BookingButton;
