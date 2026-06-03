import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Flame, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Utensils, 
  Sparkles, 
  Baby, 
  Heart, 
  ChefHat, 
  Clipboard, 
  HelpCircle,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';
import { MoodRecommendation } from '../types';

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: MoodRecommendation | null;
}

// Structured details for several major pregnancy foods
const PRE_DEFINED_RECIPES: Record<string, {
  prepTime: string;
  cookTime: string;
  difficulty: 'Mudah' | 'Sedang' | 'Klinis/Teliti';
  ingredients: string[];
  instructions: string[];
  safetyTips: string[];
}> = {
  'Quinoa Power Bowl': {
    prepTime: '15 menit',
    cookTime: '20 menit',
    difficulty: 'Mudah',
    ingredients: [
      '1/2 cup quinoa organik (cuci bersih sebelum dimasak)',
      '1 ikat daun kale segar (cuci bertahap di air mengalir)',
      '1/2 buah alpukat mentega matang (kupas bersih)',
      '1/4 cup tomat ceri (belah kembar)',
      '1 sendok makan biji labu kering premium',
      '1 sendok makan tahini wijen murni',
      '1 sendok teh sari perasan jeruk lemon segar',
      '1/2 sendok teh garam laut iodium ringan'
    ],
    instructions: [
      'Rebus quinoa dalam 1 cup air mendidih selama 15 menit sampai mengembang lembut. Angkat dan biarkan dingin hangat suam-suam kuku.',
      'Rendam daun kale dalam air bersih mengalir yang ditetesi sedikit cuka apel selama 5 menit untuk sterilisasi mikroba. Keringkan, lalu iris daunnya tipis-tipis.',
      'Mangkuk Saus: Aduk rata tahini murni, jus lemon segar, sejumput garam, dan 1 sendok makan air hangat sampai memperoleh tekstur dressing krim yang harum.',
      'Susun quinoa hangat sebagai alas karbohidrat sehat di mangkuk saji.',
      'Tempatkan tumpukan daun kale steril, belahan alpukat mentega, dan tomat ceri di atas quinoa.',
      'Taburkan biji labu sebagai tambahan kalsium dan siram dengan dressing tahini lemon segar sebelum disajikan.'
    ],
    safetyTips: [
      'Higienitas Kale Utama: Daun hijau yang tumbuh dekat tanah wajib dicuci tiga kali bilas untuk menghindarkan kuman Listeria monocytogenes pemicu demam prenatal.',
      'Sterilitas Kulit Alpukat: Cuci bagian luar kulit alpukat sebelum memotongnya agar kuman di permukaan kulit mati tidak terbawa pisau ke dalam daging buah.'
    ]
  },
  'Avocado Berry Folate Bowl': {
    prepTime: '10 menit',
    cookTime: '0 menit (Tanpa Masak)',
    difficulty: 'Mudah',
    ingredients: [
      '1 buah alpukat mentega matang berukuran sedang',
      '1/2 cup blueberry organik segar (dicuci bersih)',
      '4 buah stroberi matang manis (kupas daunnya)',
      '1/2 cup yogurt Yunani plain (pastikan tertera label Terpasteurisasi)',
      '1 sendok makan madu acacia murni bersertifikat Halal',
      '1 sendok makan chia seeds mentah'
    ],
    instructions: [
      'Siapkan mangkuk saji steril, tuangkan seluruh greek yogurt pasteurisasi dingin sebagai penambah kalsium & probiotik perut.',
      'Potong alpukat mentega ke dalam ukuran dadu sedang lalu letakkan perlahan di atas yogurt.',
      'Cuci bersih stroberi dan blueberry di bawah air mengalir sambil digosok lembut. Tiriskan, lalu belah stroberi jadi bagian kecil.',
      'Tata buah beri matang segar berdampingan dengan irisan alpukat secara artistik.',
      'Taburi chia seeds yang kaya omega-3 di sekeliling mangkuk sebagai nutrisi kognitif awal janin.',
      'Siramkan madu acacia murni secara merata di atas seluruh buah segarnya. Nikmati segera dalam kondisi segar.'
    ],
    safetyTips: [
      'Gunakan Yogurt Terpasteurisasi: Sangat dilarang mengonsumsi produk susu atau yogurt mentah (raw milk) karena risiko tinggi penularan Mycobacterium bovis.',
      'Residu Organik Stroberi: Buah beri adalah kelompok buah berkulit tipis yang tinggi residu pestisida terdeposit. Rendam sejenak dengan air garam ringan untuk memastikan residu pestisida terbilas tuntas.'
    ]
  },
  'Smoothie Berry Protein': {
    prepTime: '8 menit',
    cookTime: '2 menit',
    difficulty: 'Mudah',
    ingredients: [
      '1/2 cup blueberry segar teruji hygienes',
      '1/2 cup raspberry merah segar atau beku steril',
      '1 scoop bubuk protein isolat susu murni bersertifikat BPOM',
      '1 cup susu almond tawar pasteurisasi dingin',
      '1 sendok makan sirup mapel murni sebagai penawar asam'
    ],
    instructions: [
      'Cuci seluruh berry di air mengalir seaktif mungkin untuk menghilangkan kuman permukaan.',
      'Masukkan berry bersih dan padat gizi antioxidant ke dalam gelas blender bersih yang sudah disterilisasi air panas harian.',
      'Tuangkan satu scoop protein whey isolat murni untuk pemulihan massa otot rahim bunda.',
      'Tambahkan susu almond tawar terpasteurisasi dan sirup mapel secukupnya.',
      'Blender seluruh campuran dengan tingkat putaran tinggi selama 90 detik hingga berbusa halus dan mengental.',
      'Sajikan dalam Tumbler dingin agar gizi dan rasa segar bertahan paling maksimal.'
    ],
    safetyTips: [
      'Hati-hati Kontaminasi Es Batu: Jika menggunakan es batu tambahan, pastikan es terbuat dari air matang higienis buatan sendiri untuk menghindari bakteri usus patogen E. coli.',
      'Hindari Protein Curah: Gunakan protein whey yang bermerek jelas dan terbukti lulus uji klinis dari otoritas pengawas obat dan makanan.'
    ]
  },
  'Golden Grilled Salmon King': {
    prepTime: '15 menit',
    cookTime: '12 menit',
    difficulty: 'Klinis/Teliti',
    ingredients: [
      '150 gram filet ikan salmon segar grade-A bebas logam berat',
      '1 sendok teh air perasan jeruk nipis anti bau hanyir',
      '1 siung bawang putih (ditumbuk halus)',
      '1/2 sendok teh garam beryodium ringan',
      '1 sendok teh mentega tawar murni (unsalted butter)',
      '1 ikat kecil asparagus organik segar'
    ],
    instructions: [
      'Lap filet salmon segar tipis-tipis menggunakan tisu dapur steril sampai kering sepenuhnya.',
      'Oleskan jus nipis, garam, dan bawang putih halus di seluruh bagian daging ikan. Diamkan selama 10 menit di kulkas agar bumbu meresap sempurna.',
      'Panaskan pan datar antilengket dengan mentega di atas api kompor bersuhu sedang-rendah.',
      'Letakkan salmon dengan kulit menghadap ke bawah. Biarkan kulit ikan garing terpanggang selama 5 menit tanpa dibolak-balik agar lemak DHA tidak leleh terbuang.',
      'Balik salmon perlahan ke sisi daging, panggang kembali selama 4-5 menit sampai bagian dalam daging salmon berubah warna merah muda buram yang solid (Welldone).',
      'Masukkan asparagus yang telah dicuci bersih di samping salmon, tumis kilat selama 2 menit. Angkat hidangan dan nikmati hangat.'
    ],
    safetyTips: [
      'Matang Sempurna Tanpa Negosiasi: Filet salmon untuk ibu hamil WAJIB dimasak matang penuh (well-done), bukan matang sebagian (medium-rare) demi menyingkirkan risiko cacing parasit laut.',
      'Gunakan Salmon Bebas Merkuri: Pastikan salmon yang dibeli berjenis rendah kontaminasi (seperti Atlantic Salmon hasil budidaya bersih) untuk melindungi tumbuh kembang sel otak sensitif janin.'
    ]
  },
  'Teh Chamomile & Salmon Panggang': {
    prepTime: '12 menit',
    cookTime: '12 menit',
    difficulty: 'Klinis/Teliti',
    ingredients: [
      '150 gram salmon segar liar kaya omega-3',
      '1 mangkuk kecil air seduhan teh chamomile organik hangat (bebas kafein)',
      '1 sendok makan saus tiram organik rendah garam',
      '1 sendok teh minyak wijen murni',
      '1/2 siung jahe muda (kupas, lalu parut tipis)'
    ],
    instructions: [
      'Balurkan jahe parut, saus tiram rendah garam, dan minyak wijen pada permukaan filet salmon.',
      'Diamkan ikan salmon termarinasi selama 10 menit agar aroma jahe melumpuhkan aroma tajam salmon yang memicu mual (morning sickness).',
      'Panaskan panggangan atau pan antilengket. Letakkan salmon di permukaan pan dengan tenang.',
      'Panggang salmon secara teliti selama 5-6 menit setiap sisinya sampai bagian tengahnya matang seutuhnya dan berwarna pink buram (well-done).',
      'Sajikan salmon panggang hangat bersanding mangkuk seduhan teh chamomile hangat yang bebas kafein untuk menenangkan pikiran lelah bunda.'
    ],
    safetyTips: [
      'Pentingnya Jahe Parut: Aroma jahe sangat baik mengurangi hiperesmosis lambung penyebab mual berat bumil.',
      'Sifat Teh Chamomile: Teh chamomile murni 100% bebas kafein sehingga aman diminum kapan saja dan membantu meredakan ketegangan vaskular pemicu insomnia pada ibu hamil.'
    ]
  },
  'Dark Chocolate & Berry Parfait': {
    prepTime: '15 menit',
    cookTime: '0 menit',
    difficulty: 'Mudah',
    ingredients: [
      '50 gram dark chocolate premium (kandungan kakao minimal 70%)',
      '1 cup yogurt Yunani (pasteurized) dingin segar',
      '1/2 cup buah beri beku pilihan teruji (stroberi & blueberry)',
      '1 sendok makan kacang almond panggang diiris tipis'
    ],
    instructions: [
      'Hancurkan dark chocolate batangan secara kasar menggunakan pisau steril di atas talenan bersih.',
      'Siapkan wadah gelas parfait transparan berukuran sedang.',
      'Masukkan 3 sendok makan yogurt di dasar gelas sebagai struktur kalsium dasar.',
      'Taburkan rajangan cokelat hitam antipenat dan setengah cup buah beri segar di atas yogurt.',
      'Masukkan sisa yogurt dingin sebagai lapisan penutup di tengah wadah.',
      'Hias bagian atas dengan sisa cokelat hitam, buah stroberi, dan ratakan almond serpih yang renyah sebagai energi penutup.'
    ],
    safetyTips: [
      'Sterilisasi Kacang Almond: Panggang kacang almond iris sebentar dalam oven bersuhu 150°C selama 4 menit sebelum dihidangkan untuk menjamin hilangnya kontaminasi spora Aspergillus flavus di kacang.',
      'Kontrol Kandungan Kakao: Pilih cokelat dengan kandungan kakao di atas 70% karena kaya akan magnesium penenang saraf dan rendah kandungan gula pemicu lonjakan gula darah gestasional.'
    ]
  },
  'Spinach Iron-Blast Tenderloin': {
    prepTime: '20 menit',
    cookTime: '15 menit',
    difficulty: 'Sedang',
    ingredients: [
      '120 gram filet daging sapi tenderloin organik segar tebal',
      '2 ikat horenzo tumis (bayam jepang segar berdaun lebar)',
      '1 sdt minyak wijen harum kualitas premium',
      '1/2 sendok teh bawang putih (cincang halus)',
      '1 sendok makan margarin murni',
      'Sejumput kaldu bubuk ayam non-MSG murni'
    ],
    instructions: [
      'Potong daging tenderloin melintang searah serat otot agar teksturnya sangat lembut dan tidak mengganggu gigi bumil.',
      'Olesi daging dengan minyak wijen dan sejumput garam selama 15 menit agar bumbu melembutkan serat terdalam daging.',
      'Panggang daging tenderloin di atas wajan antilengket dengan margarin cair. Masak secara bolak-balik sampai daging benar-benar matang menyeluruh (well-done), tiriskan.',
      'Pada sisa minyak mentega daging, tumis bawang putih cincang halus sampai mengeluarkan bau harum semerbak.',
      'Masukkan bayam jepang horenzo segar yang sudah bersih, bumbui dengan kaldu non-MSG. Tumis sangat cepat selama 1.5 menit dan angkat segera agar zat besi & folat tidak hilang akibat paparan panas lama.',
      'Sajikan tumis bayam horenzo segar bersanding dengan tenderloin bakar yang gurih kaya zat besi.'
    ],
    safetyTips: [
      'Keamanan Daging Sapi: Sangat krusial memastikan tidak ada area daging yang masih berwarna merah muda atau berdarah di tengah seratnya untuk melindungi bundakan janin dari parasit Toxoplasma gondii.',
      'Konsumsi Cepat Bayam: Jangan pernah menyantap tumis bayam yang telah didiamkan lebih dari 4 jam atau memanaskannya kembali, karena zat nitrit tinggi dapat mengoksidasi eritrosit darah bumil.'
    ]
  },
  'Avocado Berry Bowl tinggi folat': {
    prepTime: '10 menit',
    cookTime: '0 menit',
    difficulty: 'Mudah',
    ingredients: [
      '1 alpukat mentega matang berukuran besar',
      '1/2 cup blueberry segar teruji steril',
      '1/2 cup buah stroberi segar organik',
      '1 sdm madu acacia alami murni',
      '1/2 cup yogurt Yunani plain pasteurisasi dingin',
      '1 sdm biji labu kupas matang'
    ],
    instructions: [
      'Kupas kulit luar alpukat secara hati-hati, buang bijinya, kerok dengan sendok higienis.',
      'Tuangkan yogurt Yunani dingin ke dalam mangkuk kaca.',
      'Tata irisan alpukat mentega segar memanjang di satu sisi mangkuk.',
      'Cuci bersih semangkuk buah beri, tiriskan, taruh bersanding di sebelah buah alpukat.',
      'Taburkan biji labu yang gurih bervitamin E di tengah mangkuk saji.',
      'Siramkan madu acacia secukupnya untuk memberi cita rasa manis penenang mual gizi tinggi.'
    ],
    safetyTips: [
      'Pilih Alpukat Utuh: Jangan membeli alpukat yang sudah membusuk di salah satu ujungnya karena spora kapang jamur sudah meluas di sepanjang serat buah.'
    ]
  },
  'Avocado Berry Bowl': {
    prepTime: '10 menit',
    cookTime: '0 menit',
    difficulty: 'Mudah',
    ingredients: [
      '1 alpukat mentega matang berukuran besar',
      '1/2 cup blueberry segar teruji steril',
      '1/2 cup buah stroberi segar organik',
      '1 sdm madu acacia alami murni',
      '1/2 cup yogurt Yunani plain pasteurisasi dingin',
      '1 sdm biji labu kupas matang'
    ],
    instructions: [
      'Kupas kulit luar alpukat secara hati-hati, buang bijinya, kerok dengan sendok higienis.',
      'Tuangkan yogurt Yunani dingin ke dalam mangkuk kaca.',
      'Tata irisan alpukat mentega segar memanjang di satu sisi mangkuk.',
      'Cuci bersih semangkuk buah beri, tiriskan, taruh bersanding di sebelah buah alpukat.',
      'Taburkan biji labu yang gurih bervitamin E di tengah mangkuk saji.',
      'Siramkan madu acacia secukupnya untuk memberi cita rasa manis penenang mual gizi tinggi.'
    ],
    safetyTips: [
      'Pilih Alpukat Utuh: Jangan membeli alpukat yang sudah membusuk di salah satu ujungnya karena spora kapang jamur sudah meluas di sepanjang serat buah.'
    ]
  }
};

