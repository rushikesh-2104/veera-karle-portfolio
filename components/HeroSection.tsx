export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-0 h-full w-full animate-slowZoom object-cover"
      >
        <source src="/videos/intro1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">

        <p className="mb-4 text-sm tracking-[0.5em] text-[#D4AF37] md:text-base">
          DANCER • ACTRESS • FASHION MODEL
        </p>

        <h1 className="text-5xl font-bold tracking-[0.2em] text-white md:text-8xl">
          VEERA KARLE
        </h1>

        <p className="mt-6 max-w-3xl text-sm text-gray-300 md:text-lg">
          Crafting elegance through movement, expression and cinematic presence.
        </p>

        <div className="md:mt-10 mt-5 flex gap-4">

          <button className="border border-[#D4AF37] px-8 py-4 active:scale-90 text-sm tracking-[0.3em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black">
            EXPLORE
          </button>

          <button className="bg-[#D4AF37] px-6 py-3 text-sm tracking-[0.2em] text-black transition hover:opacity-80">
            SHOWREEL
          </button>

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
}