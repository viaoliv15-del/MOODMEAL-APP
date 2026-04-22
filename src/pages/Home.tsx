import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Quote, Heart, Send, CheckCircle2 } from 'lucide-react';
import { MOOD_RECOMMENDATIONS, TESTIMONIALS } from '../constants';
import { MoodType } from '../types';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Home() {
  const [selectedMood, setSelectedMood] = React.useState<MoodType | null>(null);
  const recommendation = MOOD_RECOMMENDATIONS.find(r => r.mood === selectedMood);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920" 
            alt="Delicious Food Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 text-brand-primary font-bold text-sm mb-6 uppercase tracking-wider">
              <Sparkles size={16} />
              MEMPERKENALKAN MOODMEAL AI
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              Suasana Hati Anda Adalah <br /> <span className="text-brand-primary italic underline decoration-white/20 underline-offset-8">Rahasia Utama Kami</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Kami memecahkan kode emosi Anda dan memadukannya dengan pengalaman kuliner yang mengubah hidup. Berbasis cloud, berbasis AI, dan sangat personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  document.getElementById('mood-selector')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 group shadow-xl shadow-brand-primary/30"
              >
                Scan Mood Saya
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mood Selector Section */}
      <section id="mood-selector" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-serif italic text-pretty">Bagaimana perasaan Anda saat ini?</h2>
            <p className="text-slate-600">Pilih vibe Anda untuk melihat rekomendasi yang dipersonalisasi.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {MOOD_RECOMMENDATIONS.map((r) => (
              <button
                key={r.mood}
                onClick={() => setSelectedMood(r.mood)}
                className={cn(
                  "p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3",
                  selectedMood === r.mood 
                    ? "bg-brand-primary border-brand-primary text-white shadow-lg scale-105" 
                    : "bg-white border-slate-100 text-slate-600 hover:border-brand-primary/30 hover:bg-brand-primary/5"
                )}
              >
                <span className="font-bold tracking-wide">{r.mood}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedMood && recommendation && (
              <motion.div
                key={selectedMood}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100"
              >
                <div className="relative group overflow-hidden rounded-3xl">
                  <img 
                    src={recommendation.image} 
                    alt={recommendation.food} 
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-brand-primary shadow-lg">
                    Pilihan {recommendation.mood}
                  </div>
                </div>
                <div className="space-y-6">
                  <span className="text-brand-primary font-bold tracking-widest text-sm uppercase">Direkomendasikan untuk Anda</span>
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">{recommendation.food}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{recommendation.description}</p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-brand-primary/20">
                       Pesan Sekarang
                    </button>
                    <button className="border-2 border-slate-200 text-slate-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                       Simpan Resep <Heart size={18} />
                    </button>
                  </div>
                  <div className="pt-6 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <img 
                          key={i} 
                          src={`https://i.pravatar.cc/50?u=${i+10}`} 
                          className="w-8 h-8 rounded-full border-2 border-white"
                          referrerPolicy="no-referrer"
                        />
                      ))}
                    </div>
                    <span>Disukai oleh 2.400+ orang dengan perasaan ini</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif italic">Apa Kata Moodie Kami</h2>
              <p className="text-slate-600 text-lg">Cerita nyata dari orang-orang yang mengubah hubungan mereka dengan makanan dan merek mereka.</p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 bg-brand-primary/10 rounded-2xl text-brand-primary border border-brand-primary/20">
                <span className="text-2xl font-bold">4.9/5</span>
                <p className="text-xs uppercase tracking-widest font-bold">Rating Rata-rata</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-[2rem] relative group hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100"
              >
                <div className="absolute top-8 right-8 text-slate-200 group-hover:text-brand-primary/20 transition-colors">
                  <Quote size={48} />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-2xl object-cover shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed">"{t.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 blur-[100px] rounded-full" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Siap sinkronkan mood Anda <br /> dengan menu Anda?</h2>
          <p className="text-brand-warm/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Bergabunglah dengan 50.000+ pengguna yang makan lebih baik, merasa lebih baik, dan membangun merek yang lebih kuat dengan MoodMeal.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/packages"
              className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center gap-2 group shadow-2xl shadow-brand-primary/40"
            >
              Mulai Uji Coba Gratis
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <div className="flex flex-col gap-2 items-start sm:items-center text-sm text-brand-warm/60 font-medium">
               <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-accent" /> Tanpa kartu kredit</div>
               <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-accent" /> Batalkan kapan saja</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
