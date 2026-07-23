import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import schoolLogo from '@assets/WhatsApp_Image_2026-07-23_at_17.04.22_1784812035566.jpeg';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0F1C30] text-slate-300 py-16 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src={schoolLogo}
                alt="Novelle Cambridge Global School"
                className="w-14 h-14 object-contain rounded-full"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl text-white font-semibold">Novelle Cambridge</span>
                <span className="text-sm text-accent">Global School</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Under Inspira Educational Pvt. Ltd. — Inspiring Excellence Beyond Boundaries. Where Global Education Meets Local Opportunities.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918555015234" target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Our Programs', 'Admissions', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">Visakhapatnam, Andhra Pradesh – 530041</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+918555015234" className="hover:text-accent transition-colors">+91 8555015234</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:kg.cmps.vizag@gmail.com" className="hover:text-accent transition-colors">kg.cmps.vizag@gmail.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Globe className="w-5 h-5 text-accent shrink-0" />
                <a href="https://ncgs.in" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">ncgs.in</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Novelle Cambridge Global School — Inspira Educational Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
