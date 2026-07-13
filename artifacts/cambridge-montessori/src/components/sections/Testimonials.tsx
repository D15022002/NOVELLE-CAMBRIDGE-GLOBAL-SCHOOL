import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Our daughter has become more confident and independent since joining the school. The Montessori approach has truly transformed her learning experience and how she interacts with the world.",
    author: "Priya S.",
    role: "Mother of UKG student"
  },
  {
    quote: "The teachers are incredibly caring and attentive. My son looks forward to school every single day. The way they blend learning with play is exactly what we were looking for.",
    author: "Arjun M.",
    role: "Father of LKG student"
  },
  {
    quote: "What impressed us most was how the school treats every child as an individual. The progress we've seen in her vocabulary and motor skills in just a few months is remarkable.",
    author: "Kavitha R.",
    role: "Mother of Nursery student"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-card border-y border-border/40 relative overflow-hidden">
      
      {/* Decorative Quote Mark */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 text-[10rem] md:text-[15rem] font-serif font-black text-primary/5 leading-none select-none pointer-events-none">
        "
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary uppercase tracking-widest text-sm font-semibold mb-4 block">Parent Voices</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">What Families Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/30 flex flex-col h-full relative"
            >
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-foreground/80 font-light text-lg leading-relaxed mb-8 flex-grow italic">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-border/40 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-xl font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-medium text-foreground">{t.author}</h4>
                  <p className="text-sm text-foreground/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
