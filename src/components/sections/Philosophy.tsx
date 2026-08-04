import { motion } from 'framer-motion';
import { Compass, Sparkles, HeartHandshake } from 'lucide-react';

const panels = [
  {
    title: "Our Philosophy",
    icon: Compass,
    color: "bg-primary",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/20",
    description: "We believe every child is naturally curious and capable. Our approach — grounded in the Montessori methodology and Cambridge curriculum — encourages children to think independently, solve problems creatively, respect themselves and others, learn through experience, and build confidence naturally.",
  },
  {
    title: "Our Vision",
    icon: Sparkles,
    color: "bg-accent",
    bgColor: "bg-accent/8",
    borderColor: "border-accent/20",
    description: "To nurture compassionate, confident, independent, and lifelong learners who will positively contribute to the world. We envision a community where every child's potential is recognized, celebrated, and guided with love and intention.",
  },
  {
    title: "Our Mission",
    icon: HeartHandshake,
    color: "bg-secondary",
    bgColor: "bg-secondary/8",
    borderColor: "border-secondary/20",
    description: "Foster curiosity, encourage independence, develop strong foundational skills, promote creativity, and build character with kindness. We strive to inspire a lifelong love of learning and partner meaningfully with families on this journey.",
  }
];

export function Philosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Our Foundation</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Philosophy & Purpose</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {panels.map((panel, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-10 rounded-3xl ${panel.bgColor} border ${panel.borderColor} relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md`}
            >
              <div className={`w-14 h-14 ${panel.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-sm transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <panel.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-serif text-foreground mb-4">{panel.title}</h3>
              <p className="text-foreground/70 leading-relaxed font-light">
                {panel.description}
              </p>

              <div className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full ${panel.color} opacity-10 blur-xl group-hover:scale-150 transition-transform duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
