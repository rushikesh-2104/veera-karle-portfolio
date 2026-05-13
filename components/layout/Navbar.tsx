"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT",
    "MAGAZINES",
    "SHOWREEL",
    "CONTACT",
  ];

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed z-50 w-full px-1 py-1 md:px-1">
        
        <nav className="flex justify-between px-2 py-2 md:px-1 md:pr-3 md:py-1 md:pb-3">

          {/* Logo */}
          <div className="relative pl-1 pt-3 h-[55px] w-[55px] md:h-[70px] md:w-[70px]">
            <Image
              src="/images/logo.png"
              alt="VK Logo"
              fill
              sizes="70px"
              priority
              className="object-contain"
            />
          </div>

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="text-base tracking-[0.3em] text-[#D4AF37] active:scale-90  pt-1 transition hover:text-[#D4AF37]"
          >
            MENU
          </button>

        </nav>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[999] overflow-y-auto bg-black/95 backdrop-blur-xl"
          >

            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-6 top-6 text-5xl text-white transition hover:text-[#D4AF37] md:right-8 md:top-8"
            >
              ×
            </button>

            {/* Menu Content */}
            <div className="flex min-h-screen flex-col justify-center px-10 md:px-20">

              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  onClick={() => setMenuOpen(false)}
                  className="group relative mb-5 w-fit overflow-hidden text-4xl font-light tracking-[0.15em] text-white sm:text-5xl md:mb-6 md:text-7xl"
                >

                  {/* Menu Text */}
                  <span className="relative z-10 transition duration-500 group-hover:text-[#D4AF37]">
                    {item}
                  </span>

                  {/* Underline */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></span>

                </motion.a>
              ))}

            </div>

            {/* Bottom Right Text */}
            <div className="absolute bottom-6 right-6 text-right text-xs text-[#D4AF37] tracking-[0.3em] md:bottom-10 md:right-10 md:text-sm">
              VEERA KARLE <br />
              DANCER • ACTRESS • MODEL
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}