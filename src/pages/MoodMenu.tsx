import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MOOD_RECOMMENDATIONS } from '../constants';
import { MoodType, MoodRecommendation } from '../types';
import { cn } from '../lib/utils';
import { Heart, Search, Filter, Baby, AlertCircle, CheckCircle2, Sparkles, HeartPulse } from 'lucide-react';
import { RecipeModal } from '../components/RecipeModal';

export function MoodMenu() {
  const [activeMood, setActiveMood] = React.useState<MoodType | 'Semua'>('Semua');
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Recipe details modal state
  const [selectedRecipe, setSelectedRecipe] = React.useState<MoodRecommendation | null>(null);
  
  // Pregnancy mode toggle
  const [pregnantMode, setPregnantMode] = React.useState(true);
  // Filter focus for nutrient
  const [nutrientFocus, setNutrientFocus] = React.useState<'Semua' | 'Folat' | 'Zat Besi' | 'Kalsium' | 'Protein' | 'Omega-3'>('Semua');

  const moods: (MoodType | 'Semua')[] = ['Semua', 'Bersemangat', 'Santai', 'Stres', 'Bahagia', 'Lelah', 'Petualang'];

  const nutrientOptions = [
    { key: 'Semua', label: '🤰 Semua Nutrisi' },
    { key: 'Folat', label: '🥬 Tinggi Asam Folat (Saraf & Otak)' },
    { key: 'Zat Besi', label: '🥩 Tinggi Zat Besi (Cegah Anemia)' },
    { key: 'Kalsium', label: '🥛 Tinggi Kalsium (Kekuatan Tulang)' },
    { key: 'Protein', label: '🍳 Tinggi Protein (Tumbuh Kembang)' },
    { key: 'Omega-3', label: '🐟 Kaya Omega-3 / DHA' }
  ] as const;

  const filteredMenus = MOOD_RECOMMENDATIONS.filter(item => {
    const matchesMood = activeMood === 'Semua' || item.mood === activeMood;
    const matchesSearch = item.food.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesMood || !matchesSearch) return false;

    // Filter by nutrient choice when in pregnantMode
    if (pregnantMode && nutrientFocus !== 'Semua') {
      if (!item.nutrisiHamil) return false;

      if (nutrientFocus === 'Folat') {
        const folatVal = item.nutrisiHamil.folat || '';
        const num = parseInt(folatVal);
        return num >= 20 || folatVal.toLowerCase().includes('tinggi');
      }
      if (nutrientFocus === 'Zat Besi') {
        const besiVal = item.nutrisiHamil.zatBesi || '';
        const num = parseInt(besiVal);
        return num >= 18 || besiVal.toLowerCase().includes('tinggi') || besiVal.toLowerCase().includes('juara');
      }
      if (nutrientFocus === 'Kalsium') {
        const kalsiumVal = item.nutrisiHamil.kalsium || '';
        const num = parseInt(kalsiumVal);
        return num >= 12 || kalsiumVal.toLowerCase().includes('tinggi') || kalsiumVal.toLowerCase().includes('mewah');
      }
      if (nutrientFocus === 'Protein') {
        const proteinVal = item.nutrisiHamil.protein || '';
        const num = parseInt(proteinVal);
        return num >= 15 || proteinVal.toLowerCase().includes('tinggi');
      }
      if (nutrientFocus === 'Omega-3') {
        return !!item.nutrisiHamil.omega3 || item.nutrisiHamil.manfaatHamil.toLowerCase().includes('dha') || item.nutrisiHamil.manfaatHamil.toLowerCase().includes('omega');
      }
    }

    return true;
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 font-bold text-xs mb-4 uppercase tracking-wider"
          >
            <Baby size={14} className="animate-pulse" />
            Nutrisi Terbaik Untuk Ibu Hamil
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif italic"
          >
            Daftar Menu Sesuai Mood & Nutrisi Kehamilan
          </motion.h1>
          
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Jelajahi sajian kuliner kami yang disesuaikan dengan suasana hati Anda serta dilengkapi <span className="font-bold text-rose-600">Panduan Nutrisi Eksklusif</span> untuk kesehatan optimal ibu mengandung dan perkembangan janin.
          </p>
        </div>

        {/* Global Preference / Pregnancy Mode Toggle Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 mb-10 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={cn(
              "p-4 rounded-2xl transition-all duration-300",
              pregnantMode ? "bg-rose-50 text-rose-600" : "bg-slate-150 text-slate-400 bg-slate-100"
            )}>
              <Baby size={32} />
            </div>
            <div>
              <h3 className="font-bold text-slate-950 text-lg flex items-center gap-2">
                Panduan Konsumsi & Gizi Ibu Hamil
                <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-serif font-bold">Rekomendasi Ahli</span>
              </h3>
              <p className="text-slate-500 text-sm max-w-xl">
                Aktifkan mode ini untuk menampilkan takaran asam folat, zat besi, kalsium, protein gizi, serta catatan keamanan khusus kandungan gizi kehamilan di setiap menu masakan.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full lg:w-auto justify-end">
            <span className="text-sm font-bold text-slate-500">Mode Ibu Hamil:</span>
            <button
              onClick={() => {
                setPregnantMode(!pregnantMode);
                if (!pregnantMode) setNutrientFocus('Semua');
              }}
              className={cn(
                "w-16 h-9 rounded-full relative transition-colors focus:outline-none",
                pregnantMode ? "bg-rose-500" : "bg-slate-350 bg-slate-300"
              )}
            >
              <div className={cn(
                "w-7 h-7 bg-white rounded-full absolute top-1 transition-transform shadow-md",
                pregnantMode ? "translate-x-8" : "translate-x-1"
              )} />
            </button>
          </div>
        </div>

        {/* Search, Mood Filter & Pregnancy Nutrient Filter Panel */}
        <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-slate-100 mb-12 space-y-6">
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text"
                placeholder="Cari menu, nutrisi, atau bahan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500/15 focus:border-rose-400 focus:bg-white transition-all text-slate-700"
              />
            </div>
            
            {/* Mood Filters */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              <Filter size={18} className="text-slate-400 hidden md:block" />
              <div className="flex gap-2">
                {moods.map((mood) => (
                  <button
                    key={mood}
                    onClick={() => setActiveMood(mood)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border",
                      activeMood === mood 
                        ? "bg-brand-primary border-brand-primary text-white shadow-sm shadow-brand-primary/20" 
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-Filters for Nutrient Focus when pregnantMode is Active */}
          <AnimatePresence>
            {pregnantMode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-6 border-t border-slate-100 space-y-3 overflow-hidden"
              >
                <div className="flex items-center gap-2 text-rose-700 text-sm font-bold">
                  <Sparkles size={16} />
                  <span>Saring Berdasarkan Fokus Nutrisi Mikro Kehamilan:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {nutrientOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setNutrientFocus(opt.key)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                        nutrientFocus === opt.key
                          ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                          : "bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-700 border-slate-200"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMenus.map((item, idx) => {
              // Check if raw fish or spicy trigger that need caution
              const isCaution = item.food.toLowerCase().includes('sushi') || 
                                item.food.toLowerCase().includes('ceviche') ||
                                item.food.toLowerCase().includes('sashimi');
                                
              return (
                <motion.div
                  layout
                  key={`${item.food}-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl border border-slate-100 flex flex-col group transition-shadow"
                >
                  {/* Card Image Area */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.food} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Top Row Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold text-brand-primary shadow-sm uppercase tracking-wider">
                        {item.mood}
                      </div>

                      {pregnantMode && item.nutrisiHamil && (
                        <div className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-extrabold shadow-sm flex items-center gap-1.5 backdrop-blur-sm",
                          isCaution 
                            ? "bg-amber-500 text-white" 
                            : "bg-emerald-500 text-white"
                        )}>
                          {isCaution ? (
                            <>
                              <AlertCircle size={12} />
                              Butuh Penyesuaian
                            </>
                          ) : (
                            <>
                              <CheckCircle2 size={12} />
                              Aman Dikonsumsi
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    <button className="absolute bottom-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-rose-500 transition-colors shadow-md">
                      <Heart size={16} />
                    </button>
                  </div>
                  
                  {/* Card Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {item.food}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                      {item.description}
                    </p>

                    {/* Highly Interactive Pregnancy Nutrition Section */}
                    {pregnantMode && item.nutrisiHamil && (
                      <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/50 mb-6 space-y-4">
                        <div className="flex items-center gap-1.5 text-rose-800 text-xs font-bold">
                          <HeartPulse size={14} className="text-rose-500" />
                          <span>Profil Nutrisi Kehamilan (Rencana Gizi):</span>
                        </div>

                        {/* Nutrition Grid */}
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 flex justify-between items-center">
                            <span className="text-slate-500">🥬 Asam Folates:</span>
                            <span className="font-bold text-rose-700">{item.nutrisiHamil.folat || '-'}</span>
                          </div>
                          <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 flex justify-between items-center">
                            <span className="text-slate-500">🥩 Zat Besi:</span>
                            <span className="font-bold text-rose-700">{item.nutrisiHamil.zatBesi || '-'}</span>
                          </div>
                          <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 flex justify-between items-center">
                            <span className="text-slate-500">🥛 Kalsium:</span>
                            <span className="font-bold text-rose-700">{item.nutrisiHamil.kalsium || '-'}</span>
                          </div>
                          <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 flex justify-between items-center">
                            <span className="text-slate-500">🍳 Protein:</span>
                            <span className="font-bold text-rose-700">{item.nutrisiHamil.protein || '-'}</span>
                          </div>
                          {item.nutrisiHamil.omega3 && (
                            <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 flex justify-between items-center col-span-2">
                              <span className="text-slate-500">🐟 Kandungan Omega-3 (DHA):</span>
                              <span className="font-bold text-rose-700">{item.nutrisiHamil.omega3}</span>
                            </div>
                          )}
                        </div>

                        {/* Qualitative Benefit */}
                        <div className="text-slate-600 text-xs bg-white p-2.5 rounded-xl border border-rose-100/30 leading-relaxed font-light">
                          <span className="font-bold text-rose-800">Manfaat:</span> {item.nutrisiHamil.manfaatHamil}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-400">#MoodMealPregnancy</span>
                      <button 
                        onClick={() => setSelectedRecipe(item)}
                        className="text-rose-600 hover:text-rose-700 font-bold text-sm hover:underline transition-colors cursor-pointer"
                      >
                        Lihat Resep & Tips Memasak
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredMenus.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm mt-8">
            <div className="bg-rose-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-400">
              <Baby size={36} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Menu dengan Gizi Pilihan Tidak Ditemukan</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Cobalah mengganti filter nutrisi, memilih mood yang berbeda, atau menghidupkan kembali "Mode Ibu Hamil" untuk melihat seluruh usulan menu.
            </p>
          </div>
        )}
      </div>

      {/* Exquisite Recipe Modal Detail Drawer */}
      <RecipeModal 
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        recipe={selectedRecipe}
      />
    </div>
  );
}
