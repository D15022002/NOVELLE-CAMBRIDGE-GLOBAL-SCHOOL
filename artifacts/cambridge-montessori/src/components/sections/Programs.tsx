import { motion } from 'framer-motion';

const programs = [
  {
    name: "Day Care",
    age: "Age 1.5 – 2 Years",
    description: "A warm, loving bridge between home and school. Focuses on building security, routine and early sensory exploration in a nurturing environment.",
    features: ["Safe & caring supervision", "Sensory play", "Routine building", "Social introduction"]
  },
  {
    name: "Nursery",
    age: "Age 2 – 3 Years",
    description: "A gentle introduction to structured learning. Focuses on social skills, sensory experiences, language exposure and gross motor development.",
    features: ["Toilet training support", "Sensory play", "Vocabulary building", "Social interaction"]
  },
  {
    name: "LKG",
    age: "Age 3 – 4 Years",
    description: "Lower Kindergarten expands their world. Introduction to early literacy, number concepts, practical life skills and creative expression.",
    features: ["Phonics introduction", "Counting & sorting", "Creative arts", "Fine motor skills"]
  },
  {
    name: "UKG",
    age: "Age 4 – 5 Years",
    description: "Upper Kindergarten prepares them for formal schooling. Deepening reading readiness, writing practice, mathematics and building self-confidence.",
    features: ["Reading readiness", "Basic addition", "Scientific observation", "Independent work"]
  }
];

const colors = [
  { badge: "bg-secondary/15 text-secondary border-secondary/30", accent: "bg-secondary" },
  { badge: "bg-primary/10 text-primary border-primary/20", accent: "bg-primary" },
  { badge: "bg-accent/15 text-foreground border-accent/30", accent: "bg-accent" },
  { badge: "bg-primary/10 text-primary border-primary/20", accent: "bg-primary" },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Age-Appropriate Environments</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Programs Offered</h2>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            Each programme is carefully tailored to the developmental needs of the age group, ensuring children are challenged, supported and engaged.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-card border border-border/50 rounded-[2rem] p-8 flex flex-col group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">
                <span className={`inline-block px-4 py-1.5 font-medium text-sm rounded-full border mb-4 ${colors[index].badge}`}>
                  {program.age}
                </span>
                <h3 className="text-3xl font-serif text-foreground">{program.name}</h3>
              </div>

              <p className="text-foreground/70 font-light leading-relaxed mb-8 flex-grow">
                {program.description}
              </p>

              <ul className="space-y-3 mb-4">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors[index].accent} shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
