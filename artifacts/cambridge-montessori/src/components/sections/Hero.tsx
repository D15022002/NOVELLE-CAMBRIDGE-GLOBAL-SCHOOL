import { motion } from 'framer-motion';
import heroImage from '@assets/generated_images/hero.jpg';
import schoolLogo from '@assets/WhatsApp_Image_2026-07-23_at_17.04.22_1784812035566.jpeg';
import { Play, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Novelle Cambridge Global School"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/20"></div>
      </div>

      {/* Gold shimmer decorations */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto mt-20">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Logo badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6"
          >
            <img
              src={schoolLogo}
              alt="Novelle Cambridge Global School Crest"
              className="w-24 h-24 md:w-28 md:h-28 object-contain mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* School name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mb-2"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight tracking-wide">
              <span className="text-accent font-bold">NOVELLE</span> CAMBRIDGE
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight tracking-wide">
              GLOBAL SCHOOL
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent/90 text-sm md:text-base font-medium uppercase tracking-widest mb-6"
          >
            Under the Inspira Educational Pvt. Ltd.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-16 bg-accent/60"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="h-px w-16 bg-accent/60"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl font-serif text-white/95 leading-snug mb-3"
          >
            Inspiring Excellence Beyond Boundaries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="text-base md:text-lg text-white/80 font-light italic mb-4"
          >
            "Where Global Education Meets Local Opportunities"
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-accent font-semibold uppercase tracking-widest"
          >
            {['Day Care', 'Nursery', 'LKG', 'UKG'].map((prog, i) => (
              <span key={prog} className="flex items-center gap-2">
                {i > 0 && <span className="text-accent/40">·</span>}
                {prog}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#admissions"
              onClick={(e) => { e.preventDefault(); scrollToSection('#admissions'); }}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-foreground rounded-full font-semibold shadow-[0_8px_30px_rgba(201,160,40,0.4)] hover:shadow-[0_8px_30px_rgba(201,160,40,0.6)] hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Apply for Admission
            </a>
            <button
              onClick={() => scrollToSection('#video')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-medium hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="w-4 h-4 fill-white" />
              Watch Our Story
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-xs text-white/50 uppercase tracking-widest font-medium">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-white/40 animate-bounce" />
      </motion.button>
    </section>
  );
}
