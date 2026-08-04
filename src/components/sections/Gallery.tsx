import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Use imported images from generated assets
import gallery1 from '@assets/generated_images/gallery_1.jpg';
import gallery2 from '@assets/generated_images/gallery_2.jpg';
import gallery3 from '@assets/generated_images/gallery_3.jpg';
import gallery4 from '@assets/generated_images/gallery_4.jpg';
import gallery5 from '@assets/generated_images/gallery_5.jpg';
import gallery6 from '@assets/generated_images/gallery_6.jpg';
import gallery7 from '@assets/generated_images/gallery_7.jpg';
import gallery8 from '@assets/generated_images/gallery_8.jpg';

const categories = ["All", "Classroom", "Outdoor", "Art & Craft", "Celebrations"];

const images = [
  { src: gallery1, category: "Classroom", title: "Practical Life" },
  { src: gallery2, category: "Classroom", title: "Sensorial Work" },
  { src: gallery3, category: "Outdoor", title: "Nature Exploration" },
  { src: gallery4, category: "Art & Craft", title: "Creative Expression" },
  { src: gallery5, category: "Classroom", title: "Circle Time" },
  { src: gallery6, category: "Classroom", title: "Math Materials" },
  { src: gallery7, category: "Celebrations", title: "Festival Joy" },
  { src: gallery8, category: "Outdoor", title: "Gardening" },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredImages = images.filter(
    img => activeTab === "All" || img.category === activeTab
  );

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">Our Campus</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Joy in Action</h2>
          <p className="text-foreground/70 text-lg font-light">
            Glimpses of daily life, learning, and celebration in our prepared environment.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-card text-foreground hover:bg-primary/10 border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-card cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white/80 text-xs uppercase tracking-wider font-medium mb-1">{img.category}</span>
                  <h4 className="text-white font-serif text-lg">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
