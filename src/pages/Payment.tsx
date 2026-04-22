import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Lock, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { ServicePackage } from '../types';

export function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const pkg = location.state?.package as ServicePackage;
  const [method, setMethod] = React.useState<'credit' | 'e-wallet' | 'bank'>('credit');
  const [success, setSuccess] = React.useState(false);

  if (!pkg) {
    return (
      <div className="pt-32 text-center pb-24">
        <h1 className="text-2xl font-bold">Informasi pembayaran hilang</h1>
        <button onClick={() => navigate('/packages')} className="text-brand-primary hover:underline mt-4">Pilih paket terlebih dahulu</button>
      </div>
    );
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    // In real app, this would process payment
  };

  if (success) {
    return (
      <div className="pt-32 pb-24 px-6 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-brand-accent rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-brand-accent/20"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4 font-serif italic">Pembayaran Berhasil!</h1>
        <p className="text-slate-600 max-w-md mb-8">
          Selamat! Langganan paket <span className="font-bold text-brand-primary">{pkg.name}</span> Anda telah aktif. Silakan cek email Anda untuk detail akses.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="bg-black text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8 text-sm font-medium text-slate-500">
          <button onClick={() => navigate(-2)} className="hover:text-brand-primary transition-colors">Paket</button>
          <ChevronRight size={14} />
          <button onClick={() => navigate(-1)} className="hover:text-brand-primary transition-colors">Detail</button>
          <ChevronRight size={14} />
          <span className="text-brand-primary underline decoration-2 underline-offset-4">Konfirmasi & Pembayaran</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-50 pb-4">Metode Pembayaran</h2>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setMethod('credit')}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${method === 'credit' ? 'border-brand-primary bg-brand-primary/5' : 'border-slate-100 hover:border-slate-200'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${method === 'credit' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Lock size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900">Kartu Kredit / Debit</p>
                      <p className="text-xs text-slate-500">Visa, Mastercard, Amex</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${method === 'credit' ? 'border-brand-primary' : 'border-slate-300'}`}>
                    {method === 'credit' && <div className="w-3 h-3 bg-brand-primary rounded-full" />}
                  </div>
                </button>

                <button 
                  onClick={() => setMethod('e-wallet')}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${method === 'e-wallet' ? 'border-brand-primary bg-brand-primary/5' : 'border-slate-100 hover:border-slate-200'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${method === 'e-wallet' ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <ShieldCheck size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900">E-Wallet</p>
                      <p className="text-xs text-slate-500">GoPay, ShopeePay, OVO, Dana</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${method === 'e-wallet' ? 'border-brand-primary' : 'border-slate-300'}`}>
                    {method === 'e-wallet' && <div className="w-3 h-3 bg-brand-primary rounded-full" />}
                  </div>
                </button>
              </div>

              <form onSubmit={handlePayment} className="mt-12 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nama pada Kartu</label>
                  <input required type="text" className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary" placeholder="Masukan nama lengkap Anda" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nomor Kartu</label>
                  <input required type="text" className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Masa Berlaku</label>
                    <input required type="text" className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary" placeholder="MM / YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">CVV</label>
                    <input required type="text" className="w-full px-6 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary" placeholder="123" />
                  </div>
                </div>
                <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/30 hover:scale-[1.02] transition-transform mt-8">
                  Bayar Sekarang ({pkg.price})
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 border-b border-slate-50 pb-4">Ringkasan Pesanan</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-900">{pkg.name}</p>
                    <p className="text-sm text-slate-500">Langganan per {pkg.period}</p>
                  </div>
                  <span className="font-bold text-brand-primary">{pkg.price}</span>
                </div>
                <div className="flex justify-between text-sm py-2 text-slate-600 border-y border-slate-50 italic">
                  <span>Pajak (VAT 0%)</span>
                  <span>Rp 0</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-xl">
                  <span className="font-bold uppercase tracking-wider text-slate-900">Total</span>
                  <span className="font-bold text-brand-primary">{pkg.price}</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-50 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck size={14} className="text-brand-accent" />
                  <span>Garansi uang kembali 30 hari</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                   <Lock size={14} className="text-brand-accent" />
                   <span>Koneksi aman 256-bit SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
