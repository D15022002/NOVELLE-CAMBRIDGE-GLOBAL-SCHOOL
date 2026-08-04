import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import schoolLogo from '@assets/WhatsApp_Image_2026-07-23_at_17.04.22_1784812035566.jpeg';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Franchise', href: '#franchise' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-3 z-50 relative group"
          >
            <img
              src={schoolLogo}
              alt="Novelle Cambridge Global School"
              className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full shadow-sm"
            />
            <div className="flex flex-col leading-tight">
              <span className={`font-serif text-base md:text-lg font-semibold tracking-tight transition-colors ${
                isScrolled ? 'text-primary' : 'text-white drop-shadow-md'
              }`}>
                Novelle Cambridge
              </span>
              <span className={`text-xs font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-accent' : 'text-accent'
              }`}>
                Global School
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`text-sm font-medium hover:text-accent transition-colors ${
                      isScrolled ? 'text-foreground/80' : 'text-white/90 drop-shadow-sm'
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
              className="flex items-center gap-2 px-4 py-2 bg-accent text-foreground text-sm font-semibold rounded-full shadow-sm hover:bg-accent/90 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Admissions Open
            </a>
          </nav>

          {/* Tablet Nav (md only — compact, no button) */}
          <nav className="hidden md:flex lg:hidden items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`text-xs font-medium hover:text-accent transition-colors ${
                  isScrolled ? 'text-foreground/80' : 'text-white/90 drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 z-50 relative transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
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
            className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="block px-4 py-3 text-base font-medium text-foreground rounded-lg hover:bg-muted/60 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#admissions"
              onClick={(e) => { e.preventDefault(); scrollToSection('#admissions'); setIsMobileMenuOpen(false); }}
              className="flex items-center justify-center gap-2 w-full text-center py-3 bg-accent text-foreground text-base font-semibold rounded-xl shadow-sm mt-1"
            >
              Admissions Open
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
