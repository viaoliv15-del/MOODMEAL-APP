import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Heart, 
  ShieldAlert, 
  Sparkles, 
  PhoneCall, 
  MessageSquare, 
  HeartPulse, 
  ClipboardCheck, 
  Truck, 
  ShieldCheck, 
  Award, 
  Baby, 
  CalendarDays 
} from 'lucide-react';
import { SERVICE_PACKAGES } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const SUPPORT_CHANNELS = [
  { icon: <MessageSquare size={20} />, name: 'Chat Bidan & Nutrisionis 24/7' },
  { icon: <PhoneCall size={20} />, name: 'Telemedicine Dokter Kandungan' },
  { icon: <HeartPulse size={20} />, name: 'Pemantauan Denyut Jantung Janin' },
  { icon: <ClipboardCheck size={20} />, name: 'Saran Menu Spesifik Trimester' },
  { icon: <Truck size={20} />, name: 'Pengiriman Catering Gizi Sehat' },
];

// Rich metadata mapping recommended pregnancy menus and benefits for each service package
const PACKAGE_DETAILS_MAP: Record<string, {
  recommendedMenu: string;
  menuDescription: string;
  menuImage: string;
  stage: string;
  benefits: string[];
}> = {
  basic: {
    recommendedMenu: 'Avocado Berry Folate Bowl & Sup Jahe Hangat',
    menuDescription: 'Kombinasi alpukat mentega, buah beri, dan rempah jahe segar untuk meningkatkan nafsu makan dan asupan asam folat alami.',
    menuImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    stage: 'Trimester 1 (Fokus Redakan Mual & Formasi Saraf)',
    benefits: [
      'Mencegah risiko cacat lahir bumbung saraf (Neural Tube Defects) dengan asam folat alami.',
      'Sangat efektif menenangkan mual pagi hari (Morning Sickness) lewat ramuan jahe hangat.',
      'Mendukung kestabilan kondisi mental & energi harian bumil.'
    ]
  },
  pro: {
    recommendedMenu: 'Golden Grilled Salmon King & Salad Almond Kalsium',
    menuDescription: 'Ikan salmon kaya akan DHA dan EPA omega-3 dikombinasikan dengan kalsium kacang almond untuk ketahanan sendi dan tulang janin.',
    menuImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    stage: 'Trimester 2 (Fokus Tumbuh Kembang Fetus & Struktur Tulang)',
    benefits: [
      'Menstimulasi pembentukan kognitif dan kecerdasan otak janin di masa aktif.',
      'Menyediakan 35% lebih banyak kalsium murni untuk sendi dan gigi janin berkepadatan tinggi.',
      'Membantu pencegahan pre-eklampsia dengan menyeimbangkan tekanan darah ibu.'
    ]
  },
  enterprise: {
    recommendedMenu: 'Spinach Iron-Blast Tenderloin & Jus Bit Merah',
    menuDescription: 'Paduan zat besi bio-available tinggi dari tenderloin sapi premium dengan bayam organik untuk meningkatkan hemoglobin darah.',
    menuImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    stage: 'Trimester 3 & Persiapan Lahir (Fokus Anti-Anemia & Stamina)',
    benefits: [
      'Mengurangi risiko perdarahan bersalin dengan membangun cadangan hemoglobin ibu.',
      'Mengoptimalkan pengiriman oksigen dan sari makanan dari plasenta ke tubuh bayi.',
      'Meningkatkan kekuatan otot panggul dan mempersiapkan produksi ASI kolostrum berkualitas tinggi.'
    ]
  }
};

