"use client";

import AboutSection from '@/app/my_components/AboutSection';
import ServicesSection from '@/app/my_components/ServicesSection';
import TestimonialsSection from '@/app/my_components/TestimonialsSection';
import ContactSection from '@/app/my_components/ContactSection';
import { useEffect } from 'react';
import WrapButton from '@/components/ui/wrap-button';
import { Globe } from "lucide-react";
import Navbar from "./my_components/Navbar";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          scrollToSection(targetId);
        }
      });
    });
  }, []);

  return (
    <>
      <main
        id="main"
        className="flex flex-col items-center justify-center text-center min-h-screen"
      >
        <div className="transform origin-center scale-[1.4]">
          <h1
            className="flex items-center justify-center gap-3 text-4xl sm:text-5xl font-extrabold py-4
      bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 
      bg-clip-text text-transparent animate-gradient"
          >
            Welcome to
            <span className="flex items-center gap-1">
              <img
                src="/appify_brands_glow_logo2.png"
                alt="AppifyBrands Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain pt-1"
              />
              AppifyBrands
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">
            We turn brands into apps.
          </p>

          <div className="w-full flex flex-col items-center justify-center">
            <WrapButton className="mt-5" href="#services">
              <Globe className="animate-spin " />
              Get started
            </WrapButton>
          </div>
        </div>
      </main>


      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Navbar />

    </>
  );
}
