import { Leaf, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A2530] text-slate-300 py-16 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/20 rounded-xl text-primary">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-serif text-2xl text-white font-medium">Cambridge</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A nurturing Montessori environment where little minds blossom into lifelong learners through hands-on, joyful exploration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Our Programs', 'Montessori Method', 'Gallery', 'Admissions'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Learning Lane, Education District, Cityville, 12345</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>admissions@cambridgemontessori.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">School Hours</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Mon - Fri</span>
                <span>8:00 AM - 3:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Extended Day</span>
                <span>3:30 PM - 5:30 PM</span>
              </li>
              <li className="flex justify-between pb-2 text-primary/80">
                <span className="flex items-center gap-2">Sat - Sun</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Cambridge Montessori School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
