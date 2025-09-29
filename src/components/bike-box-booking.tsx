"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BikeBoxBookingProps {
  type: "daily" | "weekly" | "2weeks" | "3weeks" | "4weeks";
  variant?: "outline" | "default";
}

export function BikeBoxBooking({
  type,
  variant = "default",
}: BikeBoxBookingProps) {
  const handleBooking = () => {
    const rentalTypeText = {
      daily: "Daily",
      weekly: "Weekly (1 Week)",
      "2weeks": "2 Weeks",
      "3weeks": "3 Weeks",
      "4weeks": "4 Weeks",
    };

    const subject = `Bike Box ${rentalTypeText[type]} Rental Request`;

    const body = `Hello,

I would like to rent the Bike Box Alan for ${rentalTypeText[type].toLowerCase()}.

Pickup Date: [Please specify]
Dropoff Date: [Please specify]

Thank you!`;

    const mailtoLink = `mailto:ramona.furter@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const getButtonText = () => {
    switch (type) {
      case "daily":
        return "Book Daily Rental";
      case "weekly":
        return "Book Weekly Rental";
      case "2weeks":
        return "Book 2 Weeks";
      case "3weeks":
        return "Book 3 Weeks";
      case "4weeks":
        return "Book 4 Weeks";
      default:
        return "Book Rental";
    }
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
      {getButtonText()}
    </button>
  );
}
