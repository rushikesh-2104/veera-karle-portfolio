"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    image: "/instagram/i1.png",
  },
  {
    image: "/instagram/i2.png",
  },
  {
    image: "/instagram/i3.png",
  },
];

export default function InstagramSection() {
  return (
    <section id="showreel" className="relative overflow-hidden bg-black py-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >

          <p className="mb-4 text-xs tracking-[0.45em] text-[#D4AF37] md:text-sm">
            INSTAGRAM MOMENTS
          </p>

          <h2 className="text-4xl font-light leading-none text-white sm:text-5xl md:text-6xl">
            Visual
            <br />
            Stories
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 tracking-[0.08em] text-white/50 md:text-base">
            A glimpse into fashion, movement and cinematic storytelling.
          </p>

        </motion.div>

        {/* Pinterest Grid */}
        <div className="columns-1 gap-y-1 gap-4 md:columns-2 lg:columns-3 xl:columns-4">

          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative mb-4 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 break-inside-avoid transition duration-500 group-hover:-translate-y-1"
            >

              {/* Image */}
              <Image
                src={post.image}
                alt="Instagram Post"
                width={1000}
                height={1400}
                className="h-auto mb-2 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/30"></div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            </motion.div>
          ))}

        </div>

        {/* Instagram Handle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >

          <a
            href="https://instagram.com/veera.vibes5"
            target="_blank"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm tracking-[0.25em] text-white/60 transition duration-500 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:text-white"
          >

            @veera.vibes5

          </a>

        </motion.div>

      </div>
    </section>
  );
}