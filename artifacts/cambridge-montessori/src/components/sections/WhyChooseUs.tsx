import { motion } from 'framer-motion';
import { BookOpen, Globe, Crown, GraduationCap, ShieldCheck, Leaf, TrendingUp } from 'lucide-react';

const reasons = [
  {
    title: "Cambridge Curriculum",
    description: "A globally respected, research-backed curriculum aligned with NEP 2020 and NCF 2025 frameworks.",
    icon: BookOpen,
  },
  {
    title: "Global Learning Perspective",
    description: "We prepare children to thrive in a connected, fast-changing world with an international mindset.",
    icon: Globe,
  },
  {
    title: "Leadership & Lifestyle",
    description: "Building character, discipline, confidence and life skills alongside academic excellence.",
    icon: Crown,
  },
  {
    title: "Inspiring Educators",
    description: "Passionate, qualified teachers committed to nurturing every child's unique journey and potential.",
    icon: GraduationCap,
  },
  {
    title: "Safe & Secure Campus",
    description: "A beautifully designed child-friendly environment with modern safety measures and CCTV surveillance.",
    icon: ShieldCheck,
  },
  {
    title: "Montessori Methodology",
    description: "Hands-on, self-directed learning materials that spark curiosity and build independent thinkers.",
    icon: Leaf,
  },
  {
    title: "100% Marketing Support",
    description: "A school that partners with families beyond the classroom — supporting growth at every step.",
    icon: TrendingUp,
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">The Novelle Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Why Choose Us?</h2>
          </div>
          <p className="text-foreground/70 max-w-md font-light text-lg">
            An environment where your child feels safe to explore, make mistakes, and grow into a confident global citizen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-border/50 hover:border-accent/30 transition-all duration-300 group ${index === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3 font-medium">{reason.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm md:text-base font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
