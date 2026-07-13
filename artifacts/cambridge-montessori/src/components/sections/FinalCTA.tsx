import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#1A2530]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-secondary blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-secondary uppercase tracking-widest text-sm font-semibold mb-6 block">Take the Next Step</span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
            Ready to Begin Your Child's <br className="hidden md:block"/> Learning Journey?
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Give your child the gift of independence, curiosity, confidence, and joyful learning in a nurturing Montessori environment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#admissions" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium shadow-[0_4px_20px_rgba(107,143,113,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(107,143,113,0.6)] transition-all duration-300"
            >
              Schedule a Visit
            </a>
            <a 
              href="#admissions" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-medium hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              Enquire Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
