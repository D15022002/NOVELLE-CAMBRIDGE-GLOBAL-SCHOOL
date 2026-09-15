import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is the Cambridge curriculum?",
    answer: "The Cambridge curriculum at Novelle Cambridge Global School is based on 'My First Steps With Cambridge' — a comprehensive, holistic programme aligned with NEP 2020 and NCF 2025. It nurtures literacy, numeracy, general awareness and creative expression through the Panchaksha Vikas (Five-Fold Development) approach."
  },
  {
    question: "What age groups do you accept?",
    answer: "We welcome children from 1.5 years onwards. Our programmes include Day Care (1.5–2 years), Nursery (2–3 years), LKG (3–4 years), and UKG (4–5 years)."
  },
  {
    question: "What teaching methodology do you follow?",
    answer: "We combine the globally respected Cambridge curriculum with Montessori methodology — hands-on, child-centred learning that builds independence, critical thinking and a genuine love of discovery."
  },
  {
    question: "Is transportation available?",
    answer: "Yes, we provide safe transportation facilities with trained attendants. All vehicles are monitored and parents receive updates. Please contact us for route and availability details."
  },
  {
    question: "How do you communicate with parents?",
    answer: "We believe in strong parent partnerships through regular progress updates, parent-teacher interactions, workshops, celebration events and direct communication via phone and email."
  },
  {
    question: "What makes Novelle Cambridge different?",
    answer: "We offer a unique blend of Cambridge curriculum, Montessori methodology, global learning perspective, leadership development and a focus on social-emotional growth — all within a safe, nurturing campus in Visakhapatnam."
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
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Clear Your Doubts</span>
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
