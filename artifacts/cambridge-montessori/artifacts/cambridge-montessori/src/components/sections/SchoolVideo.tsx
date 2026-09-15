import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import heroImage from '@assets/generated_images/hero.jpg';

export function SchoolVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="video" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block"
          >
            Experience Our School
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
          >
            A Glimpse Into Our World
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground/70 font-light text-lg"
          >
            See how we create an inspiring, joyful, and future-ready learning environment for every child.
          </motion.p>
        </div>

        {/* Video Thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/30 cursor-pointer group" onClick={() => setIsOpen(true)}>
            <img
              src={heroImage}
              alt="School Video Preview"
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/40 transition-colors duration-300"></div>

            {/* Gold accent border on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/40 rounded-3xl transition-all duration-300"></div>

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent shadow-[0_0_60px_rgba(201,160,40,0.5)] flex items-center justify-center group-hover:shadow-[0_0_80px_rgba(201,160,40,0.7)] transition-shadow duration-300"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-foreground fill-foreground ml-1" />
              </motion.div>
              <p className="text-white font-medium text-lg drop-shadow-md">Watch Our School Story</p>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent/60 rounded-tl-xl"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-accent/60 rounded-tr-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-accent/60 rounded-bl-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent/60 rounded-br-xl"></div>
        </motion.div>

        {/* Highlights row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {[
            { value: "100+", label: "Happy Learners" },
            { value: "10+", label: "Expert Educators" },
            { value: "NEP 2020", label: "Aligned Curriculum" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-serif text-primary font-semibold">{stat.value}</p>
              <p className="text-sm text-foreground/60 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Replace the src with the school's actual YouTube embed URL */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/?autoplay=1"
              title="Novelle Cambridge Global School"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <p className="absolute bottom-8 text-white/50 text-sm">Contact the school to update the video link</p>
        </motion.div>
      )}
    </section>
  );
}
