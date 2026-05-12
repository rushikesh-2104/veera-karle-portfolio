"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MailCheckIcon, Phone } from "lucide-react";

export default function ContactSection() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const phoneNumber = "918356947428";

    const text = `Hello Veera,

Name: ${name}
Email: ${email}

Message:
${message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative flex min-h-screen  items-center overflow-hidden bg-black py-20">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="mb-8  text-xs tracking-[0.45em] text-[#D4AF37] md:text-sm">
            CONTACT
          </p>

          <h2 className="text-4xl font-light leading-none text-white sm:text-5xl md:text-7xl md:mb-5">
            Let’s Create
            <br />
            Something Cinematic
          </h2>

        </motion.div>

        {/* Main Layout */}
        <div className="grid gap-10 lg:grid-cols-2 md:gap-35">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="max-w-xl md:pt-5 text-sm leading-8 tracking-[0.08em] text-white/50 md:text-base">
              For collaborations, fashion editorials, performances,
              brand campaigns or creative projects,
              feel free to connect and bring your vision to life.
            </p>

            {/* Contact Cards */}
            <div className="mt-12 space-y-5">

              {/* Email */}
              <div className="group flex items-center gap-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black">
                  <Mail className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-xs tracking-[0.3em] text-white/40">
                    EMAIL
                  </p>

                  <p className="mt-2 text-white">
                    hello@veerakarle.com
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="group flex items-center gap-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black">
                  <Phone className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-xs tracking-[0.3em] text-white/40">
                    PHONE
                  </p>

                  <p className="mt-2 text-white">
                    +91 8356947428
                  </p>
                </div>

              </div>

              {/* Instagram */}
              <div className="group flex items-center gap-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black">
                  <MailCheckIcon className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-xs tracking-[0.3em] text-white/40">
                    INSTAGRAM
                  </p>

                  <p className="mt-2 text-white">
                    @veera.vibes5
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="p-10 backdrop-blur-sm md:px-5 md:py-5"
          >

            <form className="space-y-10">

              {/* Name */}
              <div>
                <label className="block text-xs tracking-[0.3em] text-white/40">
                  YOUR NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full placeholder:pl-5 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/20 focus:border-[#D4AF37]/40"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-3 block text-xs tracking-[0.3em] text-white/40">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full placeholder:pl-5 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/20 focus:border-[#D4AF37]/40"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-3 block text-xs tracking-[0.3em] text-white/40">
                  MESSAGE
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full placeholder:pl-5 resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-white/20 focus:border-[#D4AF37]/40"
                />
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="group flex  items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-8 py-4 text-sm  text-white transition duration-500 hover:bg-[#D4AF37] hover:text-black"
              >

                SEND MESSAGE

                <span className="transition duration-500 group-hover:translate-x-1">
                  ↗
                </span>

              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}