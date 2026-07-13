import { motion } from 'framer-motion';
import welcomeImg from '@assets/generated_images/welcome.jpg';

export function Welcome() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
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
              {/* Image Frame with soft styling */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={welcomeImg} 
                  alt="Children learning in a Montessori environment" 
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
              </div>
              
              {/* Decorative background shapes */}
              <div className="absolute -inset-4 md:-inset-8 bg-card rounded-3xl z-0 transform rotate-3"></div>
              <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-32 h-32 bg-secondary/30 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 w-40 h-40 bg-accent/20 rounded-full blur-2xl z-0"></div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-4 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 border border-primary/10"
              >
                <span className="text-3xl md:text-5xl font-serif text-primary mb-1">10+</span>
                <span className="text-xs md:text-sm text-center font-medium text-foreground/80 leading-tight">Years of<br/>Excellence</span>
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
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4">About Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
              Welcome to <br/> Our School
            </h2>
            
            <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6 font-light">
              Children are naturally curious, capable, and eager to learn. Our Montessori environment provides the freedom to explore, discover, and develop at their own pace while building confidence, independence, and a lifelong love for learning.
            </p>
            
            <p className="text-base text-foreground/70 leading-relaxed mb-10">
              Every classroom is thoughtfully designed to inspire imagination, encourage exploration, and nurture each child's unique potential. We believe in following the child and providing a beautifully prepared environment that speaks to their developmental needs.
            </p>
            
            <a 
              href="#method" 
              className="group flex items-center gap-3 text-primary font-medium hover:text-primary/80 transition-colors"
            >
              <span className="border-b border-primary/30 group-hover:border-primary transition-colors pb-1">Discover Our Method</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
