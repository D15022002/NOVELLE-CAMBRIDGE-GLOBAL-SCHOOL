import { motion } from 'framer-motion';
import { Droplets, Eye, MessageCircleHeart, Calculator, Globe2 } from 'lucide-react';

const methods = [
  {
    title: "Practical Life",
    icon: Droplets,
    description: "Pouring, folding, cleaning, buttoning, gardening, self-care. Improves hand-eye coordination, concentration, and independence.",
    color: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-500"
  },
  {
    title: "Sensorial Learning",
    icon: Eye,
    description: "Exploring shapes, colors, textures, sizes, sounds, and smells. Develops sharp observation, categorization, and logical thinking.",
    color: "from-rose-500/10 to-rose-500/5",
    iconColor: "text-rose-500"
  },
  {
    title: "Language Development",
    icon: MessageCircleHeart,
    description: "Vocabulary building, speaking, reading readiness, writing readiness, phonics, storytelling, and confident communication.",
    color: "from-emerald-500/10 to-emerald-500/5",
    iconColor: "text-emerald-500"
  },
  {
    title: "Mathematics",
    icon: Calculator,
    description: "Counting, number recognition, addition, subtraction, place values — introduced through tangible hands-on materials before abstract concepts.",
    color: "from-amber-500/10 to-amber-500/5",
    iconColor: "text-amber-500"
  },
  {
    title: "Cultural Studies",
    icon: Globe2,
    description: "Exploring nature, geography, science, animals, plants, festivals, and world cultures to build global awareness and appreciation.",
    color: "from-purple-500/10 to-purple-500/5",
    iconColor: "text-purple-500"
  }
];

export function MontessoriMethod() {
  return (
    <section id="method" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-serif font-bold text-black/5 whitespace-nowrap pointer-events-none z-0">
        Method
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Learning by Doing</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">The Montessori Method</h2>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            Our curriculum is divided into five core areas that provide a comprehensive foundation for your child's physical, cognitive, and social development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-border/30 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 border border-border/50 ${method.iconColor}`}>
                  <method.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-serif text-foreground mb-4">{method.title}</h3>
                
                <p className="text-foreground/70 leading-relaxed font-light mt-auto">
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Join Us Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 5 * 0.1 }}
            className="bg-primary rounded-[2rem] p-8 shadow-md flex flex-col items-center justify-center text-center h-full text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif mb-4">See It In Action</h3>
              <p className="text-white/80 font-light mb-8 max-w-[200px] mx-auto">
                Schedule a tour to observe a Montessori classroom at work.
              </p>
              <a 
                href="#admissions"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-colors shadow-sm"
              >
                Book a Tour
              </a>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
