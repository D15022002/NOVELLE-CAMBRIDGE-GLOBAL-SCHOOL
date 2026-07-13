import { motion } from 'framer-motion';
import heroImage from '@assets/generated_images/hero.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Warm Montessori Classroom" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/30 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto mt-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/50 text-primary-foreground font-medium text-sm mb-8 shadow-sm text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Enrolling for 2025-2026 Academic Year
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] mb-6 drop-shadow-sm"
          >
            Where Little Minds <br className="hidden md:block" />
            <span className="text-primary italic">Blossom</span> into <br className="hidden md:block" />
            Lifelong Learners
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            A nurturing Montessori preschool where curiosity, creativity, confidence, and independence grow naturally through hands-on learning and joyful exploration.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#admissions" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium shadow-[0_8px_30px_rgb(107,143,113,0.3)] hover:shadow-[0_8px_30px_rgb(107,143,113,0.5)] hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Book a Campus Tour
            </a>
            <a 
              href="#admissions" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-foreground rounded-full font-medium shadow-sm hover:shadow-md border border-border hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Enquire Now
            </a>
            <a 
              href="#admissions" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground hover:text-accent font-medium transition-colors duration-300 text-center underline-offset-4 hover:underline"
            >
              Apply for Admission
            </a>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-foreground/50 uppercase tracking-widest font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-foreground/20 overflow-hidden relative">
          <motion.div 
            animate={{ 
              y: [0, 48, 48],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
