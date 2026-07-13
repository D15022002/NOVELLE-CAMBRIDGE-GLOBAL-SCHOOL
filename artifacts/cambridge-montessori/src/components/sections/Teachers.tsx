import { motion } from 'framer-motion';

import teacher1 from '@assets/generated_images/teacher_1.jpg';
import teacher2 from '@assets/generated_images/teacher_2.jpg';
import teacher3 from '@assets/generated_images/teacher_3.jpg';

const teachers = [
  {
    name: "Ms. Ananya Sharma",
    role: "Montessori Directress",
    qual: "AMI-certified, 8 years experience",
    bio: "Passionate about guiding children to discover their true potential through observation and carefully prepared environments.",
    img: teacher1
  },
  {
    name: "Ms. Deepa Krishnan",
    role: "Early Childhood Educator",
    qual: "B.Ed in Early Education, 6 years experience",
    bio: "Believes in the power of play and sensory experiences to build strong cognitive foundations in early years.",
    img: teacher2
  },
  {
    name: "Mr. Ravi Nair",
    role: "Montessori Assistant & Yoga Instructor",
    qual: "Certified Yoga Practitioner, 5 years experience",
    bio: "Brings mindfulness, movement, and calm energy into the classroom, helping children develop physical and emotional balance.",
    img: teacher3
  }
];

export function Teachers() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">Our Guiding Lights</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Meet Our Educators</h2>
          <p className="text-foreground/70 font-light text-lg">
            Our teachers are more than instructors; they are observers, guides, and facilitators who deeply respect the child's natural development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-border/50 group hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={teacher.img} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8 text-center bg-white relative -mt-6 mx-4 rounded-2xl shadow-sm border border-border/20 z-10 group-hover:-translate-y-4 transition-transform duration-300">
                <h3 className="text-xl font-serif text-foreground mb-1">{teacher.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{teacher.role}</p>
                <div className="w-10 h-0.5 bg-border mx-auto mb-4"></div>
                <p className="text-xs font-medium text-foreground/50 mb-3">{teacher.qual}</p>
                <p className="text-foreground/70 text-sm font-light leading-relaxed">
                  {teacher.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
