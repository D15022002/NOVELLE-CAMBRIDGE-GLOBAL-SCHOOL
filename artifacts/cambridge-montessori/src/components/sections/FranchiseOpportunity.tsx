import { motion } from 'framer-motion';
import { Award, BookOpen, Headphones, TrendingUp, BarChart3, School, Users, GraduationCap, Megaphone, Monitor, Activity, Heart, Shield, HandCoins } from 'lucide-react';

const whyPartner = [
  {
    icon: Award,
    title: "Trusted Brand",
    desc: "A recognized name in quality education and child development.",
  },
  {
    icon: BookOpen,
    title: "Cambridge Curriculum",
    desc: "Globally benchmarked Cambridge curriculum that fosters academic excellence and lifelong learning.",
  },
  {
    icon: Headphones,
    title: "Complete Support",
    desc: "End-to-end support in setup, training, operations, and marketing.",
  },
  {
    icon: TrendingUp,
    title: "Profitable Opportunity",
    desc: "Low investment with high growth potential in the education sector.",
  },
  {
    icon: BarChart3,
    title: "Continuous Growth",
    desc: "Ongoing academic support, teacher training & business development.",
  },
];

const whatYouGet = [
  { icon: School, label: "School Setup Guidance" },
  { icon: Users, label: "Staff Recruitment & Training" },
  { icon: GraduationCap, label: "Academic & Operational Support" },
  { icon: Megaphone, label: "Marketing & Admissions Support" },
  { icon: Monitor, label: "Digital Learning Resources" },
  { icon: Activity, label: "Continuous Monitoring & Growth Support" },
];

const pillars = [
  {
    icon: Heart,
    title: "Be a Part of a Meaningful Mission",
    desc: "Empower your community. Inspire young minds. Build a brighter future together.",
  },
  {
    icon: Shield,
    title: "Strong Systems. Proven Success.",
    desc: "Leverage our expertise. Deliver excellence. Create impact.",
  },
  {
    icon: HandCoins,
    title: "Invest in Education. Invest in the Future.",
    desc: "A rewarding opportunity that builds success and serves generations.",
  },
];

export function FranchiseOpportunity() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const pos = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="franchise" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block"
          >
            Partnership Opportunity
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight"
          >
            School Franchise{' '}
            <span className="text-accent">Opportunity</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-accent/50"></div>
            <p className="text-primary font-semibold text-base md:text-lg">
              Partner with Us. Build a School. Build a Legacy.
            </p>
            <div className="h-px w-10 bg-accent/50"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/70 text-lg font-light leading-relaxed"
          >
            Join hands with Novelle Cambridge Global School and be a part of a trusted, future-ready
            educational brand that is committed to nurturing young minds and shaping tomorrow's leaders.
          </motion.p>
        </div>

        {/* Two-column: Why Partner + What You Get */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">

          {/* Why Partner With Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card border border-border/40 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-xl font-serif text-primary mb-8 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-accent rounded-full"></span>
              Why Partner With Us?
            </h3>
            <ul className="space-y-6">
              {whyPartner.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

            <h3 className="text-xl font-serif text-white mb-8 flex items-center gap-3 relative z-10">
              <span className="w-6 h-0.5 bg-accent rounded-full"></span>
              What You Get
            </h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {whatYouGet.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex flex-col items-center text-center gap-3 p-5 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-white/90 leading-tight">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Three bottom pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-border/40 rounded-2xl p-7 text-center hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-semibold text-foreground mb-3">{p.title}</h4>
              <p className="text-sm text-foreground/65 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-foreground/65 mb-6 text-lg font-light">
            Ready to bring Novelle Cambridge to your city?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-block px-12 py-4 bg-accent text-foreground rounded-full font-semibold shadow-[0_4px_20px_rgba(201,160,40,0.35)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,160,40,0.55)] transition-all duration-300"
          >
            Enquire About Franchise
          </button>
          <p className="mt-4 text-sm text-foreground/50">
            Contact us at{' '}
            <a href="tel:+917989261653" className="text-accent hover:text-accent/80 transition-colors font-medium">
              +91 7989261653
            </a>
            {' '}or{' '}
            <a href="mailto:inspira13@gmail.com" className="text-accent hover:text-accent/80 transition-colors font-medium">
              inspira13@gmail.com
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
