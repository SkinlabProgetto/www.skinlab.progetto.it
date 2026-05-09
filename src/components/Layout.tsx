import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Il Nostro Mondo', href: '/about' },
    { name: 'Trattamenti', href: '/treatments' },
    { name: 'Skin Journal', href: '/journal' },
    { name: 'Membership', href: '/membership' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-12 py-8',
        scrolled ? 'bg-brand-cream/80 backdrop-blur-md py-6 border-b border-brand-black/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">
          Skin Lab <span className="font-light">Milano</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="hover:opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          to="/book"
          className="hidden md:block px-8 py-3 bg-brand-fluo text-black text-[10px] uppercase tracking-widest rounded-full hover:bg-white transition-all font-bold"
        >
          Prenota un Appuntamento
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-black"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 bg-brand-cream z-40 flex flex-col p-8 pt-24"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-4xl font-display font-black uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                className="text-4xl font-display font-black uppercase tracking-tighter text-brand-neon"
              >
                Prenota Ora
              </Link>
            </div>

            <div className="mt-auto flex justify-between items-end border-t-2 border-brand-black/10 pt-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-neon mb-4">SOCIAL</p>
                <div className="flex space-x-4">
                  <a href="#" className="p-4 border-2 border-brand-black rounded-full hover:bg-brand-black hover:text-white transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="p-4 border-2 border-brand-black rounded-full hover:bg-brand-black hover:text-white transition-all">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-brand-black/50 font-black">MILAN — SINCE 2024</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 px-12 flex flex-col md:flex-row justify-between items-center bg-white/50 backdrop-blur-sm">
      <div className="flex gap-8 text-[9px] uppercase tracking-widest font-bold text-brand-black">
        <span>IG: @SkinLabMilano</span>
        <span>TT: @SkinLabLife</span>
      </div>
      
      <div className="flex-1 mx-16 overflow-hidden relative hidden md:block">
        <div className="whitespace-nowrap flex gap-12 animate-marquee text-[10px] uppercase tracking-[0.2em] opacity-80 py-2 font-bold text-brand-neon">
          <span>• DRENAGGIO LINFATICO • TERAPIA LASER • PEELING CHIMICO • HYDRO-GLOW • LAMINAZIONE CIGLIA •</span>
          <span>• DRENAGGIO LINFATICO • TERAPIA LASER • PEELING CHIMICO • HYDRO-GLOW • LAMINAZIONE CIGLIA •</span>
          <span>• DRENAGGIO LINFATICO • TERAPIA LASER • PEELING CHIMICO • HYDRO-GLOW • LAMINAZIONE CIGLIA •</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6 md:mt-0">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 rounded-full border-2 border-brand-cream bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full border-2 border-brand-cream bg-gray-400"></div>
          <div className="w-6 h-6 rounded-full border-2 border-brand-cream bg-brand-fluo text-[8px] flex items-center justify-center text-black font-bold">+</div>
        </div>
        <span className="text-[9px] uppercase tracking-tighter font-bold text-brand-black">Unisciti a 2.4k membri</span>
      </div>
    </footer>
  );
}

export function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
       <a
        href="https://wa.me/39021234567"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-white text-green-600 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border border-neutral-100"
      >
        <MessageCircle size={24} />
      </a>
      <Link
        to="/book"
        className="px-8 py-4 bg-brand-fluo text-black rounded-full font-display uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-all flex items-center gap-3 group font-bold border border-black/10"
      >
        Prenota Ora
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </Link>
    </div>
  );
}
