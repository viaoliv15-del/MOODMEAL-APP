import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICE_PACKAGES } from '../constants';
import { Check, ArrowLeft, ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { cn } from '../lib/utils';

export function PackageDetails() {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  
  const pkg = SERVICE_PACKAGES.find(p => p.id === packageId);

  if (!pkg) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">Paket tidak ditemukan</h1>
        <Link to="/packages" className="text-brand-primary hover:underline mt-4 inline-block">Kembali ke daftar paket</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Kembali</span>
        </button>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold text-slate-900 mb-4 font-serif italic">{pkg.name}</h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                {pkg.description} paket lengkap yang dirancang untuk memberikan hasil maksimal bagi perjalanan kuliner dan branding Anda.
              </p>
            </motion.div>

            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Check className="text-brand-primary" />
                Apa yang Anda Dapatkan:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm">
                    <div className="mt-1 bg-brand-primary/10 p-1 rounded-full text-brand-primary">
                      <Check size={12} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-brand-accent/20 bg-brand-accent/5 p-6 rounded-2xl flex gap-4">
              <ShieldCheck className="text-brand-accent shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Garansi Kepuasan 30 Hari</h4>
                <p className="text-sm text-slate-600 leading-normal">
                  Kami yakin Anda akan menyukai MoodMeal. Jika tidak, kami akan mengembalikan uang Anda tanpa pertanyaan apapun dalam waktu 30 hari pertama.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={cn(
              "p-8 rounded-[2rem] border-2 flex flex-col",
              pkg.recommended ? "bg-black text-white border-black shadow-2xl" : "bg-white border-slate-100 shadow-xl"
            )}>
              <div className="mb-6">
                <span className="text-sm font-bold opacity-60 uppercase tracking-widest">Total Harga</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-bold text-brand-primary">{pkg.price}</span>
                  <span className="text-sm opacity-60">/{pkg.period}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Subtotal</span>
                  <span className="font-bold">{pkg.price}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2 text-brand-accent font-bold">
                  <span>Pajak (0%)</span>
                  <span>Rp 0</span>
                </div>
                <div className="flex justify-between text-lg pt-2">
                  <span className="font-bold uppercase tracking-wider">Total</span>
                  <span className="font-bold text-brand-primary">{pkg.price}</span>
                </div>
              </div>

              <Link 
                to="/payment"
                state={{ package: pkg }}
                className="bg-brand-primary text-white py-4 rounded-xl font-bold text-center hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20"
              >
                Lanjutkan ke Pembayaran
                <CreditCard size={18} />
              </Link>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs opacity-60">
                <Lock size={12} />
                <span>Pembayaran Terenkripsi & Aman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
