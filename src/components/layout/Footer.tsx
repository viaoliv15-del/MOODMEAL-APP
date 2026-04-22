import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Globe, Camera, Video, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-300 pt-16 pb-8 px-6 md:px-12 border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-primary p-2 rounded-lg">
              <UtensilsCrossed className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">MoodMeal</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Suasana hati Anda adalah menu kami. Temukan hidangan yang dipadukan dengan sempurna oleh AI untuk mencocokkan vibe Anda saat ini.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Tautan Cepat</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-primary transition-colors">Beranda</Link></li>
            <li><Link to="/menu" className="hover:text-brand-primary transition-colors">Daftar Menu</Link></li>
            <li><Link to="/packages" className="hover:text-brand-primary transition-colors">Paket Layanan</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">Tentang Kami</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Dukungan</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-brand-primary transition-colors">Pusat Bantuan</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Syarat & Ketentuan</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Hubungi Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-brand-primary transition-colors border border-slate-800">
              <Camera size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-brand-primary transition-colors border border-slate-800">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-brand-primary transition-colors border border-slate-800">
              <Video size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-brand-primary transition-colors border border-slate-800">
              <Globe size={18} />
            </a>
          </div>
          <p className="mt-6 text-xs bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
            Ikuti platform sosial kami untuk inspirasi hidangan harian!
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 text-center text-xs">
        <p>© {currentYear} MoodMeal. Dibuat dengan Cinta & Selera Makan.</p>
      </div>
    </footer>
  );
}