export function Packages() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen relative bg-slate-50">
      
      {/* Heartwarming Motherhood Background Overlay Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1920" 
          alt="Beautiful Mother and baby" 
          className="w-full h-full object-cover object-center opacity-6 filter saturate-50 brightness-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white/80 to-slate-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title Section with Baby Badge */}
        <div className="text-center mb-20 animate-fade-in">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 font-bold text-xs mb-4 uppercase tracking-wider"
          >
            <Baby size={14} className="text-rose-500 animate-pulse" />
            Nutrisi Tumbuh Kembang Buah Hati
          </motion.div>
          
          <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6 font-serif italic text-pretty">
            Paket Gizi & Rekomendasi Menu Bumil
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Temukan tingkat bimbingan asupan nutrisi terbaik untuk mendukung kehamilan yang sehat dan bahagia. Setiap paket menyertakan rencana memasak khusus, uji gizi mikro, serta pendampingan langsung oleh praktisi kebidanan.
          </p>
        </div>

        {/* Pricing & Pregnancy-Specific Diet Plan Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {SERVICE_PACKAGES.map((pkg, idx) => {
            const meta = PACKAGE_DETAILS_MAP[pkg.id] || PACKAGE_DETAILS_MAP.basic;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={cn(
                  "relative rounded-[2.5rem] flex flex-col justify-between h-full border overflow-hidden shadow-md hover:shadow-xl transition-all duration-300",
                  pkg.recommended 
                    ? "bg-slate-900 text-white border-slate-900 ring-2 ring-rose-500/10 scale-102 lg:scale-105 z-10" 
                    : "bg-white text-slate-900 border-slate-100 hover:border-brand-primary/30"
                )}
              >
                {pkg.recommended && (
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-4 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest shadow-md z-20 animate-pulse">
                    Pilihan Utama
                  </div>
                )}

                {/* Card Top: Package ID & Price */}
                <div className="p-8 pb-4">
                  <div className="inline-flex items-center gap-1 text-[11px] font-extrabold text-rose-500 uppercase tracking-widest mb-2">
                    <CalendarDays size={12} />
                    {meta.stage}
                  </div>

                  <h3 className={cn("text-2xl font-bold mb-2 font-serif", pkg.recommended ? "text-white" : "text-slate-900")}>
                    {pkg.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-4.5xl font-black">{pkg.price}</span>
                    <span className={cn("text-xs font-semibold", pkg.recommended ? "text-slate-400" : "text-slate-500")}>
                      /{pkg.period}
                    </span>
                  </div>
                  
                  <p className={cn("text-xs md:text-sm leading-relaxed mb-6", pkg.recommended ? "text-slate-400" : "text-slate-500")}>
                    {pkg.description}
                  </p>
                </div>

                {/* Pregnant Menu Representation Feature */}
                <div className="px-8 py-4 bg-slate-500/5 border-y border-slate-500/10 space-y-3">
                  <span className="text-[10px] uppercase font-black tracking-wider text-rose-500 flex items-center gap-1">
                    <Sparkles size={12} />
                    Saran Menu Utama Kehamilan:
                  </span>
                  
                  <div className="flex gap-3 items-center">
                    <img 
                      src={meta.menuImage} 
                      alt={meta.recommendedMenu} 
                      className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-black text-pretty leading-snug">
                        {meta.recommendedMenu}
                      </h4>
                      <p className={cn("text-[10px] mt-0.5 line-clamp-2 leading-relaxed font-light", pkg.recommended ? "text-slate-400" : "text-slate-500")}>
                        {meta.menuDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Package Features & Core Benefits */}
                <div className="p-8 pt-6 flex-grow space-y-6">
                  {/* Features List */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Layanan & Fitur:</span>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <div className={cn(
                          "mt-0.5 p-0.5 rounded-full flex-shrink-0 h-fit w-fit", 
                          pkg.recommended 
                            ? "bg-rose-500 text-white" 
                            : "bg-rose-50 text-rose-600 border border-rose-100"
                        )}>
                          <Check size={10} />
                        </div>
                        <span className="text-xs font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefit list explicitly detailing biological health outcomes */}
                  <div className="space-y-3 pt-4 border-t border-slate-200/10">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-rose-500">Manfaat Biologis Utama:</span>
                    {meta.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <Heart className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <p className={cn("text-xs leading-relaxed font-light", pkg.recommended ? "text-slate-300" : "text-slate-600")}>
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package CTA */}
                <div className="p-8 pt-0">
                  <Link 
                    to="/payment"
                    className={cn(
                      "w-full py-4 rounded-2xl font-bold text-sm transition-all shadow-md text-center block cursor-pointer",
                      pkg.recommended 
                        ? "bg-brand-primary text-white hover:bg-rose-600 shadow-brand-primary/25" 
                        : "bg-black text-white hover:bg-slate-900"
                    )}
                  >
                    Mulai Program & Menu Gizi
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clinical concierge explanation section */}
        <section className="bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-slate-150 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual description column */}
            <div className="space-y-6">
              <div className="bg-rose-50 border border-rose-100 text-brand-primary w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner">
                <Award size={24} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight font-serif">
                Lebih dari Sekadar Resep: <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 italic">
                  Peduli Tumbuh Kembang Bayi
                </span>
              </h2>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Rencana pendampingan gizi kami tidak hanya menawarkan daftar makanan lezat. Kami bangga memberikan integrasi medis lengkap yang menjaga bunda dari mual parah, malnutrisi, kelelahan, serta mendampingi bunda melewati trimester awal hingga persalinan.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4.5 bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100">
                  <div className="p-2.5 bg-rose-50 text-rose-500 rounded-xl h-fit border border-rose-100 flex-shrink-0">
                    <ShieldAlert size={18} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-1">Peringatan Pantangan Alami</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">System kami otomatis mengidentifikasi bahan-bahan tinggi risiko parasit (seperti sushi mentah, ceviche, telur mentah) dan memberikan menu penyeimbang yang matang sempurna.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4.5 bg-slate-50/50 rounded-2xl shadow-sm border border-slate-100">
                  <div className="p-2.5 bg-rose-50 text-rose-500 rounded-xl h-fit border border-rose-100 flex-shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-1">Rekomendasi Custom Trimester</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Kebutuhan kalsium dan asam folat trimester ke-1 berbeda dengan pembentukan zat besi darah di trimester ke-3. Algoritme kami membedakan asupan gizi bunda secara presisi.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Channels widget with Motherhood aesthetic */}
            <div className="relative">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 border border-slate-150 relative z-10">
                <h4 className="text-sm font-extrabold mb-6 flex items-center gap-2 tracking-wide uppercase text-slate-800">
                  <ShieldCheck className="text-brand-primary" size={20} />
                  Saluran Informasi Medis Aktif
                </h4>
                
                <div className="space-y-4">
                  {SUPPORT_CHANNELS.map((channel) => (
                    <div key={channel.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100/85 transition-colors pointer-events-none border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm text-slate-700 border border-slate-100">
                          {channel.icon}
                        </div>
                        <span className="font-bold text-xs md:text-sm text-slate-700">{channel.name}</span>
                      </div>
                      <div className="flex items-center gap-1.55">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                         <span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider font-mono">Siap</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-rose-50/50 rounded-2xl border border-rose-100/50 text-center">
                  <p className="text-xs text-rose-700 font-extrabold italic">"Kami menjaga tawa bunda dan detak jantung sehat si kecil."</p>
                </div>
              </div>
              
              {/* Decorative graphic elements playing in background */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
