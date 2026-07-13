import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Montessori education?",
    answer: "Montessori is an educational method developed by Dr. Maria Montessori. It is a child-centered approach based on scientific observations of children. It values the human spirit and the development of the whole child—physical, social, emotional, and cognitive—in a prepared environment with hands-on learning materials."
  },
  {
    question: "What age groups do you accept?",
    answer: "We accept children from 2 years up to 6 years of age. Our programs are divided into Nursery (2-3 years), LKG (3-4 years), UKG (4-5 years), and Grade I (5-6 years)."
  },
  {
    question: "What curriculum do you follow?",
    answer: "We follow the authentic Montessori curriculum integrated with modern early childhood education best practices. For our older age groups, we gently bridge Montessori concepts with foundational academic requirements to ensure smooth transitions to primary school."
  },
  {
    question: "Is transportation available?",
    answer: "Yes, we provide safe, air-conditioned transportation facilities with female attendants within a 10km radius of the school. All our vehicles are GPS tracked and parents receive live updates."
  },
  {
    question: "How do you communicate with parents?",
    answer: "We believe in strong parent partnerships. We provide weekly digital updates, monthly newsletters, termly parent-teacher meetings, and daily notes for nursery children. We also host parent observation days twice a year."
  },
  {
    question: "What are the school timings?",
    answer: "Standard school hours are from 8:30 AM to 1:00 PM for younger children, and up to 3:00 PM for older groups. We also offer extended day care facilities until 5:30 PM for working parents."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary uppercase tracking-widest text-sm font-semibold mb-4 block">Clear Your Doubts</span>
          <h2 className="text-4xl font-serif text-foreground mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-border/40">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-border/50 rounded-2xl overflow-hidden transition-colors hover:border-primary/30"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between bg-card hover:bg-card/80 transition-colors focus:outline-none"
                >
                  <span className="font-medium text-foreground pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 bg-card text-foreground/70 font-light text-sm md:text-base leading-relaxed border-t border-border/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
