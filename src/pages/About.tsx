import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Baby, HeartPulse, Sparkles, UserCheck } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Bunda Sehat Tercakup', value: '50Rb+' },
    { label: 'Saran Gizi Klinis Sukses', value: '1.2Jt+' },
    { label: 'Dokter & Nutrisionis Mitra', value: '180+' },
    { label: 'Anak Lahir Bugar (99.9%)', value: '45Rb+' },
  ];

  const values = [
    {
      title: 'Dukungan Empati Bumil',
      description: 'Kami memahami perubahan hormonal dan naik-turunnya emosi (mood swing) selama mengandung adalah hal yang nyata. Kami membantu Anda memenuhinya dengan rasa bangga.',
      icon: <Heart className="text-brand-primary" />
    },
    {
      title: 'Standar Gizi Kebidanan',
      description: 'Seluruh resep kami diaudit secara ketat oleh tim dokter spesialis kandungan dan ahli gizi terakreditasi demi memastikan keamanan penuh janin.',
      icon: <HeartPulse className="text-brand-accent" />
    },
    {
      title: 'Inovasi Detektor AI',
      description: 'Memadukan kecerdasan buatan visi komputer (face scanner) dengan kalkulasi takaran mikro, menciptakan panduan menu hamil paling modern di tanah air.',
      icon: <Sparkles className="text-brand-primary" />
    }
  ];

  return (
    <div className="pt-32 pb-24 overflow-hidden bg-slate-50/20">
      {/* Vision Section */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-brand-primary font-bold tracking-widest text-xs uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-100 mb-4 inline-block">
                Misi Mulia Kami
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 font-serif italic leading-tight">
                Merawat Tunas Bangsa, <br /> Dimulai dari Nutrisi Suasana Hati Bunda.
              </h1>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                Didirikan pada tahun 2024, <span className="font-bold text-rose-600">MoodMeal Bumil App</span> lahir dari kepedulian tulus terhadap kesehatan calon ibu baru. Seringkali, ibu mengandung mengalami ngidam yang bertabrakan dengan pantangan medis, atau kelelahan ekstrim yang menurunkan selera makan sehat mereka.
              </p>
              <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed">
                Kami hadir untuk memecahkan dilema tersebut. Melalui kecerdasan buatan pemindai stres dan penilai ngidam, kami menawarkan rekomendasi hidangan lezat berstandardisasi medis yang dinamis, tinggi asam folat baktif, zat besi pencegah anemia, dan kalsium murni.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-100">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-rose-600 mb-1 font-serif">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-extrabold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.93 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.7 }}
               className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200" 
                alt="Tim Gizi & Ibu Hamil Sejahtera" 
                className="rounded-[3rem] w-full shadow-2xl border border-rose-100/30 object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-6 bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block border border-white/10 max-w-sm">
                 <QuoteIcon className="w-10 h-10 mb-4 opacity-50 text-rose-500" />
                 <p className="text-lg font-bold italic leading-relaxed">"Satu suapan gizi premium bunda hari ini adalah masa depan kecerdasan anak esok hari."</p>
                 <p className="mt-4 text-xs font-bold text-rose-300 uppercase tracking-widest">— dr. Farrah Syarifa, Sp.GK (Ahli Gizi Medis)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 blur-[100px] rounded-full animate-pulse" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-rose-400 font-extrabold tracking-widest text-xs uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-4 inline-block">
              Pilar Integritas Medis
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif italic text-white leading-tight">
              Apa yang Memandu Layanan Bumil Kami
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Kami menggabungkan cinta, ketelitian klinis, dan kepraktisan kuliner terbaik untuk kesejahteraan total ibu hamil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {values.map((v, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/10 group-hover:border-rose-500/50 group-hover:bg-rose-500/10 transition-all duration-300">
                   <div className="[&>svg]:w-10 [&>svg]:h-10">
                     {v.icon}
                   </div>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-rose-300 transition-colors">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Clinical Certification Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-3.5 bg-rose-50 text-rose-500 rounded-2xl mb-6 border border-rose-100 shadow-sm">
            <ShieldCheck size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif">
            Sertifikasi Medis & Kepatuhan Gizi Klinis
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Kami menjamin bahwa semua pedoman mineral harian (AKG) yang tertera dihitung berdasarkan Angka Kecukupan Gizi Kementerian Kesehatan Indonesia untuk ibu mengandung. Gizi aman, bebas kontaminasi mentah, dan disesuaikan per trimester.
          </p>
          
          <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-300 justify-items-center items-center">
             <div className="font-bold text-lg flex items-center gap-2 text-slate-800"><Baby size={18} className="text-rose-500" /> INDONESIAN OBGYN ASC</div>
             <div className="font-bold text-lg flex items-center gap-2 text-slate-800"><HeartPulse size={18} className="text-rose-500" /> DEPARTEMEN GIZI KLINIS</div>
             <div className="font-bold text-lg flex items-center gap-2 text-slate-800"><UserCheck size={18} className="text-rose-500" /> HALAL FOOD AUDITED</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017L11.017 21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H2.017L2.017 21H5.017Z" />
    </svg>
  );
}
