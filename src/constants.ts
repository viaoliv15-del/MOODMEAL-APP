import { MoodRecommendation, Testimonial, ServicePackage } from './types';

export const MOOD_RECOMMENDATIONS: MoodRecommendation[] = [
  {
    mood: 'Bersemangat',
    food: 'Quinoa Power Bowl',
    description: 'Kaya akan protein nabati, kale segar, alpukat, dan dressing lemon-tahini yang segar untuk menjaga momentum Anda.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bersemangat',
    food: 'Smoothie Berry Protein',
    description: 'Campuran blueberry, raspberry, dan protein whey yang memberikan ledakan energi instan.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Santai',
    food: 'Creamy Mushroom Risotto',
    description: 'Nasi Arborio yang dimasak perlahan dengan jamur liar, keju parmesan, dan sedikit minyak truffle untuk kenyamanan maksimal.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Santai',
    food: 'Pasta Aglio Olio',
    description: 'Pasta sederhana dengan bawang putih, minyak zaitun kualiatas tinggi, dan taburan cabai kering untuk ketenangan rasa.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Stres',
    food: 'Dark Chocolate & Berry Parfait',
    description: 'Cokelat hitam kaya antioksidan dicampur dengan yogurt Yunani dan blueberry segar untuk menurunkan kadar kortisol secara alami.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Stres',
    food: 'Teh Hijau & Salmon Panggang',
    description: 'Omega-3 dari salmon membantu meredakan kecemasan, dipadukan dengan teh hijau yang menenangkan.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bahagia',
    food: 'Vibrant Poke Bowl',
    description: 'Salmon segar, edamame, salad rumput laut, dan jahe acar di atas nasi bumbu. Perayaan dalam mangkuk!',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bahagia',
    food: 'Pancake Buah Segar',
    description: 'Pancake lembut dengan sirup maple dan potongan stroberi serta pisang untuk memulai hari dengan senyum.',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Lelah',
    food: 'Kari Merah Thailand Pedas',
    description: 'Sentuhan pedas dan bumbu aromatik untuk membangkitkan indra Anda dan memberikan dorongan energi yang lembut.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Lelah',
    food: 'Espresso Avocado Toast',
    description: 'Roti panggang alpukat dengan telur rebus, ditemani secangkir espresso untuk tenaga ekstra.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Petualang',
    food: 'Moroccan Lamb Tagine',
    description: 'Eksplorasi rasa dengan daging domba empuk, aprikot, buncis, dan campuran rempah-rempah Afrika Utara.',
    image: 'https://images.unsplash.com/photo-1541518763669-279f3cfc623a?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Petualang',
    food: 'Sushi Sashimi Platter',
    description: 'Potongan ikan mentah segar dari samudra terdalam, menantang selera Anda dengan wasabi pedas.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Direktur Kreatif',
    content: 'MoodMeal mengubah cara saya memandang waktu makan siang. Saat saya stres, aplikasi ini tahu persis kenyamanan apa yang saya butuhkan tanpa rasa bersalah.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Software Engineer',
    content: 'Rekomendasi "Bersemangat" adalah bahan bakar saya untuk sesi coding yang lama. Layanan branding untuk kafe saya juga sangat luar biasa!',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Pelatih Fitnes',
    content: 'Terpercaya, segar, dan waktunya sangat pas. Layanan posting media sosial mereka telah meningkatkan komunitas saya sebesar 40% hanya dalam dua bulan.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Paket Personal',
    price: 'Rp 299rb',
    period: 'bulan',
    description: 'Cocok untuk individu yang ingin mengeksplorasi nutrisi berdasarkan suasana hati.',
    features: [
      'Scan Suasana Hati Tak Terbatas',
      'Perencanaan Makan AI Harian',
      'Akses Perpustakaan Resep',
      'Pelacakan Gizi Dasar'
    ]
  },
  {
    id: 'pro',
    name: 'Studio Kreatif',
    price: 'Rp 799rb',
    period: 'bulan',
    recommended: true,
    description: 'Rencana terpopuler kami untuk bisnis dan pecinta makanan.',
    features: [
      'Semua di Paket Personal',
      'Integrasi Media Sosial (IG, FB, X)',
      'Konsultasi Branding Kustom',
      'Layanan Pelanggan Prioritas',
      'Laporan Analistik Mingguan'
    ]
  },
  {
    id: 'enterprise',
    name: 'Pembangun Kerajaan',
    price: 'Rp 1.9jt',
    period: 'bulan',
    description: 'Solusi skala penuh untuk restoran dan merek besar.',
    features: [
      'Semua di Studio Kreatif',
      'Posting Multi-Platform (YT, TikTok)',
      'Manajer Merek Khusus',
      'Akses API Lanjutan',
      'Dukungan VIP 24/7'
    ]
  }
];
