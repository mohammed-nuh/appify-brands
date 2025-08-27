"use client";

import React from "react";
import { Home, Info, Briefcase, MessageSquare, Phone } from "lucide-react";
import { ExpandedTabs } from "@/components/ui/expanded-tabs";

const tabs = [
  { title: "Home", icon: Home, href: "#main" },
  { title: "About Us", icon: Info, href: "#about" },
  { title: "Services", icon: Briefcase, href: "#services" },
  { title: "Testimonials", icon: MessageSquare, href: "#testimonials" },
  { title: "Contact", icon: Phone, href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <ExpandedTabs tabs={tabs} />
    </nav>
  );
}
