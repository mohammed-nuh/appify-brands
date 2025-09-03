"use client";

import AboutSection from '@/app/my_components/AboutSection';
import ServicesSection from '@/app/my_components/ServicesSection';
import TestimonialsSection from '@/app/my_components/TestimonialsSection';
import ContactSection from '@/app/my_components/ContactSection';
import { useEffect } from 'react';
import WrapButton from '@/components/ui/wrap-button';
import { Globe } from "lucide-react";
import Navbar from "./my_components/Navbar";
import { motion } from "framer-motion";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
      {/* Hero Section */}
      <motion.main
        id="main"
        className="flex flex-col items-center justify-center text-center min-h-screen"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="transform origin-center scale-[1] sm:scale-[1.2] md:scale-[1.4]">
          <h1
            className="flex flex- items-center justify-center gap-2 sm:gap-3 text-2xl sm:text-4xl md:text-5xl font-extrabold py-4
              bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700
              bg-clip-text text-transparent animate-gradient"
          >
            Welcome to
              <img
                src="/appify_brands_glow_logo2.png"
                alt="AppifyBrands Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain pt-1"
              />
              AppifyBrands
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">
            We turn brands into apps.
          </p>

          <div className="w-full flex flex-col items-center justify-center">
            <WrapButton className="mt-5" href="#services">
              <Globe className="animate-spin " />
              Get started
            </WrapButton>
          </div>
        </div>
      </motion.main>

      {/* Services */}
      <motion.div
        id="services"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <ServicesSection />
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <TestimonialsSection />
      </motion.div>

      {/* About */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <AboutSection />
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <ContactSection />
      </motion.div>

      <Navbar />
    </>
  );
}
