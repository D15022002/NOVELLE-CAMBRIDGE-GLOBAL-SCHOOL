import { motion } from 'framer-motion';
import { Camera, Shield, Users, Fingerprint, Activity, Droplets, ShieldAlert, BadgeCheck } from 'lucide-react';

const safetyFeatures = [
  { name: "CCTV Surveillance", icon: Camera, desc: "24/7 monitoring across the campus" },
  { name: "Child-Safe Campus", icon: Shield, desc: "Rounded edges, safe flooring, no toxic materials" },
  { name: "Trained Staff", icon: Users, desc: "Background verified and extensively trained" },
  { name: "Visitor Management", icon: Fingerprint, desc: "Strict entry and exit protocols" },
  { name: "First Aid & Clinic", icon: Activity, desc: "On-site basic medical support" },
  { name: "Hygiene Standards", icon: BadgeCheck, desc: "Regular sanitization of all materials" },
  { name: "Emergency Ready", icon: ShieldAlert, desc: "Fire safety and evacuation plans" },
  { name: "Clean Water", icon: Droplets, desc: "RO purified drinking water stations" }
];

export function Safety() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Peace of Mind</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Safety & Care</h2>
          <p className="text-foreground/70 font-light text-lg">
            Your child's safety is our absolute priority. We maintain a secure, hygienic, and nurturing environment so you can have complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border border-border/50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-medium text-foreground mb-2">{feature.name}</h3>
              <p className="text-xs text-foreground/60 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
