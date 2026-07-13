import { motion } from 'framer-motion';
import { Baby, Blocks, GraduationCap, ShieldCheck, TreeDeciduous, Users } from 'lucide-react';

const reasons = [
  {
    title: "Child-Centered Learning",
    description: "Learning is personalized for every child, respecting their unique pace and interests.",
    icon: Baby,
  },
  {
    title: "Montessori Curriculum",
    description: "Hands-on, self-correcting materials that encourage independent discovery.",
    icon: Blocks,
  },
  {
    title: "Experienced Educators",
    description: "Qualified, passionate, and deeply caring teachers guide every child's journey.",
    icon: GraduationCap,
  },
  {
    title: "Safe & Secure Campus",
    description: "A beautifully designed child-friendly environment with modern safety measures.",
    icon: ShieldCheck,
  },
  {
    title: "Holistic Development",
    description: "Academic, emotional, social, physical, and creative growth nurtured equally.",
    icon: TreeDeciduous,
  },
  {
    title: "Parent Partnership",
    description: "Regular, meaningful communication and collaboration with families.",
    icon: Users,
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary uppercase tracking-widest text-sm font-semibold mb-4 block">The Cambridge Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Why Choose Us?</h2>
          </div>
          <p className="text-foreground/70 max-w-md font-light text-lg">
            We provide an environment where your child feels safe to explore, make mistakes, and grow with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-border/50 hover:border-primary/20 transition-all duration-300 group"
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
