import { motion } from 'framer-motion';
import { Send, MessageSquare, Map, Users, FileText, Sparkles } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: "Submit Enquiry", desc: "Fill out the form below to show your interest." },
  { icon: Map, title: "Visit Campus", desc: "Take a guided tour to see our environment." },
  { icon: Users, title: "Meet Our Team", desc: "An interaction session for parents and child." },
  { icon: FileText, title: "Registration", desc: "Complete forms and submit required documents." },
  { icon: Sparkles, title: "Welcome!", desc: "Your child begins their Montessori journey." }
];

export function Admissions() {
  return (
    <section id="admissions" className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Join Our Community</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Admissions</h2>
          <p className="text-foreground/70 font-light text-lg">
            We are currently accepting applications for the upcoming academic year. Follow our simple process to join the Cambridge family.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Process Steps */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-serif text-foreground mb-8">The Process</h3>
            
            <div className="space-y-8 relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border -z-10"></div>
              
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center shrink-0 z-10 text-primary">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-1">
                      <span className="text-primary/50 mr-2 text-sm">0{index + 1}.</span>
                      {step.title}
                    </h4>
                    <p className="text-foreground/70 font-light text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 border border-border/50">
              <h3 className="text-2xl font-serif text-foreground mb-2">Book a Tour / Enquire</h3>
              <p className="text-foreground/60 font-light text-sm mb-8">Fill this form and our admissions team will contact you shortly.</p>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Parent's Name *</label>
                    <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Contact Number *</label>
                    <input type="tel" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="+1 (555) 000-0000" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Child's Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Child's Age *</label>
                    <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground/80" required>
                      <option value="" disabled selected>Select age group</option>
                      <option value="2-3">2 - 3 Years (Nursery)</option>
                      <option value="3-4">3 - 4 Years (LKG)</option>
                      <option value="4-5">4 - 5 Years (UKG)</option>
                      <option value="5-6">5 - 6 Years (Grade I)</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Email Address *</label>
                  <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Message / Questions</label>
                  <textarea rows={3} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-medium py-4 rounded-xl shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-4">
                  <Send className="w-4 h-4" />
                  Submit Enquiry
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