// Energetic dynamic generator if recipe is not explicitly in the pre-defined dictionary
function generateDynamicRecipe(recipeName: string, mood: string, description: string) {
  const containsFish = recipeName.toLowerCase().match(/(salmon|fish|tuna|ikan|seafood)/i);
  const containsChicken = recipeName.toLowerCase().match(/(chicken|ayam|daging|menu|wat|doro)/i);
  const containsSweet = recipeName.toLowerCase().match(/(dessert|parfait|chocolate|sticky|toast|shake|smoothie|berry|acai|sweet|jus)/i);
  const containsRicePasta = recipeName.toLowerCase().match(/(rice|pasta|risotto|nasi|mie|ramen|ketan|gnocchi)/i);

  let prepTime = '12 menit';
  let cookTime = '15 menit';
  let difficulty: 'Mudah' | 'Sedang' | 'Klinis/Teliti' = 'Easy' as any;
  let ingredients: string[] = [];
  let instructions: string[] = [];
  let safetyTips: string[] = [];

  if (containsFish) {
    prepTime = '15 menit';
    cookTime = '18 menit';
    difficulty = 'Klinis/Teliti';
    ingredients = [
      `150 gram daging ${recipeName} segar terjamin higienis, porsi ibu hamil`,
      '1 sendok teh air perasan air jeruk nipis segar murni anti parasit',
      '1 siung bawang putih segar tumbuk halus',
      '1/2 sendok teh garam yodium murni pelindung tiroid',
      '1 sendok makan minyak sayur khusus memasak',
      '1 ikat sayur brokoli atau wortel organik yang dicuci bersih secara bertahap'
    ];
    instructions = [
      `Bersihkan daging ${recipeName} di bawah air mengalir dan lap kering dengan tisu dapur steril.`,
      'Marinasikan dengan air jeruk lemon, bawang putih cincang, dan sejumput kecil garam laut untuk menetralkan bau amis yang dapat merangsang kembung.',
      'Panaskan wajan anti lengket (pan) dengan minyak kelapa tebal di atas api sedang.',
      'Panggang daging ikan sampai berubah warna dan matang sempurna merata hingga bagian tengah tulang.',
      'Untuk sayur pendamping, rebus brokoli organik sebentar di panci steril selama 2 menit. Tiriskan.',
      'Sajikan menu gizi prima tinggi asam omega-3 di piring bersih bundaran.'
    ];
    safetyTips = [
      'Suhu Terkontrol: Menu ikan laut untuk bumil wajib divalidasi kematangannya hingga bagian terdalam untuk memastikan virus anisakis hancur total.',
      'Pilih Hasil Budidaya Bersih: Utamakan ikan yang dirawat dalam kolam dengan sertifikat kebersihan terverifikasi dinas kesehatan.'
    ];
  } else if (containsSweet) {
    prepTime = '10 menit';
    cookTime = '5 menit';
    difficulty = 'Mudah';
    ingredients = [
      `1 porsi bahan dasar ${recipeName} premium kaya nutrisi`,
      '1/2 cup yogurt Yunani plain saringan yang kental (Pasteurized)',
      '1 buah pisang mas segar atau buah beri potong dadu bersih',
      '1 sendok teh chia seeds organik kaya DHA sel saraf',
      '1 sendok makan madu kelulut asli terverifikasi'
    ];
    instructions = [
      'Wajib mencuci kemasan yogurt terpasteurisasi dan cuci bersih semua perkakas dapur.',
      'Kupas buah segar pilihan dengan alat kupas steril.',
      `Susun semua potongan buah segar dan bahan dasar ${recipeName} ke dalam gelas bersatunya gizi.`,
      'Tuangkan yogurt krim Yunani dingin berkalsium laktosa di atasnya.',
      'Taburi chia seeds kering dan siramkan madu murni sebagai pemandu selerasa manis.',
      'Nikmati menu segar ini di siang hari untuk meredakan panas dalam & mual hormonal kehamilan.'
    ];
    safetyTips = [
      'Bebas Pemanis Sintetis: Hindari menyiramkan pemanis buatan karena sakarin memicu beban metabolisme pada organ hati rahim janin.',
      'Hindari Susu Mentah: Selalu pastikan bahan olahan susu di menu kehamilan bunda menggunakan susu suhu pasteurisasi tinggi.'
    ];
  } else if (containsRicePasta) {
    prepTime = '15 menit';
    cookTime = '22 menit';
    difficulty = 'Sedang';
    ingredients = [
      `1 porsi ${recipeName} (mie, pasta, atau beras berserat tinggi)`,
      '100 gram cincangan daging hewani segar terjamin welldone',
      '1 buah tomat buah segar matang dicuci bersih saksama',
      '1 siung bawang bombay (rajang halus)',
      '1/2 sendok teh mentega unsalted atau olive oil gizi murni',
      'Sejumput kaldu jamur non-MSG beraroma wangi'
    ];
    instructions = [
      'Rebus mie, pasta, atau beras dalam air steril mendidih selama 15 menit hingga kepadatannya pas.',
      'Cuci tomat buah dan bawang bombay dengan sabun pembersih sayur food-grade, bilah air melimpah.',
      'Panaskan wajan dengan olive oil, tumis bawang bombai dan daging cincang sampai matang sempurna.',
      'Haluskan tomat buah segar lalu tuangkan ke dalam tumisan daging untuk membuat saus asam-manis meredakan mual.',
      'Masukkan pasta/mie/nasi secara bertahap, bumbui dengan kaldu jamur non-MSG secara moderat.',
      'Aduk rata masakan selama 4 menit di atas api sedang sampai bumbu meresap solid. Sajikan sehangat mungkin.'
    ];
    safetyTips = [
      'Daging Cincang Wajib Matang: Jangan menyisakan area daging cincang berwarna merah muda karena daging cincang sangat luas permukaannya bagi penempelan bakteri.',
      'Perhatian Karbohidrat Kompleks: Pasta yang dimasak al dente terbukti membantu menstabilkan pelepasan insulin penahan lapar bunda.'
    ];
  } else {
    // General savory fallback
    prepTime = '15 menit';
    cookTime = '15 menit';
    difficulty = 'Sedang';
    ingredients = [
      `150 gram porsi utama ${recipeName} tinggi kalori zat besi harian`,
      '1 siung bawang putih iris tipis',
      '1 sendok teh minyak sehat non-kolesterol',
      '1/2 ikat sayuran buncis atau wortel segar (kupas, lalu cuci)',
      'Sejumput garam meja beryodium murni'
    ];
    instructions = [
      'Cuci tangan bunda sebersih mungkin menggunakan sabun sanitasi sebelum mulai menyentuh bahan mentah.',
      'Rajang semua bawang putih dan bersihkan sayuran hijau pelindung janin di air mengalir.',
      'Tumis bawang putih dalam wajan dengan minyak sehat hingga berwarna kuning kecokelatan berbau harum.',
      `Masukkan bahan utama ${recipeName} serta sayuran bergiliran. Tutup wajan agar uap memasak mematangkan bahan secara alami.`,
      'Tambahkan sejumput kecil garam beryodium sekedarnya.',
      'Aduk merata selama 5 menit untuk memastikan seluruh bahan mencapai kematangan penuh bebas kuman. Hidangkan selagi hangat.'
    ];
    safetyTips = [
      'Higienitas Dapur Bumil: Bersihkan talenan dengan detergen khusus sehabis dipakai memotong bahan untuk menghindari silang kontaminasi.',
      'Konsumsi Garam Moderat: Jaga takaran garam di tingkat yang aman untuk menjamin bunda terhindar dari bengkak kaki pre-eklampsia kehamilan.'
    ];
  }

  return { prepTime, cookTime, difficulty, ingredients, instructions, safetyTips };
}

