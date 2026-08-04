import { motion } from 'framer-motion';
import { Sun, Users, BookOpen, Apple, TreePine, Book, Music, Palette, Moon } from 'lucide-react';

const schedule = [
  { time: "08:30 AM", title: "Morning Welcome", icon: Sun, desc: "Greeting teachers, hanging up bags, transitioning to school." },
  { time: "09:00 AM", title: "Circle Time", icon: Users, desc: "Songs, calendar, weather, and introduction to the day's theme." },
  { time: "09:30 AM", title: "Montessori Work Cycle", icon: BookOpen, desc: "Uninterrupted time for self-directed work with Montessori materials." },
  { time: "11:00 AM", title: "Snack Time", icon: Apple, desc: "Practicing grace, courtesy, and independence while eating together." },
  { time: "11:30 AM", title: "Outdoor Play", icon: TreePine, desc: "Gross motor development, nature exploration, and free play." },
  { time: "12:15 PM", title: "Story Time", icon: Book, desc: "Interactive read-alouds to build vocabulary and imagination." },
  { time: "12:45 PM", title: "Music & Movement", icon: Music, desc: "Rhythm, singing, dance, and creative physical expression." },
  { time: "01:30 PM", title: "Creative Activities", icon: Palette, desc: "Art, craft, clay, and unstructured creative expression." },
  { time: "02:30 PM", title: "Reflection & Goodbye", icon: Moon, desc: "Packing up, reflecting on the day, and peaceful dismissals." }
];

export function DayAtSchool() {
  return (
    <section className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary uppercase tracking-widest text-sm font-semibold mb-4 block">Rhythm & Routine</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">A Day at School</h2>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            A consistent daily routine provides children with a sense of security and structure, allowing them to predict what comes next and engage fully.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line connecting timeline items */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:hidden"></div>

          <div className="space-y-12">
            {schedule.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center md:justify-between w-full"
                >
                  {/* Left Side (Empty for odd on desktop, Content for even) */}
                  <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:hidden'}`}>
                    <div className="md:hidden block mb-1 text-primary font-serif font-medium">{item.time}</div>
                    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-border/30 hover:border-primary/30 transition-colors ${isEven ? 'ml-auto' : ''}`}>
                      <h4 className="text-lg font-serif text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-foreground/70 font-light">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-card flex items-center justify-center z-10 shadow-sm text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>

                  {/* Right Side (Content for odd, Time for even on desktop) */}
                  <div className={`w-full md:w-5/12 pl-16 md:pl-12 hidden md:block ${isEven ? 'text-left' : 'text-left'}`}>
                    {isEven ? (
                      <div className="text-2xl font-serif text-primary/40 font-medium">{item.time}</div>
                    ) : (
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/30 hover:border-primary/30 transition-colors">
                        <h4 className="text-lg font-serif text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-foreground/70 font-light">{item.desc}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Odd item time for desktop (rendered on left) */}
                  {!isEven && (
                    <div className="absolute left-0 w-5/12 text-right pr-12 hidden md:block">
                      <div className="text-2xl font-serif text-primary/40 font-medium">{item.time}</div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
