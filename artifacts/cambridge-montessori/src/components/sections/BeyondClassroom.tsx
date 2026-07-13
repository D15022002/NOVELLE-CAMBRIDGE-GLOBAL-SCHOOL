import { motion } from 'framer-motion';

const activities = [
  "Music & Movement", "Dance", "Yoga & Mindfulness", 
  "Storytelling", "Gardening", "Cooking Activities", 
  "Festival Celebrations", "Science Experiments", 
  "Art & Craft", "Sports & Free Play", "Cultural Programs"
];

export function BeyondClassroom() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-5/12">
            <span className="text-white/70 uppercase tracking-widest text-sm font-semibold mb-4 block">Holistic Growth</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Learning Beyond <br/>the Classroom</h2>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-8">
              Education is not limited to classroom materials. We expose children to a rich variety of extracurricular activities that discover hidden talents, build physical coordination, and foster a deep appreciation for culture and arts.
            </p>
            <a 
              href="#gallery" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              View Gallery
            </a>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="flex flex-wrap gap-3 md:gap-4 justify-start lg:justify-end">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 font-medium hover:bg-white hover:text-primary transition-colors cursor-default"
                >
                  {activity}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
