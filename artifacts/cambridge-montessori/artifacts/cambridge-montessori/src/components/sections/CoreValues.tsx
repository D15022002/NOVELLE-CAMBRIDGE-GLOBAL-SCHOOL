import { motion } from 'framer-motion';
import { Leaf, Heart, Palette, Star, Handshake, Globe2, Smile } from 'lucide-react';

const values = [
  { name: "Respect", icon: Leaf, color: "text-emerald-600", bg: "bg-emerald-50" },
  { name: "Kindness", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
  { name: "Creativity", icon: Palette, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Confidence", icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
  { name: "Collaboration", icon: Handshake, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Responsibility", icon: Globe2, color: "text-teal-600", bg: "bg-teal-50" },
  { name: "Joyful Learning", icon: Smile, color: "text-orange-500", bg: "bg-orange-50" },
];

export function CoreValues() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">Our Core Values</h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full border border-border/50 hover:border-transparent hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className={`p-2 rounded-full ${value.bg} ${value.color} group-hover:scale-110 transition-transform`}>
                <value.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="font-serif text-lg md:text-xl text-foreground/80">{value.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
