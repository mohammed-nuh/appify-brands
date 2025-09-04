"use client";

import Image from "next/image";
import "./loader.css";

export default function LogoLoader() {
  return (
    <div className="loader-container">
      <Image
        src="/appify_brands_glow_logo2.png" // ✅ from /public
        alt="Appify Brands Logo"
        width={100}
        height={100}
        className="logo-spin"
      />
    </div>
  );
}
