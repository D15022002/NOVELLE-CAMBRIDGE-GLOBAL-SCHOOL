import { motion } from 'framer-motion';
import schoolLogo from '@assets/WhatsApp_Image_2026-07-23_at_17.04.22_1784812035566.jpeg';

export function FinalCTA() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const pos = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-primary">
      {/* Gold shimmer decorations */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[140px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={schoolLogo}
            alt="Novelle Cambridge Global School"
            className="w-20 h-20 object-contain mx-auto mb-8 drop-shadow-2xl"
          />

          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-6 block">Take the Next Step</span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
            Ready to Begin Your Child's <br className="hidden md:block"/> Learning Journey?
          </h2>

          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Give your child the gift of a Cambridge education — where global excellence meets a nurturing, joyful and inspiring environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#admissions"
              onClick={(e) => { e.preventDefault(); scrollToSection('#admissions'); }}
              className="w-full sm:w-auto px-10 py-4 bg-accent text-foreground rounded-full font-semibold shadow-[0_4px_20px_rgba(201,160,40,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,160,40,0.6)] transition-all duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="#video"
              onClick={(e) => { e.preventDefault(); scrollToSection('#video'); }}
              className="w-full sm:w-auto px-10 py-4 bg-white/10 text-white border border-white/20 rounded-full font-medium hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              Watch Our Story
            </a>
          </div>

          {/* Contact quick-line */}
          <p className="mt-10 text-white/50 text-sm">
            Questions? Call us at{' '}
            <a href="tel:+917989261653" className="text-accent hover:text-accent/80 transition-colors font-medium">
              +91 7989261653
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
