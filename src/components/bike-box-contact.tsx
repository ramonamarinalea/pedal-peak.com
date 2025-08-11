"use client";

import { Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BikeBoxContact() {
  const handleContact = () => {
    const subject = "Bike Box Rental Inquiry";

    const body = `Hello,

I am interested in renting the Bike Box Alan.

Planned rental dates:
Pickup Date: [Please specify]
Dropoff Date: [Please specify]

Thank you!`;

    const mailtoLink = `mailto:box@pedal-peak.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <button
      onClick={handleContact}
      className={cn(buttonVariants(), "bg-black text-white hover:bg-gray-800")}
    >
      <Mail className="mr-2 h-4 w-4" />
      Get in Touch
    </button>
  );
}
