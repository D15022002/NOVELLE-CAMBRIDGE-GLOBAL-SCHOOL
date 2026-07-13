import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Method', href: '#method' },
  { name: 'Programs', href: '#programs' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Gallery', href: '#gallery' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-2 z-50 relative group"
          >
            <div className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-primary/10 text-primary' : 'bg-white/20 text-primary-foreground md:text-primary md:bg-primary/10'} backdrop-blur-sm group-hover:bg-primary group-hover:text-white`}>
              <Leaf className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className={`font-serif text-xl md:text-2xl font-medium tracking-tight transition-colors ${
              isScrolled ? 'text-foreground' : 'text-foreground'
            }`}>
              Cambridge
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`text-sm font-medium hover:text-primary transition-colors ${
                      isScrolled ? 'text-foreground/80' : 'text-foreground/90'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#admissions"
              onClick={(e) => { e.preventDefault(); scrollToSection('#admissions'); }}
              className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-full shadow-sm hover:bg-accent/90 hover:-translate-y-0.5 transition-all"
            >
              Book a Tour
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="block px-4 py-3 text-lg font-medium text-foreground rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#admissions"
              onClick={(e) => { e.preventDefault(); scrollToSection('#admissions'); }}
              className="w-full text-center py-3 bg-accent text-accent-foreground text-lg font-medium rounded-xl shadow-sm mt-2"
            >
              Book a Tour
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
