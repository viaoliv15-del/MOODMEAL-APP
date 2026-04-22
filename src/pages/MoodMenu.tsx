import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MOOD_RECOMMENDATIONS } from '../constants';
import { MoodType } from '../types';
import { cn } from '../lib/utils';
import { Heart, Search, Filter } from 'lucide-react';

export function MoodMenu() {
  const [activeMood, setActiveMood] = React.useState<MoodType | 'Semua'>('Semua');
  const [searchQuery, setSearchQuery] = React.useState('');

  const moods: (MoodType | 'Semua')[] = ['Semua', 'Bersemangat', 'Santai', 'Stres', 'Bahagia', 'Lelah', 'Petualang'];

  const filteredMenus = MOOD_RECOMMENDATIONS.filter(item => {
    const matchesMood = activeMood === 'Semua' || item.mood === activeMood;
    const matchesSearch = item.food.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMood && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif italic"
          >
            Daftar Menu Sesuai Mood
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Jelajahi koleksi hidangan kami yang dirancang khusus untuk meningkatkan atau menyeimbangkan suasana hati Anda.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between bg-slate-50 p-6 rounded-3xl border border-slate-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Cari menu favorit Anda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-700"
            />
          </div>
          
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <Filter size={20} className="text-slate-400 hidden md:block" />
            <div className="flex gap-2">
              {moods.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setActiveMood(mood)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                    activeMood === mood 
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20" 
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  )}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMenus.map((item, idx) => (
              <motion.div
                layout
                key={`${item.food}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-2xl transition-shadow group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.food} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary shadow-sm uppercase tracking-wider">
                    {item.mood}
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-brand-primary transition-colors shadow-sm">
                    <Heart size={18} />
                  </button>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">{item.food}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-sm font-bold text-slate-400">#MoodMealPicks</span>
                    <button className="text-brand-primary font-bold text-sm hover:underline">
                      Lihat Resep
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMenus.length === 0 && (
          <div className="text-center py-24">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Menu Tidak Ditemukan</h3>
            <p className="text-slate-500">Coba gunakan kata kunci lain atau pilih filter mood yang berbeda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
