"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BikeBoxBookingProps {
  type: "daily" | "weekly";
  variant?: "outline" | "default";
}

export function BikeBoxBooking({
  type,
  variant = "default",
}: BikeBoxBookingProps) {
  const handleBooking = () => {
    const subject =
      type === "daily"
        ? "Bike Box Daily Rental Request"
        : "Bike Box Weekly Rental Request";

    const body = `Hello,

I would like to rent the Bike Box Alan for the following dates:

Pickup Date: [Please specify]
Dropoff Date: [Please specify]

Thank you!`;

    const mailtoLink = `mailto:ramona.furter@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <button
      onClick={handleBooking}
      className={cn(
        buttonVariants({
          variant: variant === "outline" ? "outline" : "default",
        }),
        "w-full",
        variant === "outline"
          ? "border-black text-black hover:bg-black hover:text-white"
          : "bg-black text-white hover:bg-gray-800",
      )}
    >
      Book {type === "daily" ? "Daily" : "Weekly"} Rental
    </button>
  );
}
