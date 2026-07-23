import { motion } from 'framer-motion';
import welcomeImg from '@assets/generated_images/welcome.jpg';
import { Sparkles } from 'lucide-react';

export function Welcome() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/30">
                <img
                  src={welcomeImg}
                  alt="Students at Novelle Cambridge Global School"
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
              </div>

              {/* Decorative shapes */}
              <div className="absolute -inset-4 md:-inset-8 bg-card rounded-3xl z-0 transform rotate-2 border border-accent/20"></div>
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl z-0"></div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-primary p-4 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 border border-accent/30"
              >
                <Sparkles className="w-6 h-6 text-accent mb-1" />
                <span className="text-sm md:text-base text-center font-semibold text-white leading-tight">Cambridge<br/>Curriculum</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4">Our Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
              Inspiring<br/>Excellence
            </h2>

            <div className="w-16 h-1 bg-accent rounded-full mb-8"></div>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6 font-light">
              At Novelle Cambridge Global School, we are committed to creating a nurturing, inspiring and future-ready learning environment.
            </p>

            <p className="text-base text-foreground/70 leading-relaxed mb-6">
              Our holistic educational approach brings together academic rigour, creativity, character development, critical thinking and essential life skills.
            </p>

            <p className="text-base text-foreground/70 leading-relaxed mb-10">
              With passionate educators, innovative teaching practices and a strong foundation in values, we empower learners to become confident thinkers, responsible leaders and compassionate global citizens. We don't just prepare students for the future — we empower them to shape it.
            </p>

            <a
              href="#curriculum"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#curriculum');
                if (el) { const pos = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top: pos, behavior: 'smooth' }); }
              }}
              className="group flex items-center gap-3 text-accent font-semibold hover:text-accent/80 transition-colors"
            >
              <span className="border-b-2 border-accent/40 group-hover:border-accent transition-colors pb-1">Discover Our Curriculum</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
