import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users2, ShieldCheck, Globe2, Lightbulb } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Pengguna Senang', value: '50Rb+' },
    { label: 'Rekomendasi Makanan', value: '1.2Jt+' },
    { label: 'Brand Dikelola', value: '250+' },
    { label: 'Postingan Tergenerasi', value: '800Rb+' },
  ];

  const values = [
    {
      title: 'Empati Utama',
      description: 'Kami percaya teknologi harus memahami emosi manusia, bukan sekadar titik data.',
      icon: <Heart className="text-brand-primary" />
    },
    {
      title: 'Cita Rasa Global',
      description: 'AI kami dilatih pada tradisi kuliner dari lebih dari 120 negara.',
      icon: <Globe2 className="text-brand-accent" />
    },
    {
      title: 'Inovasi Radikal',
      description: 'Mendorong batasan kuliner berbasis cloud dan otomasi merek.',
      icon: <Lightbulb className="text-brand-primary" />
    }
  ];

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Vision Section */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block">Misi Kami</span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 font-serif italic leading-tight">
                Memberi Makan Jiwa, <br /> Satu Mood dalam satu waktu.
              </h1>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Didirikan pada tahun 2024, MoodMeal lahir dari pengamatan sederhana: kita makan secara berbeda saat kita bahagia dibandingkan saat kita lelah. Namun, sebagian besar aplikasi makanan hanya menunjukkan apa yang terdekat.
              </p>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Tim ahli gizi, ilmuwan data, dan seniman kuliner kami bersatu untuk membangun platform berbasis cloud yang menghormati kompleksitas semangat manusia.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="rounded-[3rem] w-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-black text-white p-12 rounded-[2rem] shadow-xl hidden md:block border border-white/10">
                 <QuoteIcon className="w-12 h-12 mb-4 opacity-50 text-brand-primary" />
                 <p className="text-xl font-bold italic">"Mood adalah bumbu <br /> paling lezat yang ada."</p>
                 <p className="mt-4 text-sm font-medium">— Julia Vance, CEO</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif italic">Apa yang Memandu Kami</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Budaya kami dibangun di atas persimpangan seni kuliner dan teknologi mutakhir.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {values.map((v, i) => (
              <div key={i} className="space-y-6">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/10">
                   {/* Wrapping icon in a bigger div to keep size consistent */}
                   <div className="[&>svg]:w-10 [&>svg]:h-10">
                     {v.icon}
                   </div>
                </div>
                <h3 className="text-2xl font-bold">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-3 bg-brand-accent/10 rounded-2xl text-brand-accent mb-6">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif italic">Privasi Anda adalah Sakral</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Kami menggunakan pemrosesan cloud terenkripsi untuk semua scan suasana hati. Kami tidak pernah menjual data Anda kepada pengiklan pihak ketiga. Emosi Anda milik Anda—kami hanya membantu Anda memberinya makan lebih baik.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
             <div className="font-bold text-2xl flex items-center gap-2"><Users2 /> CULINARY UNION</div>
             <div className="font-bold text-2xl flex items-center gap-2"><Globe2 /> GLOBAL HEALTH ORG</div>
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
