import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Baby } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NavbarProps {}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Daftar Menu', path: '/menu' },
    { name: 'Paket Layanan', path: '/packages' },
    { name: 'Tentang Kami', path: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass-morphism py-4 px-6 md:px-12 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="bg-brand-primary p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-md shadow-brand-primary/20">
          <Baby className="text-white w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight text-slate-900 leading-none">MoodMeal App</span>
          <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-widest leading-none mt-1">Edisi Ibu Hamil</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "text-sm font-medium transition-colors hover:text-brand-primary",
              location.pathname === link.path ? "text-brand-primary" : "text-slate-600"
            )}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          to="/packages"
          className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-primary transition-all shadow-lg shadow-brand-primary/20"
        >
          Mulai Sekarang
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium py-2",
                  location.pathname === link.path ? "text-brand-primary" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/packages"
              onClick={() => setIsOpen(false)}
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold text-center mt-2"
            >
              Mulai Sekarang
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
