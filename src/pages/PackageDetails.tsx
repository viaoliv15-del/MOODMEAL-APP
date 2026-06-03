import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICE_PACKAGES } from '../constants';
import { Check, ArrowLeft, ShieldCheck, CreditCard, Lock, Baby, Sparkles, Heart, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

const PACKAGE_DETAILS_MAP: Record<string, {
  recommendedMenu: string;
  menuDescription: string;
  menuImage: string;
  stage: string;
  benefits: string[];
}> = {
  basic: {
    recommendedMenu: 'Avocado Berry Folate Bowl & Sup Jahe Hangat',
    menuDescription: 'Kombinasi alpukat mentega, buah beri, dan rempah jahe segar untuk meningkatkan nafsu makan dan asupan asam folat alami harian bunda.',
    menuImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    stage: 'Trimester 1 (Fokus Redakan Mual & Formasi Saraf)',
    benefits: [
      'Mencegah risiko cacat lahir bumbung saraf (Neural Tube Defects) dengan asupan asam folat aktif alami teruji.',
      'Sangat efektif menenangkan mual pagi hari (Morning Sickness) lewat kearifan jahe hangat yang nyaman di lidah.',
      'Mendukung kestabilan kondisi psikologis prima & stamina harian bunda.'
    ]
  },
  pro: {
    recommendedMenu: 'Golden Grilled Salmon King & Salad Almond Kalsium',
    menuDescription: 'Ikan salmon kaya akan DHA dan EPA omega-3 dikombinasikan dengan kalsium kacang almond untuk ketahanan sendi dan tulang janin.',
    menuImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    stage: 'Trimester 2 (Fokus Tumbuh Kembang Fetus & Struktur Tulang)',
    benefits: [
      'Menstimulasi pembentukan kognitif dan kecerdasan otak janin di masa aktif pertumbuhannya.',
      'Menyediakan kalsium tinggi bebas laktosa guna memadatkan perkembangan raga janin.',
      'Membantu pencegahan timbulnya kram dan ketegangan sendi panggul selama trimester kedua.'
    ]
  },
  enterprise: {
    recommendedMenu: 'Spinach Iron-Blast Tenderloin & Jus Bit Merah',
    menuDescription: 'Paduan zat besi bio-available tinggi dari tenderloin sapi premium dengan bayam organik untuk merangsang produksi harian hemoglobin sel darah merah.',
    menuImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    stage: 'Trimester 3 & Persiapan Lahir (Fokus Anti-Anemia & Stamina Melahirkan)',
    benefits: [
      'Menurunkan potensi kejadian anemia pre-natal bersalin secara klinis.',
      'Mengoptimalkan distribusi hemoglobin & oksigen penting via jembatan tali pusat bayi.',
      'Memulihkan sel-sel stamina panggul bunda untuk persiapan energi melahirkan yang lancar.'
    ]
  }
};

export function PackageDetails() {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  
  const pkg = SERVICE_PACKAGES.find(p => p.id === packageId);

  if (!pkg) {
    return (
      <div className="pt-32 text-center min-h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Paket tidak ditemukan</h1>
        <Link to="/packages" className="text-brand-primary hover:underline mt-4 inline-block font-bold">Kembali ke daftar paket</Link>
      </div>
    );
  }

  const meta = PACKAGE_DETAILS_MAP[pkg.id] || PACKAGE_DETAILS_MAP.basic;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen relative">
      
      {/* Heartwarming Motherhood Background Overlay Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1920" 
          alt="Motherhood background bonding" 
          className="w-full h-full object-cover object-center opacity-6 filter saturate-50 brightness-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white/85 to-slate-50" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors mb-8 group font-bold text-sm cursor-pointer"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform animate-pulse" />
          <span>Kembali ke Program</span>
        </button>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Extensive Details & Recommended Pregnancy Menu */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-150 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 bg-rose-50 text-rose-600 rounded-full border border-rose-100">
                  {meta.stage}
                </span>
                <span className="text-xs text-slate-400">• Program Nutrisi Kebidanan</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif italic text-pretty">
                {pkg.name}
              </h1>
              
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                {pkg.description} Program lengkap pendampingan gizi pre-natal teruji medis yang didesain tulus untuk menjamin terpenuhinya asam folat, zat besi, kalsium, dan kalori seimbang demi kecerdasan janin harian bunda.
              </p>
            </motion.div>

            {/* Pregnancy Recommended Menu Panel */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-150 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-rose-600">
                <Sparkles size={20} className="animate-spin duration-300" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  Menu Kehamilan Unggulan Paket Ini:
                </h3>
              </div>
              
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src={meta.menuImage} 
                    alt={meta.recommendedMenu}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:col-span-8 space-y-2">
                  <span className="text-[10px] bg-rose-50 text-rose-700 font-extrabold px-2.5 py-1 rounded">Rekomendasi Utama Trimester</span>
                  <h4 className="text-lg font-black text-slate-900">{meta.recommendedMenu}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{meta.menuDescription}</p>
                </div>
              </div>
            </div>

            {/* Package Core Benefits Section */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-150 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Heart className="text-brand-primary h-6 w-6" />
                Manfaat Biologis Untuk Bunda & Janin:
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {meta.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex gap-3">
                    <div className="bg-rose-50 border border-rose-100 text-rose-600 p-2 rounded-xl h-fit">
                      <Activity size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-800 mb-1">Manfaat Kehamilan {idx + 1}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard Inclusions Checklist Grid */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-150 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Check className="text-brand-primary" />
                Detail Layanan Penunjang:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="mt-1 bg-brand-primary/10 p-1 rounded-full text-brand-primary">
                      <Check size={10} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-brand-accent/20 bg-brand-accent/5 p-6 rounded-2xl flex gap-4">
              <ShieldCheck className="text-brand-accent shrink-0 animate-bounce" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm md:text-base">Keamanan & Layanan Medis Terjamin</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Kami sepenuhnya berkompeten terhadap kesehatan kandungan bunda. Bila bimbingan menu kehamilan dari dokter obstetri-ginekologi tidak mendatangkan kecocokan fisik selera makan dalam 30 hari, kami kembalikan dana langganan penuh tanpa pertanyaan.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Checkout & Billing Block */}
          <div className="lg:col-span-4 space-y-6">
            <div className={cn(
              "p-8 rounded-[2rem] border-2 flex flex-col relative overflow-hidden",
              pkg.recommended ? "bg-slate-950 text-white border-slate-950 shadow-2xl" : "bg-white border-slate-150 shadow-xl"
            )}>
              <div className="mb-6">
                <span className="text-[10px] font-extrabold opacity-60 uppercase tracking-widest block">Metode Langganan</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-black text-brand-primary">{pkg.price}</span>
                  <span className="text-xs opacity-60 font-semibold">/{pkg.period}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 text-xs md:text-sm">
                <div className="flex justify-between border-b border-rose-500/10 pb-2">
                  <span className="opacity-60">Subtotal</span>
                  <span className="font-bold">{pkg.price}</span>
                </div>
                <div className="flex justify-between border-b border-rose-500/10 pb-2 text-rose-500 font-bold">
                  <span>Pajak Bumil Sehat (0%)</span>
                  <span>Rp 0</span>
                </div>
                <div className="flex justify-between text-base pt-2">
                  <span className="font-extrabold uppercase tracking-wider font-serif">Total Bayar</span>
                  <span className="font-bold text-brand-primary">{pkg.price}</span>
                </div>
              </div>

              <Link 
                to="/payment"
                state={{ package: pkg }}
                className="bg-brand-primary text-white py-4.5 rounded-xl font-bold text-center hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/25 text-sm cursor-pointer"
              >
                Lanjutkan ke Pembayaran
                <CreditCard size={18} />
              </Link>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] opacity-60">
                <Lock size={12} />
                <span>Pembayaran Medis Terenkripsi SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
