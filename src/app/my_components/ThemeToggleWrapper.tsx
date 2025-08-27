"use client";

import React from "react";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

export default function ThemeToggleWrapper() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <ThemeToggleButton variant="circle-blur" start="top-left" />
    </div>
  );
}
