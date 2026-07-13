import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    name: "Nursery",
    age: "Age 2 – 3 Years",
    description: "A gentle transition from home to school. Focuses on social skills, sensory experiences, language exposure, and gross motor development in a safe, loving environment.",
    features: ["Toilet training support", "Sensory play", "Vocabulary building", "Social interaction"]
  },
  {
    name: "LKG",
    age: "Age 3 – 4 Years",
    description: "Lower Kindergarten expands their world. Introduction to early literacy, number concepts, practical life skills, and creative expression through guided activities.",
    features: ["Phonics introduction", "Counting & sorting", "Creative arts", "Fine motor skills"]
  },
  {
    name: "UKG",
    age: "Age 4 – 5 Years",
    description: "Upper Kindergarten prepares them for formal schooling. Deepening reading readiness, writing practice, mathematics, problem-solving, and building self-confidence.",
    features: ["Reading readiness", "Basic addition", "Scientific observation", "Independent work"]
  },
  {
    name: "Grade I",
    age: "Age 5 – 6 Years",
    description: "A beautiful bridge between Montessori learning and structured academics. We maintain creativity and exploration while introducing more formal academic concepts.",
    features: ["Fluent reading", "Complex math concepts", "Environmental studies", "Project-based learning"]
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">Age-Appropriate Environments</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Our Programs</h2>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            Each classroom is specifically tailored to the developmental needs of the age group, ensuring children are challenged, supported, and engaged.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border/50 rounded-[2rem] p-8 flex flex-col group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-white text-primary font-medium text-sm rounded-full shadow-sm border border-primary/10 mb-4">
                  {program.age}
                </span>
                <h3 className="text-3xl font-serif text-foreground">{program.name}</h3>
              </div>
              
              <p className="text-foreground/70 font-light leading-relaxed mb-8 flex-grow">
                {program.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#admissions" className="inline-flex items-center gap-2 text-primary font-medium group/link mt-auto w-fit">
                Enquire Now 
                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
