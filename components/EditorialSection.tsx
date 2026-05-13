"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const magazines = [
  {
    id: "01",
    image: "/magazins/mag1.png",
    whatsapp:
      "https://wa.me/918356947428?text=Hi%20Veera,%20I%20want%20to%20download%20Magazine%2001",
  },
  {
    id: "02",
    image: "/magazins/mag2.png",
    whatsapp:
      "https://wa.me/918356947428?text=Hi%20Veera,%20I%20want%20to%20download%20Magazine%2002",
  },
];

export default function EditorialSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-10 px-6 md:px-12 lg:px-20"
        >

          <p className="mb-2 text-xs tracking-[0.45em] text-[#D4AF37] md:text-sm">
            FEATURED EDITORIALS
          </p>

          <h2 className="text-4xl font-light leading-none text-white sm:text-5xl md:text-6xl">
            Magazine
            <br />
            Covers
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 md:px-12 lg:px-20">

          {/* Existing Magazine Cards */}
          {magazines.map((mag, index) => (
            <motion.a
              key={mag.id}
              href={mag.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group relative w-[260px] flex-shrink-0 snap-center cursor-pointer md:w-[28vw]"
            >

              {/* Number */}
              <div className="absolute left-1 top-4 z-20 text-4xl font-light text-white/10 md:text-6xl">
                {mag.id}
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-[24px] bg-[#D4AF37]/0 blur-2xl transition-all duration-700 group-hover:bg-[#D4AF37]/20"></div>

              {/* Card */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm">

                <Image
                  src={mag.image}
                  alt="Magazine Cover"
                  width={800}
                  height={1200}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[560px]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Download Text */}
                <div className="absolute opacity-0 hover:opacity-100 bottom-0 left-0 right-0 flex items-center justify-center bg-black/60 py-4 backdrop-blur-md">
                  <p className="text-sm tracking-[0.2em] text-white ">
                    CLICK TO REQUEST ACCESS
                  </p>
                </div>

              </div>

            </motion.a>
          ))}

          {/* Mystery Card */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="group relative w-[260px] flex-shrink-0 snap-center md:w-[340px]"
          >

            {/* Number */}
            <div className="absolute left-2 top-4 z-20 text-4xl font-light text-white/10 md:text-6xl">
              03
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-[24px] bg-[#D4AF37]/10 blur-2xl transition-all duration-700 group-hover:bg-[#D4AF37]/20"></div>

            {/* Mystery Card */}
            <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[24px] border border-[#D4AF37]/20 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl md:h-[560px]">

              {/* Noise */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]"></div>

              {/* Animated Glow */}
              <div className="absolute h-[250px] w-[250px] rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md">
                  <Lock className="h-7 w-7 text-[#D4AF37]" />
                </div>

                <p className="mb-3 mt-2 text-xs tracking-[0.45em] text-[#D4AF37]">
                  COMING SOON
                </p>

                <h3 className="text-3xl font-light tracking-[0.08em] text-white md:text-4xl">
                  NEXT
                  <br />
                  EDITORIAL
                </h3>

                <div className="mt-6 h-[1px] w-20 bg-[#D4AF37]/40"></div>

                <p className="mt-6 max-w-[220px] text-sm leading-7 tracking-[0.15em] text-white/40">
                  A new cinematic fashion story is about to unfold.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}