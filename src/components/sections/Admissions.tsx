import { motion } from 'framer-motion';
import { MessageSquare, Map, Users, FileText, Sparkles, Phone, Mail, Globe } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: "Submit Enquiry", desc: "Reach out to us via phone, email or our website to express your interest." },
  { icon: Map, title: "Visit Campus", desc: "Take a guided tour of our school and see the learning environment first-hand." },
  { icon: Users, title: "Meet Our Team", desc: "An interaction session for parents and child with our educators." },
  { icon: FileText, title: "Registration", desc: "Complete forms and submit the required documents." },
  { icon: Sparkles, title: "Welcome!", desc: "Your child begins their inspiring journey at Novelle Cambridge." }
];

export function Admissions() {
  return (
    <section id="admissions" className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Join Our Community</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Admissions</h2>
          <p className="text-foreground/70 font-light text-lg">
            We are currently accepting applications for the upcoming academic year. Follow our simple process to join the Novelle Cambridge family.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-5xl mx-auto">

          {/* Process Steps */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-serif text-foreground mb-8">The Admission Process</h3>

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
                      <span className="text-accent/70 mr-2 text-sm font-serif">0{index + 1}.</span>
                      {step.title}
                    </h4>
                    <p className="text-foreground/70 font-light text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-primary rounded-3xl p-8 md:p-10 shadow-xl border border-primary/20 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/20 border border-accent/30 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Get in Touch</h3>
                <p className="text-white/70 font-light text-sm mb-8 leading-relaxed">
                  Ready to give your child a world-class education? Contact us today — our admissions team is here to guide you every step of the way.
                </p>
              </div>

              <div className="space-y-5">
                <a href="tel:+918555015234" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-white font-medium">+91 8555015234</p>
                  </div>
                </a>

                <a href="mailto:kg.cmps.vizag@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-white font-medium">kg.cmps.vizag@gmail.com</p>
                  </div>
                </a>

                <a href="https://ncgs.in" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-medium uppercase tracking-wide">Website</p>
                    <p className="text-white font-medium">ncgs.in</p>
                  </div>
                </a>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm leading-relaxed">
                    Visakhapatnam, Andhra Pradesh – 530041
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
