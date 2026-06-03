import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Lock, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  CreditCard, 
  Smartphone, 
  Building2, 
  QrCode, 
  Copy, 
  Check, 
  Info, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { ServicePackage } from '../types';

export function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const pkg = location.state?.package as ServicePackage;

  // State Management
  const [method, setMethod] = React.useState<'credit' | 'e-wallet' | 'bank'>('credit');
  const [selectedWallet, setSelectedWallet] = React.useState<'gopay' | 'dana' | 'shopeepay' | 'ovo' | 'qris'>('qris');
  const [selectedBank, setSelectedBank] = React.useState<'bca' | 'mandiri' | 'bni' | 'bri' | 'bsi'>('bca');
  
  // Form Values
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardName, setCardName] = React.useState('');
  const [cardDate, setCardDate] = React.useState('');
  const [cardCvv, setCardCvv] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  // Status State
  const [checkoutStep, setCheckoutStep] = React.useState<'form' | 'waiting' | 'success'>('form');
  const [copiedValue, setCopiedValue] = React.useState(false);
  const [activeInstructionTab, setActiveInstructionTab] = React.useState<'m-banking' | 'atm' | 'i-banking'>('m-banking');

  if (!pkg) {
    return (
      <div className="pt-32 text-center pb-24" id="pembayaran-missing-container">
        <h1 className="text-2xl font-bold text-slate-800">Informasi pembayaran hilang</h1>
        <button 
          onClick={() => navigate('/packages')} 
          className="text-brand-primary hover:underline mt-4 font-semibold"
          id="btn-back-package-missing"
        >
          Pilih paket terlebih dahulu
        </button>
      </div>
    );
  }

  // Generate dynamic Virtual Account Number based on chosen bank
  const getVAData = () => {
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '') || '081234567890';
    switch (selectedBank) {
      case 'bca':
        return { code: `3901${cleanPhone.slice(-8)}`, name: 'BCA Virtual Account', codeRaw: `3901${cleanPhone.slice(-8)}` };
      case 'mandiri':
        return { code: `8879${cleanPhone.slice(-8)}`, name: 'Mandiri Virtual Account', codeRaw: `8879${cleanPhone.slice(-8)}` };
      case 'bni':
        return { code: `8241${cleanPhone.slice(-8)}`, name: 'BNI Virtual Account', codeRaw: `8241${cleanPhone.slice(-8)}` };
      case 'bri':
        return { code: `1280${cleanPhone.slice(-8)}`, name: 'BRIVA (BRI Virtual Account)', codeRaw: `1280${cleanPhone.slice(-8)}` };
      case 'bsi':
        return { code: `9008${cleanPhone.slice(-8)}`, name: 'BSI Virtual Account', codeRaw: `9008${cleanPhone.slice(-8)}` };
      default:
        return { code: `8000${cleanPhone.slice(-8)}`, name: 'Virtual Account', codeRaw: `8000${cleanPhone.slice(-8)}` };
    }
  };

  const vaDetails = getVAData();

  const handleCopyVa = () => {
    navigator.clipboard.writeText(vaDetails.code);
    setCopiedValue(true);
    setTimeout(() => setCopiedValue(false), 2000);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (method === 'credit') {
      // Direct success for credit cards
      setCheckoutStep('success');
    } else {
      // Transition to Waiting payment for Virtual Accounts & E-wallets/QRIS
      setCheckoutStep('waiting');
    }
  };

  const handleSimulateSuccess = () => {
    setCheckoutStep('success');
  };

  if (checkoutStep === 'success') {
    return (
      <div className="pt-32 pb-24 px-6 flex flex-col items-center justify-center min-h-[85vh] text-center bg-white" id="payment-success-screen">
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 15 }}
          className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-emerald-500/10"
          id="success-icon-badge"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Pembayaran Sukses! 🎉</h1>
        <p className="text-slate-600 max-w-lg mb-2 leading-relaxed text-base px-4">
          Selamat! Langganan paket <span className="font-bold text-brand-primary">{pkg.name}</span> Anda telah berhasil diaktifkan secara instan.
        </p>
        <p className="text-slate-400 text-sm max-w-md mb-8">
          Kuitansi pembayaran dan akses masuk sistem kustomisasi gizi & chat konsultasi bidan kami telah dikirimkan ke email terdaftar Anda.
        </p>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 max-w-md w-full mb-10 text-left space-y-3.5">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Nomor Transaksi</span>
            <span className="font-mono font-bold text-slate-800">TX-MM-{(Date.now().toString()).slice(-6)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Metode Pembayaran</span>
            <span className="font-medium text-slate-800 capitalize">
              {method === 'credit' ? 'Kartu Kredit / Debit' : method === 'e-wallet' ? `E-Wallet (${selectedWallet.toUpperCase()})` : `VA Transfer (${selectedBank.toUpperCase()})`}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Jumlah Terbayar</span>
            <span className="font-bold text-emerald-600">{pkg.price}</span>
          </div>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="bg-black hover:bg-brand-primary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-slate-900/10 hover:scale-105 transition-all text-sm tracking-wide"
          id="btn-return-home-payment"
        >
          Mulai Konsultasi & Lihat Menu
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50/50 min-h-screen" id="payment-main-view">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-4 mb-8 text-sm font-medium text-slate-500" id="payment-breadcrumbs">
          <button onClick={() => navigate('/packages')} className="hover:text-brand-primary transition-colors">Paket Layanan</button>
          <ChevronRight size={14} className="text-slate-300" />
          <button onClick={() => navigate(-1)} className="hover:text-brand-primary transition-colors">Detail Pemesanan</button>
          <ChevronRight size={14} className="text-slate-300" />
          <span className="text-brand-primary font-semibold border-b-2 border-brand-primary pb-0.5">Konfirmasi & Pembayaran</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Main Action Form / QR & Virtual Account Status Column */}
          <div className="lg:col-span-3 space-y-8" id="payment-method-selector-column">
            
            {checkoutStep === 'form' && (
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-8" id="card-form-container">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Metode Pembayaran</h2>
                  <p className="text-sm text-slate-500">Pilih salah satu metode pembayaran digital teraman di Indonesia</p>
                </div>
                
                {/* Method Choice Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3" id="payment-tab-triggers">
                  {/* Credit Card Tab */}
                  <button 
                    type="button"
                    onClick={() => setMethod('credit')}
                    className={`flex flex-col items-center justify-between p-4 rounded-2xl border-2 text-center transition-all cursor-pointer ${method === 'credit' ? 'border-brand-primary bg-brand-primary/5 shadow-sm' : 'border-slate-100 hover:border-slate-200'}`}
                    id="tab-payment-credit"
                  >
                    <div className={`p-2.5 rounded-xl mb-3 ${method === 'credit' ? 'bg-brand-primary text-white' : 'bg-slate-50 text-slate-400'}`}>
                      <CreditCard size={20} />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-xs text-slate-900">Kartu Kredit/Debit</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Visa, Mastercard</p>
                    </div>
                  </button>

                  {/* E-Wallet Tab */}
                  <button 
                    type="button"
                    onClick={() => setMethod('e-wallet')}
                    className={`flex flex-col items-center justify-between p-4 rounded-2xl border-2 text-center transition-all cursor-pointer ${method === 'e-wallet' ? 'border-brand-primary bg-brand-primary/5 shadow-sm' : 'border-slate-100 hover:border-slate-200'}`}
                    id="tab-payment-ewallet"
                  >
                    <div className={`p-2.5 rounded-xl mb-3 ${method === 'e-wallet' ? 'bg-brand-primary text-white' : 'bg-slate-50 text-slate-400'}`}>
                      <Smartphone size={20} />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-xs text-slate-900">E-Wallet & QRIS</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">GoPay, DANA, QRIS</p>
                    </div>
                  </button>

                  {/* Bank Transfer VA Tab */}
                  <button 
                    type="button"
                    onClick={() => setMethod('bank')}
                    className={`flex flex-col items-center justify-between p-4 rounded-2xl border-2 text-center transition-all cursor-pointer ${method === 'bank' ? 'border-brand-primary bg-brand-primary/5 shadow-sm' : 'border-slate-100 hover:border-slate-200'}`}
                    id="tab-payment-bank"
                  >
                    <div className={`p-2.5 rounded-xl mb-3 ${method === 'bank' ? 'bg-brand-primary text-white' : 'bg-slate-50 text-slate-400'}`}>
                      <Building2 size={20} />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-xs text-slate-900">Virtual Account</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Transfer Bank Instan</p>
                    </div>
                  </button>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  {/* CREDIT CARD FORM */}
                  {method === 'credit' && (
                    <form onSubmit={handlePaymentSubmit} className="space-y-6" id="form-credit-card">
                      <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-3 border border-slate-100 mb-2">
                        <Info size={16} className="text-brand-primary shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Transaksi diproses menggunakan sistem enkripsi 256-bit standar industri perbankan nasional untuk menjamin perlindungan privasi data keuangan Anda harian.
                        </p>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Nama Pada Kartu</label>
                        <input 
                          required 
                          type="text" 
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm font-medium" 
                          placeholder="Masukkan nama lengkap pemegang kartu" 
                          id="card-holder-name-field"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Nomor Kartu</label>
                        <input 
                          required 
                          type="text" 
                          value={cardNumber}
                          maxLength={19}
                          onChange={(e) => {
                            // Format debit card raw typing (4-digit spacing)
                            const v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                            const matches = v.match(/\d{4,16}/g);
                            const match = (matches && matches[0]) || '';
                            const parts = [];
                            for (let i = 0, len = match.length; i < len; i += 4) {
                              parts.push(match.substring(i, i + 4));
                            }
                            if (parts.length > 0) {
                              setCardNumber(parts.join(' '));
                            } else {
                              setCardNumber(v);
                            }
                          }}
                          className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm font-mono tracking-widest font-semibold" 
                          placeholder="4111 2222 3333 4444" 
                          id="card-number-field"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Masa Berlaku</label>
                          <input 
                            required 
                            type="text" 
                            value={cardDate}
                            maxLength={5}
                            onChange={(e) => {
                              const v = e.target.value.replace(/[^0-9]/g, '');
                              if (v.length >= 2) {
                                setCardDate(`${v.slice(0, 2)}/${v.slice(2, 4)}`);
                              } else {
                                setCardDate(v);
                              }
                            }}
                            className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm font-mono tracking-wider text-center font-semibold" 
                            placeholder="MM / YY" 
                            id="card-expiry-field"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">CVV</label>
                          <input 
                            required 
                            type="password" 
                            maxLength={3}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value.replace(/[^0-9]/g, ''))}
                            className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm font-mono tracking-widest text-center font-bold" 
                            placeholder="•••" 
                            id="card-cvv-field"
                          />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-brand-primary text-white py-4.5 rounded-2xl font-bold text-base shadow-xl shadow-brand-primary/20 hover:scale-[1.01] active:scale-95 transition-all mt-6 cursor-pointer"
                        id="btn-trigger-payment-credit"
                      >
                        Bayar Sekarang ({pkg.price})
                      </button>
                    </form>
                  )}

                  {/* E-WALLET DETAILED SYSTEM */}
                  {method === 'e-wallet' && (
                    <div className="space-y-6" id="digital-wallet-configurator">
                      <div className="mb-4">
                        <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">Pilih Provider E-Wallet</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {/* QRIS */}
                          <button
                            type="button"
                            onClick={() => setSelectedWallet('qris')}
                            className={`p-3.5 rounded-xl border-2 flex items-center justify-between text-left transition-all ${selectedWallet === 'qris' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-wallet-qris"
                          >
                            <div className="flex items-center gap-2">
                              <QrCode size={18} className="text-brand-primary" />
                              <span className="text-xs font-bold">QRIS (Gopay/DANA/dll)</span>
                            </div>
                            <span className="bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">Rekomendasi</span>
                          </button>

                          {/* Gopay */}
                          <button
                            type="button"
                            onClick={() => setSelectedWallet('gopay')}
                            className={`p-3.5 rounded-xl border-2 flex items-center gap-2 transition-all ${selectedWallet === 'gopay' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-wallet-gopay"
                          >
                            <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full shrink-0" />
                            <span className="text-xs font-bold">GoPay</span>
                          </button>

                          {/* DANA */}
                          <button
                            type="button"
                            onClick={() => setSelectedWallet('dana')}
                            className={`p-3.5 rounded-xl border-2 flex items-center gap-2 transition-all ${selectedWallet === 'dana' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-wallet-dana"
                          >
                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shrink-0" />
                            <span className="text-xs font-bold">DANA</span>
                          </button>

                          {/* ShopeePay */}
                          <button
                            type="button"
                            onClick={() => setSelectedWallet('shopeepay')}
                            className={`p-3.5 rounded-xl border-2 flex items-center gap-2 transition-all ${selectedWallet === 'shopeepay' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-wallet-shopeepay"
                          >
                            <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shrink-0" />
                            <span className="text-xs font-bold">ShopeePay</span>
                          </button>

                          {/* OVO */}
                          <button
                            type="button"
                            onClick={() => setSelectedWallet('ovo')}
                            className={`p-3.5 rounded-xl border-2 flex items-center gap-2 transition-all ${selectedWallet === 'ovo' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-wallet-ovo"
                          >
                            <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full shrink-0" />
                            <span className="text-xs font-bold">OVO</span>
                          </button>
                        </div>
                      </div>

                      <form onSubmit={handlePaymentSubmit} className="space-y-6">
                        {/* Prompt telephone input if not directly using QRIS code to pay */}
                        {selectedWallet !== 'qris' && (
                          <div className="space-y-2">
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">No. Handphone Terdaftar di {selectedWallet.toUpperCase()}</label>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">+62</span>
                              <input 
                                required
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''))}
                                placeholder="812 3456 7890"
                                className="w-full pl-14 pr-5 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm font-semibold tracking-wider text-slate-800"
                                id="wallet-phone-number-field"
                              />
                            </div>
                            <p className="text-[11px] text-slate-400">Pastikan saldo E-Wallet Bunda mencukupi untuk melakukan transaksi instan.</p>
                          </div>
                        )}

                        {selectedWallet === 'qris' && (
                          <div className="bg-slate-50 p-4 rounded-2xl flex items-start gap-3 border border-slate-100">
                            <QrCode size={18} className="text-brand-primary shrink-0 mt-0.5" />
                            <div className="space-y-0.5">
                              <p className="text-xs font-bold text-slate-800">QRIS National Standard & Real-time Settlement</p>
                              <p className="text-xs text-slate-500">Mendukung pemindaian otomatis dari semua M-Banking (BCA, Mandiri, Berbagai Bank) & E-Wallet apa saja.</p>
                            </div>
                          </div>
                        )}

                        <button 
                          type="submit"
                          className="w-full bg-brand-primary text-white py-4.5 rounded-2xl font-bold text-base shadow-xl shadow-brand-primary/20 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                          id="btn-sub-wallet-submit"
                        >
                          {selectedWallet === 'qris' ? 'Buat Kode QRIS Sekarang' : `Proses Pembayaran ${selectedWallet.toUpperCase()}`} ({pkg.price})
                        </button>
                      </form>
                    </div>
                  )}

                  {/* VIRTUAL ACCOUNT TRANSFER VIEW */}
                  {method === 'bank' && (
                    <div className="space-y-6" id="bank-va-configurator">
                      <div className="mb-4">
                        <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Pilih Bank Penerbit</label>
                        <p className="text-xs text-slate-400 mb-3">Bank Transfer diproses secara otomatis 24 jam tanpa verifikasi manual.</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* BCA */}
                          <button
                            type="button"
                            onClick={() => setSelectedBank('bca')}
                            className={`p-4 rounded-xl border-2 flex items-center justify-between text-left transition-all ${selectedBank === 'bca' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-bank-bca"
                          >
                            <div className="flex items-center gap-3">
                              <div className="py-1 px-2.5 bg-blue-900 text-white font-extrabold text-[10px] rounded italic shrink-0">BCA</div>
                              <span className="text-xs font-bold">BCA Virtual Account</span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedBank === 'bca' ? 'border-brand-primary' : 'border-slate-300'}`}>
                              {selectedBank === 'bca' && <div className="w-2 h-2 bg-brand-primary rounded-full" />}
                            </div>
                          </button>

                          {/* Mandiri */}
                          <button
                            type="button"
                            onClick={() => setSelectedBank('mandiri')}
                            className={`p-4 rounded-xl border-2 flex items-center justify-between text-left transition-all ${selectedBank === 'mandiri' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-bank-mandiri"
                          >
                            <div className="flex items-center gap-3">
                              <div className="py-1 px-1.5 bg-yellow-500 text-yellow-950 font-black text-[9px] rounded shrink-0">mandiri</div>
                              <span className="text-xs font-bold">Mandiri Virtual Account</span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedBank === 'mandiri' ? 'border-brand-primary' : 'border-slate-300'}`}>
                              {selectedBank === 'mandiri' && <div className="w-2 h-2 bg-brand-primary rounded-full" />}
                            </div>
                          </button>

                          {/* BNI */}
                          <button
                            type="button"
                            onClick={() => setSelectedBank('bni')}
                            className={`p-4 rounded-xl border-2 flex items-center justify-between text-left transition-all ${selectedBank === 'bni' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-bank-bni"
                          >
                            <div className="flex items-center gap-3">
                              <div className="py-1 px-2 bg-teal-600 text-white font-black text-[10px] rounded shrink-0 italic">BNI</div>
                              <span className="text-xs font-bold">BNI Virtual Account</span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedBank === 'bni' ? 'border-brand-primary' : 'border-slate-300'}`}>
                              {selectedBank === 'bni' && <div className="w-2 h-2 bg-brand-primary rounded-full" />}
                            </div>
                          </button>

                          {/* BRI */}
                          <button
                            type="button"
                            onClick={() => setSelectedBank('bri')}
                            className={`p-4 rounded-xl border-2 flex items-center justify-between text-left transition-all ${selectedBank === 'bri' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-bank-bri"
                          >
                            <div className="flex items-center gap-3">
                              <div className="py-1 px-2.5 bg-blue-600 text-white font-serif font-black text-[10px] rounded shrink-0 italic">BRI</div>
                              <span className="text-xs font-bold">BRI Virtual Account</span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedBank === 'bri' ? 'border-brand-primary' : 'border-slate-300'}`}>
                              {selectedBank === 'bri' && <div className="w-2 h-2 bg-brand-primary rounded-full" />}
                            </div>
                          </button>

                          {/* BSI */}
                          <button
                            type="button"
                            onClick={() => setSelectedBank('bsi')}
                            className={`p-4 rounded-xl border-2 flex items-center justify-between text-left transition-all ${selectedBank === 'bsi' ? 'border-brand-primary bg-brand-primary/5 font-semibold text-brand-primary' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                            id="btn-bank-bsi"
                          >
                            <div className="flex items-center gap-3">
                              <div className="py-1 px-2.5 bg-emerald-700 text-white font-bold text-[9px] rounded shrink-0 flex items-center">BSI Syariah</div>
                              <span className="text-xs font-bold">BSI Virtual Account</span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedBank === 'bsi' ? 'border-brand-primary' : 'border-slate-300'}`}>
                              {selectedBank === 'bsi' && <div className="w-2 h-2 bg-brand-primary rounded-full" />}
                            </div>
                          </button>
                        </div>
                      </div>

                      <form onSubmit={handlePaymentSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">No. Handphone Pembayar</label>
                          <input 
                            required
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''))}
                            placeholder="081234567890 (Untuk korelasi kuitansi)"
                            className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm font-semibold tracking-wider text-slate-800"
                            id="bank-user-phone"
                          />
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-brand-primary text-white py-4.5 rounded-2xl font-bold text-base shadow-xl shadow-brand-primary/20 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                          id="btn-sub-bank-submit"
                        >
                          Dapatkan Kode Virtual Account ({pkg.price})
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* WAITING AREA: QRIS IMAGE AND VIRTUAL ACCOUNT GUIDES */}
            {checkoutStep === 'waiting' && (
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-8" id="waiting-payment-box">
                
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-500 text-white p-2.5 rounded-xl">
                      <Clock size={20} className="animate-spin" style={{ animationDuration: '4s' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-base">Menunggu Pembayaran</h3>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-0.5">
                        <span>Selesaikan sebelum</span>
                        <span className="font-semibold text-slate-700">23 jam 59 menit</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-brand-primary/5 text-brand-primary px-4 py-2 rounded-xl text-sm font-black italic">
                    {pkg.price}
                  </div>
                </div>

                {/* FLOW 1: CONDITIONAL DISPLAY FOR QRIS */}
                {method === 'e-wallet' && selectedWallet === 'qris' && (
                  <div className="flex flex-col items-center py-6 text-center" id="qris-payment-display">
                    <p className="text-sm text-slate-600 max-w-sm mb-6">
                      Pindai kode QRIS standar Bank Indonesia di bawah menggunakan aplikasi M-Banking atau dompet digital Anda.
                    </p>

                    {/* Highly aesthetic stylized representation of QRIS Code interface */}
                    <div className="p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] w-full max-w-[280px] shadow-inner relative flex flex-col items-center">
                      <div className="bg-slate-900 text-white text-xs font-black uppercase px-4 py-1.5 rounded-lg mb-4 tracking-wider">
                        QRIS GPN
                      </div>

                      {/* Fake Custom QR Pattern Visual block (Grid cells representation) */}
                      <div className="w-48 h-48 bg-white border border-slate-200 rounded-xl p-3 flex flex-col justify-between shrink-0 relative shadow-sm">
                        {/* QR Corners styling */}
                        <div className="flex justify-between w-full">
                          <div className="w-12 h-12 border-t-4 border-l-4 border-slate-900" />
                          <div className="w-12 h-12 border-t-4 border-r-4 border-slate-900" />
                        </div>
                        
                        {/* Decorative Center QR Code Simulated Pixels */}
                        <div className="absolute inset-4 flex flex-wrap items-center justify-center p-3">
                          <div className="grid grid-cols-4 gap-2.5 w-full opacity-90">
                            {[...Array(16)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`h-5 w-5 rounded ${i % 3 === 0 || i % 4 === 1 ? 'bg-slate-900' : 'bg-transparent'}`} 
                              />
                            ))}
                          </div>
                          {/* Central brand spot */}
                          <div className="absolute bg-brand-primary p-1 rounded border border-white text-white text-[8px] font-black">
                            M-BUMIL
                          </div>
                        </div>

                        <div className="flex justify-between w-full">
                          <div className="w-12 h-12 border-b-4 border-l-4 border-slate-900" />
                          <div className="w-12 h-12 border-b-4 border-r-4 border-slate-900" />
                        </div>
                      </div>

                      <div className="mt-4 text-[10px] text-slate-400 font-medium uppercase tracking-widest italic">
                        NMID: ID103002621900
                      </div>
                    </div>

                    <div className="mt-8 space-y-2.5 text-center w-full max-w-md">
                      <p className="text-xs text-slate-500 font-medium">Bukan QRIS? Gunakan tombol simulasi di bawah untuk verifikasi:</p>
                      
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <button
                          type="button"
                          onClick={() => setCheckoutStep('form')}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-bold text-xs tracking-wider transition-colors"
                          id="btn-back-to-edit-qris"
                        >
                          Ganti Metode
                        </button>
                        <button
                          type="button"
                          onClick={handleSimulateSuccess}
                          className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-bold text-xs tracking-wider shadow-md shadow-emerald-500/10 transition-colors cursor-pointer"
                          id="btn-confirm-qris-simulated"
                        >
                          Simulasi Bayar Sukses
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* FLOW 2: DETAILED WAITING SCREEN FOR OTHER MOBILE WALLETS (GoPay, DANA, etc...) */}
                {method === 'e-wallet' && selectedWallet !== 'qris' && (
                  <div className="py-6 space-y-6" id="wallet-redirect-instructions">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center space-y-4">
                      <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto">
                        <Smartphone size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-800 text-sm">Pembayaran {selectedWallet.toUpperCase()} Sedang Diproses</h4>
                        <p className="text-xs text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
                          Notifikasi pembayaran instan telah dikirimkan ke aplikasi <span className="font-bold text-slate-700 capitalize">{selectedWallet}</span> di nomor <span className="font-mono font-bold text-indigo-700">+62 {phoneNumber}</span>. Silakan buka aplikasi tersebut pada handphone Anda untuk menyelesaikan transaksi dalam waktu 2 menit.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4">
                      <h4 className="font-bold text-xs text-slate-700 uppercase tracking-widest text-center">Bunda Belum Menerima Notifikasi?</h4>
                      <ol className="text-xs text-slate-600 space-y-2.5 max-w-md mx-auto list-decimal pl-5">
                        <li>Pastikan koneksi internet pada handphone Anda aktif dan stabil.</li>
                        <li>Buka menu inbox/notifikasi aplikasi <span className="capitalize font-bold text-slate-800">{selectedWallet}</span> Anda secara manual.</li>
                        <li>Ketik ulang No. Handphone Anda dengan teliti jika terdapat kesalahan ketik sebelumnya.</li>
                      </ol>

                      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto pt-6">
                        <button
                          type="button"
                          onClick={() => setCheckoutStep('form')}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-bold text-xs tracking-wider transition-colors"
                          id="btn-back-to-edit-wallet"
                        >
                          Ganti No. HP
                        </button>
                        <button
                          type="button"
                          onClick={handleSimulateSuccess}
                          className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-bold text-xs tracking-wider shadow-md shadow-emerald-500/10 transition-colors cursor-pointer"
                          id="btn-confirm-gopay-simulated"
                        >
                          Konfirmasi Sudah Bayar
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* FLOW 3: BANK TRANSFER VIRTUAL ACCOUNT & DIRECT TRANSFER GUIDE */}
                {method === 'bank' && (
                  <div className="py-2 space-y-8" id="va-invoice-box">
                    
                    {/* Main Information Box */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Bank Penerima</span>
                        <div className="text-xs font-black text-slate-800 uppercase px-3 py-1 bg-white border border-slate-200 rounded">
                          {selectedBank}
                        </div>
                      </div>

                      {/* VA Code Area */}
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Nomor Virtual Account</span>
                        <div className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl mt-1.5">
                          <span className="text-lg font-mono font-bold tracking-widest text-brand-primary" id="value-va-code">
                            {vaDetails.code}
                          </span>
                          <button
                            type="button"
                            onClick={handleCopyVa}
                            className="bg-slate-50 hover:bg-brand-primary/10 text-slate-700 hover:text-brand-primary p-2.5 rounded-lg transition-all flex items-center gap-1.5 border border-slate-200 hover:border-brand-primary/10 cursor-pointer text-xs font-semibold"
                            id="btn-copy-va-code"
                          >
                            {copiedValue ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                            <span>{copiedValue ? 'Tersalin' : 'Salin'}</span>
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-500/5 p-3 rounded-xl border border-amber-500/10">
                        <AlertCircle size={14} className="shrink-0" />
                        <span>Pembayaran harus ditransfer dalam nominal pas hingga digit terakhir agar sistem kami dapat memprosesnya seketika.</span>
                      </div>
                    </div>

                    {/* Step-by-Step Instructions Collapsible-tabs */}
                    <div className="space-y-4">
                      <h4 className="font-extrabold text-slate-800 text-sm">Petunjuk Transfer Terperinci</h4>
                      
                      <div className="flex border-b border-slate-100 text-xs font-bold" id="tabs-va-instructions">
                        <button
                          type="button"
                          onClick={() => setActiveInstructionTab('m-banking')}
                          className={`flex-1 py-3 text-center border-b-2 transition-colors ${activeInstructionTab === 'm-banking' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                          id="btn-tab-va-mbanking"
                        >
                          M-Banking
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveInstructionTab('atm')}
                          className={`flex-1 py-3 text-center border-b-2 transition-colors ${activeInstructionTab === 'atm' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                          id="btn-tab-va-atm"
                        >
                          ATM
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveInstructionTab('i-banking')}
                          className={`flex-1 py-3 text-center border-b-2 transition-colors ${activeInstructionTab === 'i-banking' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                          id="btn-tab-va-ibanking"
                        >
                          Internet Banking
                        </button>
                      </div>

                      <div className="p-1 min-h-[160px]" id="va-instructions-text">
                        <AnimatePresence mode="wait">
                          {activeInstructionTab === 'm-banking' && (
                            <motion.ol 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-xs text-slate-600 space-y-2.5 list-decimal pl-4 leading-relaxed"
                              id="ol-instruction-mbanking"
                            >
                              <li>Masuk ke aplikasi <strong>M-Banking</strong> Anda (BCA Mobile / Livin by Mandiri / BNI Mobile / BRImob).</li>
                              <li>Pilih menu utama <strong>Transfer</strong> &gt; pilih transfer ke <strong>Virtual Account</strong>.</li>
                              <li>Masukkan nomor Virtual Account resmi Anda: <strong className="font-mono text-slate-900">{vaDetails.code}</strong>.</li>
                              <li>Pada halaman verifikasi, pastikan nama instansi penerima yang tertera adalah <strong>MoodMeal Indonesia</strong> dan nominal aslinya sesuai.</li>
                              <li>Masukkan PIN keamanan transaksi perbankan Anda harian.</li>
                              <li>Sistem kami akan mendeteksi status keaktifan dalam waktu kurang dari 30 detik!</li>
                            </motion.ol>
                          )}

                          {activeInstructionTab === 'atm' && (
                            <motion.ol 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-xs text-slate-600 space-y-2.5 list-decimal pl-4 leading-relaxed"
                              id="ol-instruction-atm"
                            >
                              <li>Masukkan kartu ATM dan PIN kartu Anda dengan teliti.</li>
                              <li>Pilih menu <strong>Pilihan Lainnya</strong> / transfer &gt; masuk ke kategori <strong>Virtual Account / Multi Payment</strong>.</li>
                              <li>Ketik kode instansi perusahaan beserta nomor VA Anda: <strong className="font-mono text-slate-900">{vaDetails.code}</strong>.</li>
                              <li>Periksa kembali rincian data pembayaran di layar ATM Anda (MoodMeal / total nominal).</li>
                              <li>Simpan struk kuitansi penyetoran ATM bank Anda sebagai bukti pertanggungjawaban legal.</li>
                            </motion.ol>
                          )}

                          {activeInstructionTab === 'i-banking' && (
                            <motion.ol 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-xs text-slate-600 space-y-2.5 list-decimal pl-4 leading-relaxed"
                              id="ol-instruction-ibanking"
                            >
                              <li>Akses portal web <strong>Internet Banking</strong> resmi bank Anda dari laptop/PC secara aman.</li>
                              <li>Pilih kategori transaksi <strong>Pembelian &amp; Pembayaran</strong> atau Menu transfer.</li>
                              <li>Masukkan nomor ID Virtual Account Anda: <strong className="font-mono text-slate-900">{vaDetails.code}</strong>.</li>
                              <li>Tentukan detail nominal bayar setara tagihan asli Bunda.</li>
                              <li>Gunakan token otentikasi PIN fisik Bank untuk merampungkan transaksi.</li>
                            </motion.ol>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Simulation tools */}
                    <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setCheckoutStep('form')}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-bold text-xs tracking-wider transition-colors"
                        id="btn-back-to-edit-va"
                      >
                        Ganti Metode
                      </button>
                      <button
                        type="button"
                        onClick={handleSimulateSuccess}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-bold text-xs tracking-wider shadow-md shadow-emerald-500/10 transition-colors cursor-pointer"
                        id="btn-confirm-va-simulated"
                      >
                        Simulasi Bayar Sukses
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Order Summary (Static) */}
          <div className="lg:col-span-2 space-y-6" id="order-summary-column-right">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 border-b border-slate-50 pb-4">Ringkasan Pesanan</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-slate-900 text-base">{pkg.name}</p>
                    <p className="text-xs text-slate-400 mt-1">Paket Komplit Bidan & Bimbingan Gizi</p>
                    <p className="text-xs text-brand-primary bg-brand-primary/5 px-2.5 py-1 rounded-lg mt-2 font-black italic inline-block">
                      Langganan per {pkg.period}
                    </p>
                  </div>
                  <span className="font-bold text-brand-primary text-base">{pkg.price}</span>
                </div>
                
                <div className="flex justify-between text-xs py-3.5 text-slate-500 border-y border-slate-100 space-y-1 block">
                  <div className="flex justify-between w-full">
                    <span>Biaya Pendaftaran Admin</span>
                    <span className="line-through text-slate-400">Rp 50.000</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Kemudahan Sistem Terenkripsi (VAT 0%)</span>
                    <span className="font-bold text-emerald-600">Gratis</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 text-xl">
                  <span className="font-extrabold uppercase tracking-widest text-xs text-slate-400">Total Tagihan</span>
                  <span className="font-black text-brand-primary text-xl">{pkg.price}</span>
                </div>
              </div>

              {/* Security badges */}
              <div className="mt-8 p-4 bg-slate-50 rounded-2xl space-y-3 border border-slate-100" id="order-summary-security">
                <div className="flex items-center gap-2.5 text-xs text-slate-500">
                  <ShieldCheck size={15} className="text-brand-primary shrink-0" />
                  <span>Garansi uang kembali penuh dalam 30 hari</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-500">
                  <Lock size={15} className="text-brand-primary shrink-0" />
                  <span>Dukungan Koneksi 256-bit SSL Terenkripsi</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
