"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-24 md:px-12 lg:px-20">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          {/* Small Heading */}
          <p className="mb-2 text-sm tracking-[0.4em] text-[#D4AF37]">
            ABOUT VEERA
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            Elegance In Motion,
            <br />
            Emotion In Expression.
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-[2] text-white/70 md:text-lg">
            Veera Karle is a passionate performer blending dance,
            acting and fashion into cinematic storytelling.
            Through movement, emotion and artistic presence,
            she creates experiences that feel graceful,
            expressive and unforgettable.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-3xl text-[#D4AF37] md:text-4xl">
                3+
              </h3>
              <p className="mt-2 text-xs tracking-[0.2em] text-white/50 md:text-sm">
                YEARS
              </p>
            </div>

            <div>
              <h3 className="text-3xl text-[#D4AF37] md:text-4xl">
                10+
              </h3>
              <p className="mt-2 text-xs tracking-[0.2em] text-white/50 md:text-sm">
                SHOWS
              </p>
            </div>

            <div>
              <h3 className="text-3xl text-[#D4AF37] md:text-4xl">
                5+
              </h3>
              <p className="mt-2 text-xs tracking-[0.2em] text-white/50 md:text-sm">
                PROJECTS
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-[30px]">

            <Image
              src="/images/about.png"
              alt="Veera Karle"
              width={900}
              height={900}
              loading="eager"
              priority
              className="h-[500px]  w-full object-cover md:h-[700px]"
            />


            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}