import { motion } from 'framer-motion';
import { BookOpen, Brain, Star, Leaf, Users, Globe } from 'lucide-react';

const pillars = [
  { icon: BookOpen, title: "Literacy & Numeracy", desc: "Nurtures reading, writing and mathematical foundations through engaging, hands-on multi-skill activities." },
  { icon: Brain, title: "Cognitive Skills", desc: "Builds critical thinking, problem-solving and logical reasoning from the earliest years." },
  { icon: Leaf, title: "Panchaksha Vikas", desc: "Five-Fold Development approach ensuring holistic growth: physical, intellectual, emotional, social and creative." },
  { icon: Star, title: "NEP 2020 Aligned", desc: "Committed to the National Curriculum Framework for Foundation Stage (NCF-FS 2022) and NCF FE 2025." },
  { icon: Users, title: "Social-Emotional Learning", desc: "Special emphasis on building social-emotional skills and character alongside academic excellence." },
  { icon: Globe, title: "General Awareness", desc: "Exposes children to the world around them — nature, cultures, science and global citizenship from day one." },
];

export function CambridgeCurriculum() {
  return (
    <section id="curriculum" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Gold accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block"
          >
            Our Academic Foundation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Cambridge Curriculum
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/75 font-light text-lg leading-relaxed"
          >
            <em>My First Steps With Cambridge</em> — a comprehensive and holistic program that recognises the pre-school years as the most crucial phase of a child's mental development. This easy-to-use, multi-skills course nurtures literacy, numeracy, general awareness and creative expression.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8 hover:bg-white/14 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-serif text-white mb-3 font-medium">{pillar.title}</h3>
              <p className="text-white/65 leading-relaxed text-sm font-light">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mb-8"></div>
          <p className="text-white/60 text-sm uppercase tracking-widest font-medium">
            NEP 2020 · NCF 2025 · NCF-FS 2022 · NCF FE 2025
          </p>
        </motion.div>

      </div>
    </section>
  );
}
