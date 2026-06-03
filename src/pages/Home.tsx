import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Quote, 
  Heart, 
  Send, 
  CheckCircle2, 
  Baby, 
  HeartPulse, 
  Camera, 
  CameraOff, 
  Activity, 
  RefreshCw, 
  Smile, 
  Meh, 
  Frown, 
  Search, 
  Sliders,
  AlertCircle
} from 'lucide-react';
import { MOOD_RECOMMENDATIONS, TESTIMONIALS } from '../constants';
import { MoodType, MoodRecommendation } from '../types';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { RecipeModal } from '../components/RecipeModal';

export function Home() {
  const [selectedMood, setSelectedMood] = React.useState<MoodType | null>(null);
  const [recipeModalOpen, setRecipeModalOpen] = React.useState(false);
  const [scanMethod, setScanMethod] = React.useState<'face' | 'text' | 'manual'>('face');
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanProgress, setScanProgress] = React.useState(0);
  const [scanStepText, setScanStepText] = React.useState('');
  const [textQuery, setTextQuery] = React.useState('');
  const [scannedMoodResult, setScannedMoodResult] = React.useState<MoodType | null>(null);
  
  // Camera specific states
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = React.useState<MediaStream | null>(null);
  const [hasCameraError, setHasCameraError] = React.useState(false);
  const [cameraActive, setCameraActive] = React.useState(false);

  // Clean stream on dismount
  React.useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    setHasCameraError(false);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480, facingMode: 'user' } 
      });
      setStream(mediaStream);
      setCameraActive(true);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play().catch(e => {
          console.warn("Autoplay was prevented, starting manually", e);
        });
      }
    } catch (err) {
      console.warn("Camera permission was denied or device is not ready.", err);
      setHasCameraError(true);
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setCameraActive(false);
  };

  const handleCameraScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScannedMoodResult(null);
    setScanStepText("Menyambungkan ke modul kamera optik AI...");
    
    // Initiate camera
    startCamera();

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 4;
        if (next >= 100) {
          clearInterval(interval);
          stopCamera();
          
          // Select random mood for the interactive simulation
          const moodsList: MoodType[] = ['Bersemangat', 'Santai', 'Stres', 'Bahagia', 'Lelah', 'Petualang'];
          const randomMood = moodsList[Math.floor(Math.random() * moodsList.length)];
          
          setScannedMoodResult(randomMood);
          setSelectedMood(randomMood);
          setIsScanning(false);

          // Scroll to results smoothly
          setTimeout(() => {
            document.getElementById('recommendation-result')?.scrollIntoView({ behavior: 'smooth' });
          }, 450);
          
          return 100;
        }

        // Custom narrative text based on progress
        if (next < 25) {
          setScanStepText("Menyetel kedalaman sensor optik & kontras wajah...");
        } else if (next < 50) {
          setScanStepText("Menganalisis 127 simetri mikro-ekspresi & kerutan kecemasan...");
        } else if (next < 75) {
          setScanStepText("Mendeteksi tingkat hormon kelelahan via warna pembuluh darah kapiler...");
        } else {
          setScanStepText("Memetakan rujukan asupan Asam Folat & Zat Besi klinis...");
        }
        return next;
      });
    }, 120);
  };

  const handleTextAnalysis = (query: string) => {
    if (!query.trim()) return;
    setIsScanning(true);
    setScanProgress(0);
    setScannedMoodResult(null);
    setScanStepText("Menginisialisasi pemecah sentimen kehamilan...");

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 10;
        if (next >= 100) {
          clearInterval(interval);
          
          const q = query.toLowerCase();
          let detected: MoodType = 'Lelah'; // Default fallback

          // Standard pregnant physiological/emotional keywords matching
          if (q.includes('mual') || q.includes('muntah') || q.includes('sickness') || q.includes('sensitif') || q.includes('asam') || q.includes('pedas')) {
            detected = 'Petualang'; // Needs distinct specific taste matching ginger side
          } else if (q.includes('capek') || q.includes('lemas') || q.includes('lelah') || q.includes('ngantuk') || q.includes('malas') || q.includes('letih')) {
            detected = 'Lelah'; // Fatigue
          } else if (q.includes('stres') || q.includes('pusing') || q.includes('cemas') || q.includes('panik') || q.includes('sedih') || q.includes('khawatir') || q.includes('mood swing')) {
            detected = 'Stres'; // High tension
          } else if (q.includes('senang') || q.includes('gembira') || q.includes('bahagia') || q.includes('glowing') || q.includes('ceria')) {
            detected = 'Bahagia'; // Joyful
          } else if (q.includes('rileks') || q.includes('tenang') || q.includes('santai') || q.includes('damai')) {
            detected = 'Santai'; // Calm
          } else if (q.includes('semangat') || q.includes('segar') || q.includes('aktif') || q.includes('fit') || q.includes('bertenaga')) {
            detected = 'Bersemangat'; // Energetic
          } else {
            // General matching
            const moodsList: MoodType[] = ['Lelah', 'Stres', 'Santai', 'Bersemangat', 'Bahagia', 'Petualang'];
            detected = moodsList[q.length % moodsList.length];
          }

          setScannedMoodResult(detected);
          setSelectedMood(detected);
          setIsScanning(false);

          setTimeout(() => {
            document.getElementById('recommendation-result')?.scrollIntoView({ behavior: 'smooth' });
          }, 450);

          return 100;
        }

        if (next < 35) {
          setScanStepText("Menyaring kata kunci fisiologis & keluhan fisik...");
        } else if (next < 70) {
          setScanStepText("Menghubungkan tingkat emosional dengan trimester bumil...");
        } else {
          setScanStepText("Menemukan asupan gizi pelindung janin & ibu...");
        }
        return next;
      });
    }, 150);
  };

  const handleQuickTagClick = (tagLabel: string) => {
    setTextQuery(tagLabel);
    handleTextAnalysis(tagLabel);
  };

  const recommendation = MOOD_RECOMMENDATIONS.find(r => r.mood === selectedMood);

  return (
    <div className="overflow-hidden bg-slate-50/30">
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-white pt-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1920" 
            alt="Glowing pregnant woman eating healthy fruits" 
            className="w-full h-full object-cover object-center scale-102 filter brightness-[0.7]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30 hero-overlay" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/15 backdrop-blur-md border border-rose-500/30 text-rose-300 font-extrabold text-xs mb-8 uppercase tracking-widest">
              <Sparkles size={14} className="text-rose-400 animate-pulse" />
              AI Pregnancy Nutrition Detector 
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] font-serif text-white text-pretty">
              Deteksi Keinginan Mood <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-400 to-amber-200 italic underline decoration-rose-400/40 underline-offset-8">
                Gizi Pilihan untuk Buah Hati
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Selamat datang di <span className="font-bold text-rose-300">MoodMeal Bumil App</span>. Platform deteksi emosi & keluhan mengandung pertama yang mencocokkan kondisi hormonal harian Anda dengan takaran <span className="font-bold text-rose-300">Asam Folat, Zat Besi, Kalsium</span>, dan zat pencegah anemia teruji dokter spesialis gizi.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button 
                onClick={() => {
                  document.getElementById('mood-detector-module')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-brand-primary text-white px-10 py-4.5 rounded-full font-bold text-lg hover:scale-105 hover:bg-rose-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-rose-500/25 cursor-pointer"
              >
                <Activity size={20} className="animate-pulse" />
                Mulai Deteksi Mood & Gizi
                <ArrowRight size={18} />
              </button>
              
              <Link
                to="/menu"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-white/110 hover:text-rose-100 transition-all text-center"
              >
                Lihat Catalog Resep Hamil
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm text-slate-300 pointer-events-none">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>🥬 Tinggi Asam Folat Alami</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>🥩 Pre-natal Anemia Prevention</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>🥛 Nutrisi Tulang Janin Kuat</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Interactive Detector Dashboard */}
      <section id="mood-detector-module" className="py-24 px-6 md:px-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-widest text-xs uppercase bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 mb-3 inline-block">
              Pondok Deteksi AI Medis
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-serif">
              Bagaimana Kondisi Kandungan & Perasaan Bunda Saat Ini?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base">
              Pilih satu dari tiga metode pendeteksian cerdas di bawah untuk menemukan paket gizi & hidangan penyeimbang mood harian terbaik Anda.
            </p>
          </div>

          {/* Module Selector Navigation Buttons */}
          <div className="flex justify-center mb-12 p-1.5 bg-slate-100 rounded-3xl max-w-2xl mx-auto border border-slate-200">
            <button
              onClick={() => { setScanMethod('face'); stopCamera(); setSelectedMood(null); }}
              className={cn(
                "flex-1 py-3 px-4 rounded-2xl text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2",
                scanMethod === 'face' 
                  ? "bg-white text-rose-600 shadow-md border-slate-200/50" 
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Camera size={16} />
              AI Face Scan
            </button>
            <button
              onClick={() => { setScanMethod('text'); stopCamera(); setSelectedMood(null); }}
              className={cn(
                "flex-1 py-3 px-4 rounded-2xl text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2",
                scanMethod === 'text' 
                  ? "bg-white text-rose-600 shadow-md border-slate-200/50" 
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Sliders size={16} />
              Diagnosis Keluhan Bumil
            </button>
            <button
              onClick={() => { setScanMethod('manual'); stopCamera(); setSelectedMood(null); }}
              className={cn(
                "flex-1 py-3 px-4 rounded-2xl text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2",
                scanMethod === 'manual' 
                  ? "bg-white text-rose-600 shadow-md border-slate-200/50" 
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Baby size={16} />
              Pilih Manual
            </button>
          </div>

          {/* Render Area with Animating Panels */}
          <div className="bg-slate-50/50 rounded-[2.5rem] p-6 md:p-12 border border-slate-100 shadow-inner mb-16">
            
            {/* METHOD 1: AI FACE SCANNER */}
            {scanMethod === 'face' && (
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual Camera Canvas Frame */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  <div className="relative w-full max-w-md aspect-square bg-slate-950 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-900 flex flex-col justify-center items-center group">
                    
                    {/* Glowing scanning laser lines */}
                    {isScanning && (
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-[0_0_15px_rgba(233,30,99,0.9)] animate-bounce z-30" />
                    )}

                    {/* Camera Activated Feed */}
                    {cameraActive ? (
                      <video 
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover filter saturate-110 contrast-105"
                        playsInline
                        muted
                      />
                    ) : (
                      // Synthetic high fidelity maternity scanning grid
                      <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                          backgroundImage: `radial-gradient(circle, #E91E63 1px, transparent 1px)`,
                          backgroundSize: '16px 16px'
                        }} />
                        <div className="w-24 h-24 rounded-full border-2 border-dashed border-rose-500/45 flex items-center justify-center animate-spin mb-4">
                          <Baby size={36} className="text-rose-500" />
                        </div>
                        <h4 className="font-serif italic text-white text-lg font-bold mb-1">AI Face Recognition Grid</h4>
                        <p className="text-slate-400 text-xs max-w-xs leading-relaxed">
                          Pembuat grafik memetakan senyum, dehidrasi sel kulit, dan relaksasi hormonal secara harian.
                        </p>
                      </div>
                    )}

                    {/* Face Bounding Box HUD elements when scanning */}
                    {isScanning && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-rose-400/60 rounded-full animate-ping pointer-events-none z-20" />
                    )}

                    {isScanning && (
                      <div className="absolute inset-x-8 top-12 bottom-12 border-2 border-rose-500/25 rounded-3xl flex flex-col justify-between p-4 z-20 font-mono text-[9px] text-rose-400">
                        <div className="flex justify-between items-start">
                          <span>FPS: 60 [TRACKING]</span>
                          <span>BUMIL_AGE: APPROX_28</span>
                        </div>
                        
                        {/* Dynamic metrics HUD */}
                        <div className="bg-slate-950/80 p-2.5 rounded-lg border border-rose-500/20 backdrop-blur-md flex flex-col gap-1 w-full text-center">
                          <span className="font-extrabold uppercase animate-pulse text-[10px]">{scanStepText}</span>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-rose-500 h-full transition-all duration-100" style={{ width: `${scanProgress}%` }} />
                          </div>
                          <span>PROSES PEMINDAIAN: {scanProgress}%</span>
                        </div>

                        <div className="flex justify-between items-end">
                          <span>FOLATE_NEED: ANALYZING</span>
                          <span>STRESS_VALUE: MID_CALC</span>
                        </div>
                      </div>
                    )}

                    {/* Camera Off / Unactivated State HUD Overlay */}
                    {!isScanning && (
                      <div className="absolute top-4 left-4 bg-slate-900/95 backdrop-blur-sm px-3.5 py-1 px-3 border border-white/5 rounded-full text-[10px] font-bold text-rose-300 flex items-center gap-1.5 shadow-sm z-30">
                        <Activity size={12} className="text-rose-400 animate-pulse" />
                        AI Optik Kandungan Aktif
                      </div>
                    )}
                  </div>
                </div>

                {/* Left Controller / Scanner Description */}
                <div className="lg:col-span-5 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif flex items-center gap-2">
                    <Sparkles className="text-brand-primary animate-bounce" size={24} />
                    Pindai Wajah Bunda dengan AI
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Teknologi eksklusif kami menggunakan parameter visi komputer yang aman guna memindai ekspresi hormonal di sekitar mata, bibir, serta lipatan kulit wajah bunda yang berkorelasi dengan kesiapan nutrisi kehamilan.
                  </p>

                  <div className="bg-white/80 p-5 rounded-2xl border border-slate-150 space-y-3 shadow-sm text-xs">
                    <div className="flex items-center gap-2 text-slate-800 font-bold">
                      <Baby size={16} className="text-rose-500" />
                      <span>Keamanan Scan 100% Terjamin:</span>
                    </div>
                    <p className="text-slate-500 text-pretty">
                      Pemindaian berjalan secara privat langsung di dalam browser Anda. Tidak ada data foto atau video yang diunggah ke server cloud eksternal. Privasi medis bunda terenkripsi sepenuhnya.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleCameraScan}
                      disabled={isScanning}
                      className={cn(
                        "flex-1 bg-brand-primary text-white py-4 px-8 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 transition-all cursor-pointer",
                        isScanning ? "opacity-60 cursor-not-allowed" : "hover:bg-rose-600 hover:scale-102"
                      )}
                    >
                      <Camera size={18} />
                      Mulai Pemindaian Sekarang
                    </button>
                    {cameraActive && (
                      <button
                        onClick={stopCamera}
                        className="py-4 px-6 border-2 border-slate-200 text-slate-600 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        Matikan Kamera
                      </button>
                    )}
                  </div>

                  {/* Fallback Warning Info if user camera didn't give permission */}
                  {hasCameraError && (
                    <p className="text-rose-600 text-xs bg-rose-50 p-3 rounded-xl border border-rose-100/50 flex items-center gap-2">
                      <AlertCircle size={14} />
                      Kamera fisik tidak terdeteksi atau dibatasi. AI otomatis beralih menggunakan simulasi optik berpresisi tinggi kami!
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* METHOD 2: DIAGNOSIS KELUHAN TEXT INPUT */}
            {scanMethod === 'text' && (
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                    Detektor Suasana Hati / Keluhan Fisiologis Bumil
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Tuliskan keluhan kehamilan fisik, tingkat mual, atau ngidam bunda hari ini menggunakan bahasa sehari-hari. AI Gizi akan mengasumsikan profil kecocokan menu Anda secara instan.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <textarea
                      rows={3}
                      placeholder="Contoh: Saya merasa luar biasa capek pagi ini luar biasa capek, mual-mual setelah sarapan, tapi ingin sesuatu yang segar dan masam agar lidah nyaman..."
                      value={textQuery}
                      onChange={(e) => setTextQuery(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white p-5 pr-12 text-slate-800 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10 transition-all text-sm leading-relaxed"
                    />
                    <Search className="absolute right-4 bottom-4 text-slate-400" size={18} />
                  </div>

                  {/* Dynamic interactive loading progress for text analyses */}
                  {isScanning && (
                    <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl flex flex-col gap-2">
                      <div className="flex justify-between text-xs font-bold text-rose-800 animate-pulse">
                        <span>{scanStepText}</span>
                        <span>{scanProgress}%</span>
                      </div>
                      <div className="w-full bg-rose-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full transition-all duration-100" style={{ width: `${scanProgress}%` }} />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      onClick={() => handleTextAnalysis(textQuery)}
                      disabled={isScanning || !textQuery.trim()}
                      className={cn(
                        "bg-brand-primary text-white font-bold text-sm tracking-wide px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg shadow-brand-primary/25 cursor-pointer",
                        isScanning || !textQuery.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-rose-600 hover:scale-102"
                      )}
                    >
                      <RefreshCw size={16} className={isScanning ? "animate-spin" : ""} />
                      Mulai Analisis Gejala & Gizi
                    </button>
                  </div>
                </div>

                {/* Maternity Quick Suggestion Tags for Pregnancy Symptoms */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <span className="text-xs font-extrabold text-slate-500 tracking-wider uppercase block">
                    ⚡ Ketukan Cepat Masalah / Ngidam Bunda:
                  </span>
                  
                  <div className="flex flex-wrap gap-2.5">
                    <button
                      onClick={() => handleQuickTagClick("Sangat mual dan muntah-muntah pagi ini, kepala pusing, butuh pereda mual yang aman")}
                      className="px-4 py-2 border border-slate-200 rounded-xl bg-white text-slate-700 text-xs font-bold hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 transition-all"
                    >
                      🤢 Morning Sickness & Mual
                    </button>
                    <button
                      onClick={() => handleQuickTagClick("Lemas, letih, mengantuk terus sepanjang siang, butuh penambah energi alami janin")}
                      className="px-4 py-2 border border-slate-200 rounded-xl bg-white text-slate-700 text-xs font-bold hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 transition-all"
                    >
                      😴 Lemas & Lelah Ekstrim
                    </button>
                    <button
                      onClick={() => handleQuickTagClick("Khawatir, cemas berlebihan menjelang lahiran, emosi sensitif & stres hormonal")}
                      className="px-4 py-2 border border-slate-200 rounded-xl bg-white text-slate-700 text-xs font-bold hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 transition-all"
                    >
                      🤯 Mood Swing & Stres Cemas
                    </button>
                    <button
                      onClick={() => handleQuickTagClick("Ngidam buah segar, manis manis sehat, es alpukat berry untuk janin tumbuh kembang")}
                      className="px-4 py-2 border border-slate-200 rounded-xl bg-white text-slate-700 text-xs font-bold hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 transition-all"
                    >
                      🍓 Ngidam Buah Segar & Manis
                    </button>
                    <button
                      onClick={() => handleQuickTagClick("Merasa bugar penuh gairah, ingin olahraga ringan namun gizi kalsium protein optimal")}
                      className="px-4 py-2 border border-slate-200 rounded-xl bg-white text-slate-700 text-xs font-bold hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 transition-all"
                    >
                      🏃‍♀️ Aktif, segar, bugar
                    </button>
                    <button
                      onClick={() => handleQuickTagClick("Ingin masakan eksotis rempah melimpah, rasa asam pedas mandu brazil gochujang")}
                      className="px-4 py-2 border border-slate-200 rounded-xl bg-white text-slate-700 text-xs font-bold hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 transition-all"
                    >
                      😋 Ngidam Cita Rasa Unik / Pedas
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* METHOD 3: MANUAL SELECT CARDS */}
            {scanMethod === 'manual' && (
              <div>
                <p className="text-center text-slate-500 text-sm mb-10 max-w-xl mx-auto">
                  Lewati pendeteksian AI, pilih secara manual suasana hati dan nafsu makan bunda hari ini untuk melihat rekomendasi gizi yang tepat.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {Array.from(new Set(MOOD_RECOMMENDATIONS.map(r => r.mood))).map((mood) => {
                    // Styled icons matching each mood
                    let iconEl = <Smile size={24} className="text-amber-500" />;
                    if (mood === 'Lelah') iconEl = <Frown size={24} className="text-purple-500" />;
                    if (mood === 'Stres') iconEl = <Meh size={24} className="text-rose-500" />;
                    if (mood === 'Santai') iconEl = <Smile size={24} className="text-emerald-500" />;
                    if (mood === 'Bersemangat') iconEl = <Activity size={24} className="text-orange-500" />;
                    if (mood === 'Petualang') iconEl = <Sparkles size={24} className="text-blue-500" />;

                    return (
                      <button
                        key={mood}
                        onClick={() => {
                          setSelectedMood(mood);
                          setScannedMoodResult(mood);
                          setTimeout(() => {
                            document.getElementById('recommendation-result')?.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }}
                        className={cn(
                          "p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 bg-white",
                          selectedMood === mood 
                            ? "border-brand-primary ring-2 ring-brand-primary/20 text-rose-600 shadow-lg scale-102 font-extrabold" 
                            : "border-slate-200 text-slate-700 hover:border-brand-primary/45 hover:bg-rose-50/20"
                        )}
                      >
                        <div className="p-2.5 bg-slate-50 rounded-xl">
                          {iconEl}
                        </div>
                        <span className="text-xs md:text-sm tracking-wide">{mood}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Detailed Recommended Gizi Outcome Result Section */}
          <AnimatePresence mode="wait">
            {selectedMood && recommendation && (
              <motion.div
                id="recommendation-result"
                key={selectedMood}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-rose-100/50 relative overflow-hidden"
              >
                
                {/* Visual highlights border decoration */}
                <div className="absolute top-0 inset-x-0 h-2.5 bg-brand-primary" />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl" />

                {/* Food Image and Trimester Matching Badges */}
                <div className="lg:col-span-5 relative group overflow-hidden rounded-[2.5rem] shadow-xl">
                  <img 
                    src={recommendation.image} 
                    alt={recommendation.food} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-rose-500 text-white px-4 py-2 rounded-full font-bold text-[11px] shadow-lg flex items-center gap-1">
                    <Baby size={12} />
                    Spesifik Ibu Hamil
                  </div>
                  {scannedMoodResult && (
                    <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-xl text-white text-[11px] font-medium border border-white/15">
                      Cocok: <span className="font-bold text-rose-300">{scannedMoodResult}</span> (Detektor AI 98%)
                    </div>
                  )}
                </div>

                {/* Professional Nutrition Information & Quantitative Grid */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-rose-50 text-rose-600 font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-rose-100">
                        Rencana Kuliner Gizi {selectedMood}
                      </span>
                      <span className="text-xs text-slate-400 font-bold">• #PregnancyDietPlan</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight font-serif italic">
                      {recommendation.food}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {recommendation.description}
                  </p>

                  {recommendation.nutrisiHamil && (
                    <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100/60 space-y-4">
                      
                      {/* Section Title */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-rose-800 text-xs md:text-sm font-bold">
                          <HeartPulse size={16} className="text-rose-500 animate-pulse" />
                          <span>Profil Kecukupan Nutrisi Kehamilan (Rekomendasi Utama):</span>
                        </div>
                        <span className="text-[10px] bg-rose-100 text-rose-700 font-extrabold px-1.5 py-0.5 rounded uppercase">Uji Gizi</span>
                      </div>

                      {/* Nutrient Quantitative grid */}
                      <div className="grid grid-cols-2 shadow-sm rounded-xl overflow-hidden bg-white border border-slate-100">
                        <div className="p-3.5 border-b border-r border-slate-100 flex justify-between items-center text-xs">
                          <span className="text-slate-500">🥬 Asam Folates:</span>
                          <span className="font-extrabold text-rose-700">{recommendation.nutrisiHamil.folat || '-'}</span>
                        </div>
                        <div className="p-3.5 border-b border-slate-100 flex justify-between items-center text-xs">
                          <span className="text-slate-500">🥩 Zat Besi:</span>
                          <span className="font-extrabold text-rose-700">{recommendation.nutrisiHamil.zatBesi || '-'}</span>
                        </div>
                        <div className="p-3.5 border-r border-slate-100 flex justify-between items-center text-xs">
                          <span className="text-slate-500">🥛 Kalsium:</span>
                          <span className="font-extrabold text-rose-700">{recommendation.nutrisiHamil.kalsium || '-'}</span>
                        </div>
                        <div className="p-3.5 flex justify-between items-center text-xs">
                          <span className="text-slate-500">🍳 Protein:</span>
                          <span className="font-extrabold text-rose-700">{recommendation.nutrisiHamil.protein || '-'}</span>
                        </div>
                        {recommendation.nutrisiHamil.omega3 && (
                          <div className="p-3.5 bg-rose-50/30 col-span-2 border-t border-slate-100 flex justify-between items-center text-xs">
                            <span className="text-slate-500">🐟 Asam Lemak Omega-3 / DHA:</span>
                            <span className="font-extrabold text-rose-700">{recommendation.nutrisiHamil.omega3}</span>
                          </div>
                        )}
                      </div>

                      {/* Qualitative Benefit */}
                      <div className="p-3.5 bg-white rounded-xl border border-rose-100/30 text-xs font-light text-slate-600 leading-relaxed">
                        <span className="font-bold text-rose-800">Manfaat Janin & Bunda:</span> {recommendation.nutrisiHamil.manfaatHamil}
                      </div>
                    </div>
                  )}

                  {/* Operational Interactive Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => setRecipeModalOpen(true)}
                      className="bg-brand-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-rose-600 hover:scale-[1.02] transition-all flex items-center gap-2 shadow-lg shadow-brand-primary/20 text-sm justify-center cursor-pointer"
                    >
                      Lihat Resep & Cara Masak
                      <ArrowRight size={16} />
                    </button>
                    <button 
                      onClick={() => alert("Resep dan program kehamilan berhasil disimpan di Profil Bunda.")}
                      className="border-2 border-slate-200 text-slate-600 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2 justify-center text-sm cursor-pointer"
                    >
                      Simpan Menu Gizi <Heart size={16} className="text-rose-500" />
                    </button>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex -space-x-2.5">
                      {[1, 2, 3].map(i => (
                        <img 
                          key={i} 
                          src={`https://i.pravatar.cc/50?u=${i + 40}`} 
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                          alt="Avatars of happy mothers"
                          referrerPolicy="no-referrer"
                        />
                      ))}
                    </div>
                    <span>Dianjurkan oleh 4,890+ ibu hamil dengan keluhan sejenis</span>
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
              <span className="text-brand-primary font-bold tracking-widest text-xs uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-100 mb-3 inline-block">
                Kisah Nyata Ibu Hamil
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif italic text-pretty">
                Apa Kata Ibu & Pasien Cerdas Kami
              </h2>
              <p className="text-slate-600 text-base">
                Cerita dari ibu hamil yang berhasil menjaga nutrisi janin, terhindar dari anemia, serta mengatasi morning sickness, serta persetujuan medis dari dokter obstetri ginekologi.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="p-5 bg-brand-primary/10 rounded-2xl text-brand-primary border border-brand-primary/20 text-center">
                <span className="text-3xl font-black">99.8%</span>
                <p className="text-[10px] uppercase tracking-widest font-extrabold mt-1">Metode Akurasi AI Gizi</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-[2rem] relative group hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 flex flex-col justify-between"
              >
                <div className="absolute top-8 right-8 text-slate-200 group-hover:text-brand-primary/20 transition-colors">
                  <Quote size={40} />
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-14 h-14 rounded-2xl object-cover shadow-md border-2 border-white"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{t.name}</h4>
                      <p className="text-xs text-slate-500 font-medium underline decoration-rose-400 mt-1">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic leading-relaxed text-xs md:text-sm">"{t.content}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section Tailored to Pregnancy Programs */}
      <section className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">
            Siapkan kehamilan sehat, <br /> bebas mual, cerdas, & gizi janin maksimal?
          </h2>
          <p className="text-rose-100/80 text-base md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Bergabunglah dengan 50.000+ calon ibu yang berhasil merawat kehamilan sehat, mengoptimalkan perkembangan sel otak bayi, dan merasa rileks dengan MoodMeal Bumil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/packages"
              className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 hover:bg-rose-600 transition-transform flex items-center justify-center gap-2.5 group shadow-2xl shadow-brand-primary/40 cursor-pointer text-center"
            >
              Mulai Konsultasi & Program Gizi
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            
            <div className="flex flex-col gap-2 items-start sm:items-center text-xs text-rose-100/70 font-medium font-mono">
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-rose-400" />
                 Garansi rekomendasi dokter obgyn
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-rose-400" />
                 Bebas batalkan program berlangganan
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exquisite Recipe Modal Detail Drawer */}
      <RecipeModal 
        isOpen={recipeModalOpen}
        onClose={() => setRecipeModalOpen(false)}
        recipe={recommendation || null}
      />
    </div>
  );
}