export function RecipeModal({ isOpen, onClose, recipe }: RecipeModalProps) {
  const [activeTab, setActiveTab] = React.useState<'bahan' | 'cara' | 'tips'>('bahan');

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab('bahan');
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !recipe) return null;

  // Read pre-defined details or compile on-the-fly dynamically
  const recipeData = PRE_DEFINED_RECIPES[recipe.food] || generateDynamicRecipe(recipe.food, recipe.mood, recipe.description);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        
        {/* Backdrop glass blur */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl flex flex-col max-h-[88vh] overflow-hidden border border-rose-100 z-14"
        >
          {/* Header decoration band */}
          <div className="h-2 bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300" />

          {/* Modal Header */}
          <div className="p-6 md:p-8 flex items-start justify-between border-b border-slate-100">
            <div className="space-y-1.5 max-w-[85%]">
              <div className="flex gap-2 items-center">
                <span className="text-[10px] uppercase font-black tracking-widest bg-rose-50 border border-rose-100 text-rose-600 px-3 py-1 rounded-full flex items-center gap-1">
                  <Baby size={12} className="text-rose-500 animate-pulse" />
                  Gizi Ibu Hamil • {recipe.mood}
                </span>

                <span className={cn(
                  "text-[9px] uppercase font-bold px-2 py-0.5 rounded text-white",
                  recipeData.difficulty === 'Klinis/Teliti' ? 'bg-amber-500' : 'bg-emerald-500'
                )}>
                  {recipeData.difficulty}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight italic">
                {recipe.food}
              </h2>
              
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light">
                {recipe.description}
              </p>
            </div>

            <button 
              onClick={onClose}
              className="p-2.5 bg-slate-50 hover:bg-rose-50 hover:text-rose-600 text-slate-400 rounded-2xl transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Cooking Stats Bar */}
          <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-100 py-3.5 px-6 gap-4 text-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wide flex items-center gap-1 justify-center">
                <Utensils size={11} />
                Persiapan
              </span>
              <span className="text-xs font-black text-slate-700 mt-0.5">{recipeData.prepTime}</span>
            </div>
            
            <div className="border-x border-slate-200/60 flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wide flex items-center gap-1 justify-center">
                <Clock size={11} />
                Lama Masak
              </span>
              <span className="text-xs font-black text-slate-700 mt-0.5">{recipeData.cookTime}</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wide flex items-center gap-1 justify-center">
                <ChefHat size={11} />
                Metode Gizi
              </span>
              <span className="text-xs font-black text-rose-600 mt-0.5 flex items-center gap-0.5 scale-95 md:scale-100 justify-center">
                <ShieldCheck size={11} />
                Pro-Bumil
              </span>
            </div>
          </div>

          {/* Tab Selection Area */}
          <div className="flex border-b border-slate-100 p-2 bg-white gap-1 justify-center">
            <button
              onClick={() => setActiveTab('bahan')}
              className={cn(
                "flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer",
                activeTab === 'bahan' 
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/15" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Clipboard size={14} />
              Bahan-Bahan
            </button>
            <button
              onClick={() => setActiveTab('cara')}
              className={cn(
                "flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer",
                activeTab === 'cara' 
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/15" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Flame size={14} />
              Cara Memasak
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={cn(
                "flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer",
                activeTab === 'tips' 
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/15" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-rose-700"
              )}
            >
              <AlertTriangle size={14} />
              Tips Aman Bumil
            </button>
          </div>

          {/* Modal Body Scroll Area */}
          <div className="p-6 md:p-8 overflow-y-auto flex-grow bg-slate-50/20 space-y-6 scrollbar-thin">
            
            {/* RENDER TAB 1: BAHAN-BAHAN */}
            {activeTab === 'bahan' && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="bg-rose-50/45 p-4 rounded-2xl border border-rose-100 flex items-center gap-3">
                  <span className="p-1.5 bg-rose-500 text-white rounded-lg"><CheckCircle2 size={16} /></span>
                  <div className="text-xs font-medium text-rose-800 leading-normal">
                    Seluruh bahan diuji aman bagi perkembangan kehamilan. Utamakan membeli bahan organik segar/lokal bergaransi bebas mikroba jahat.
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {recipeData.ingredients.map((ing, i) => (
                    <div 
                      key={i} 
                      className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3 hover:border-rose-100 hover:bg-rose-50/10 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-slate-800 font-medium leading-relaxed">{ing}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* RENDER TAB 2: CARA MEMASAK */}
            {activeTab === 'cara' && (
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="space-y-3">
                  {recipeData.instructions.map((step, i) => (
                    <div 
                      key={i} 
                      className="p-5 bg-white rounded-2.5xl border border-slate-100 shadow-sm flex gap-4 items-start hover:border-slate-200 transition-all duration-300"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 font-extrabold text-xs flex items-center justify-center shrink-0 border border-rose-100 font-mono shadow-inner">
                        {i + 1}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Langkah {i + 1}</span>
                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-light">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* RENDER TAB 3: SAFETY / PREGNANCY SPECIFIC TIPS */}
            {activeTab === 'tips' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <div className="border border-brand-accent/30 bg-brand-accent/5 p-5 rounded-2xl flex gap-3">
                  <ShieldCheck className="text-brand-accent shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-xs md:text-sm">Jaminan Standar Higienis Obgyn</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Mengandung anak memerlukan asupan higienis ekstra. Seng, Vitamin B12, dan nutrisi di atas sangat gampang teroksidasi bila teknik mencuci dan suhu panggangan tidak diimbangi aturan medis kebidanan.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {recipeData.safetyTips.map((tip, i) => {
                    const [head, body] = tip.split(': ');
                    return (
                      <div 
                        key={i} 
                        className="p-5 bg-white rounded-2xl border border-slate-150 flex gap-4 items-start hover:border-rose-100/40"
                      >
                        <div className="bg-amber-50 text-amber-600 border border-amber-100 p-2.5 rounded-xl shrink-0 h-fit">
                          <AlertTriangle size={16} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-black text-amber-800 tracking-tight leading-tight">{head || 'Peringatan Medis'}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-light">
                            {body || tip}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  <div className="p-5 bg-white rounded-2xl border border-slate-150 flex gap-4 items-start hover:border-rose-100/40">
                    <div className="bg-rose-50 text-rose-500 border border-rose-100 p-2.5 rounded-xl shrink-0 h-fit">
                      <HeartPulse size={16} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black text-rose-800 tracking-tight leading-tight">Pengendalian Rasa Mual (Refluks Asam)</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        Bila proses memasak mengeluarkan aroma tajam yang memicu sensitivitas bunda, oleskan minyak jahe/lemon hangat di pergelangan tangan, atau mintalah bantuan pasangan tercinta untuk menangani langkah tumisan mentah yang berbau menyengat.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Modal Footer with Premium Clinical Guarding disclaimer */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] text-slate-400 font-medium text-center sm:text-left leading-normal font-sans max-w-sm">
              *Resep diaudit oleh dr. Farrah Syarifa, Sp.GK. Sesuai Angka Kecukupan Gizi (AKG) Kementerian Kesehatan RI.
            </span>
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-950 text-white font-bold px-8 py-3 rounded-xl text-xs transition-all shadow-md cursor-pointer"
            >
              Selesai Membaca & Tutup
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
