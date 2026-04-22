import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Rocket, Building2, Camera, MessageCircle, Video, Globe, Smartphone, Send } from 'lucide-react';
import { SERVICE_PACKAGES } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const SOCIAL_ICONS = [
  { icon: <Camera size={20} />, name: 'Instagram' },
  { icon: <MessageCircle size={20} />, name: 'Facebook' },
  { icon: <Video size={20} />, name: 'YouTube' },
  { icon: <Globe size={20} />, name: 'X (Twitter)' },
  { icon: <Smartphone size={20} />, name: 'TikTok' },
];

export function Packages() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif italic"
          >
            Paket Layanan
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Dari pelacakan suasana hati pribadi hingga manajemen merek dan media sosial tingkat perusahaan. Pilih rencana yang sesuai dengan ambisi Anda.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {SERVICE_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative p-8 rounded-[2.5rem] flex flex-col h-full border-2 transition-all duration-300",
                pkg.recommended 
                  ? "bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10" 
                  : "bg-white text-slate-900 border-slate-100 hover:border-brand-primary/30"
              )}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Direkomendasikan
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={cn("text-2xl font-bold mb-2", pkg.recommended ? "text-white" : "text-slate-900")}>{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className={cn("text-sm", pkg.recommended ? "text-slate-400" : "text-slate-500")}>/{pkg.period}</span>
                </div>
                <p className={cn("text-sm leading-relaxed", pkg.recommended ? "text-slate-400" : "text-slate-500")}>
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className={cn("mt-1 p-0.5 rounded-full", pkg.recommended ? "bg-brand-primary" : "bg-brand-primary/10 text-brand-primary")}>
                      <Check size={14} className={pkg.recommended ? "text-white" : ""} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to={`/packages/${pkg.id}`}
                className={cn(
                  "w-full py-4 rounded-2xl font-bold transition-all shadow-lg text-center",
                  pkg.recommended 
                    ? "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-brand-primary/30" 
                    : "bg-black text-white hover:bg-slate-900"
                )}
              >
                Pilih Paket
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Branding & Social Media Focus */}
        <section className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-brand-primary/10 text-brand-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Rocket size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Lebih dari Makanan: <br /> <span className="text-brand-primary">Meningkatkan Merek Anda</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Rencana Studio Kreatif kami bukan hanya tentang apa yang Anda makan—ini tentang bagaimana Anda membagikannya. Kami menyediakan manajemen media sosial end-to-end untuk menjaga konsistensi branding Anda di semua platform.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg h-fit"><Zap size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Generasi Postingan Instan</h4>
                    <p className="text-sm text-slate-500 text-pretty">Secara otomatis menghasilkan gambar dan teks berkualitas tinggi untuk hidangan Anda, siap untuk diposting.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="p-2 bg-brand-secondary/10 text-brand-secondary rounded-lg h-fit"><Building2 size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Branding Perusahaan</h4>
                    <p className="text-sm text-slate-500">Kami membantu restoran dan influencer menjaga identitas visual yang kohesif yang mendorong loyalitas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-[2rem] shadow-2xl p-8 border border-slate-100 relative z-10">
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Send className="text-brand-primary" size={20} />
                  Distribusi Auto-Posting
                </h4>
                <div className="space-y-4">
                  {SOCIAL_ICONS.map((social) => (
                    <div key={social.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-slate-700">{social.icon}</div>
                        <span className="font-medium text-slate-700">{social.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                         <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider">Sinkron Aktif</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-brand-primary/5 rounded-2xl border border-brand-primary/10">
                  <p className="text-xs text-brand-primary font-bold text-center italic">"Konsistensi adalah rasa kesuksesan."</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
