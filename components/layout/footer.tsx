"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative h-5 flex justify-center overflow-hidden  border-white/10 bg-black py-10">

      {/* Glow */}
      <div className="absolute justify-center h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:px-10"
      >

        <p className="text-xs tracking-[0.28em] text-white/35">
          DESIGNED & CREATED BY{" "}
          <span className="text-[#D4AF37]">
            RUSHIKESH MHATRE
          </span>
        </p>

      </motion.div>

    </footer>
  );
}