import { MoodRecommendation, Testimonial, ServicePackage } from './types';

export const MOOD_RECOMMENDATIONS: MoodRecommendation[] = [
  // BERSEMANGAT (ENERGETIC)
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
    mood: 'Bersemangat',
    food: 'Matcha Zen Energy Bowl',
    description: 'Bubuk matcha premium dipadukan dengan chia seeds, kacang almond, dan taburan goji berry untuk fokus maksimal.',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bersemangat',
    food: 'Ayam Goreng Korea Pedas Mandu',
    description: 'Ayam krispi dengan saus gochujang yang membakar semangat, disajikan dengan mandu sayuran.',
    image: 'https://images.unsplash.com/photo-1623244422854-ea3888ad8139?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bersemangat',
    food: 'Brazilian Açaí Bowl',
    description: 'Açaí beku dari hutan Amazon dengan topping pisang, granola, dan madu organik untuk energi liar.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bersemangat',
    food: 'Mexican Chilaquiles',
    description: 'Tortilla jagung renyah dengan saus verde pedas, telur mata sapi, dan keju cotija untuk memulai hari dengan api.',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bersemangat',
    food: 'Turkish Menemen',
    description: 'Orak-arik telur gaya Turki dengan tomat, cabai hijau, dan rempah-rempah yang menggugah indra.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bersemangat',
    food: 'Ethiopian Doro Wat',
    description: 'Semur ayam pedas dengan bumbu berbere kompleks yang memberikan kehangatan dan semangat tiada tara.',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=800'
  },

  // SANTAI (RELAXED)
  {
    mood: 'Santai',
    food: 'Creamy Mushroom Risotto',
    description: 'Nasi Arborio yang dimasak perlahan dengan jamur liar, keju parmesan, dan sedikit minyak truffle untuk kenyamanan maksimal.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Santai',
    food: 'Pasta Aglio Olio',
    description: 'Pasta sederhana dengan bawang putih, minyak zaitun kualitas tinggi, dan taburan cabai kering untuk ketenangan rasa.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Santai',
    food: 'Lavender Honey Toast',
    description: 'Roti panggang brioche lembut dengan siraman madu aroma lavender dan kelopak bunga mawar yang menenangkan.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Santai',
    food: 'Thai Mango Sticky Rice',
    description: 'Ketan manis yang hangat disajikan dengan mangga matang yang sangat manis dan saus santan gurih.',
    image: 'https://images.unsplash.com/photo-1621319081732-c675f6758312?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Santai',
    food: 'French Ratatouille',
    description: 'Rebusan sayuran Provence yang lembut-lembut, penuh dengan aroma herbal pedesaan Prancis yang damai.',
    image: 'https://images.unsplash.com/photo-1572453800999-e8d2d12ba74b?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Santai',
    food: 'Gnocchi Sorrentina',
    description: 'Gnocchi kentang lembut dengan saus tomat segar, mozzarella meleleh, dan kemangi yang menenangkan jiwa.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Santai',
    food: 'Greek Moussaka',
    description: 'Lapisan terong, daging cincang, dan saus béchamel panggang yang memberikan kehangatan Mediterania.',
    image: 'https://images.unsplash.com/photo-1544144426-ca66f406606f?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Santai',
    food: 'Japanese Tonkotsu Ramen',
    description: 'Kaldu tulang babi yang kental dan gurih dengan mie lembut untuk momen relaksasi yang hakiki.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800'
  },

  // STRES (STRESSED)
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
    mood: 'Stres',
    food: 'Oatmeal Almond Butter',
    description: 'Oat hangat dengan mentega almond yang kaya magnesium untuk membantu saraf Anda menjadi lebih rileks.',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Stres',
    food: 'Salad Bayam & Alpukat',
    description: 'Bayam segar dan alpukat lembut yang kaya akan nutrisi pereda stres dan lezat untuk dikunyah.',
    image: 'https://images.unsplash.com/photo-1612450841264-51ece82126e0?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Stres',
    food: 'Swiss Cheese Fondue',
    description: 'Lelehan keju Swiss yang hangat dan lembut, aktivitas mencelupkan roti yang terapeutik untuk melepas penat.',
    image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Stres',
    food: 'Classic Fish and Chips',
    description: 'Ikan krispi dan kentang goreng renyah gaya Inggris untuk kenyamanan maksimal di saat-saat sulit.',
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Stres',
    food: 'Indian Butter Chicken',
    description: 'Ayam dalam saus tomat krim yang kaya rempah, memberikan pelukan hangat dari dalam tubuh.',
    image: 'https://images.unsplash.com/photo-1603894584214-41d167c6999a?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Stres',
    food: 'Southern Fried Chicken & Waffles',
    description: 'Perpaduan manis dan gurih ala Amerika Selatan untuk mengalihkan pikiran dari tekanan pekerjaan.',
    image: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&q=80&w=800'
  },

  // BAHAGIA (HAPPY)
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
    mood: 'Bahagia',
    food: 'Rainbow Veggie Pizza',
    description: 'Pizza tipis krispi dengan berbagai macam sayuran warna-warni yang mencerminkan keceriaan hati Anda.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bahagia',
    food: 'Strawberry Cheesecake Parfait',
    description: 'Lapisan lembut krim keju dengan remahan biskuit dan buah stroberi segar yang sangat manis.',
    image: 'https://images.unsplash.com/photo-1593172813137-ec5c0d5885c3?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bahagia',
    food: 'Spanish Paella Valenciana',
    description: 'Nasi kuning dengan seafood melimpah dan kunyit, membawa suasana pesta pantai Spanyol ke meja Anda.',
    image: 'https://images.unsplash.com/photo-1515443961218-1523678885b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bahagia',
    food: 'Portuguese Pastel de Nata',
    description: 'Tart telur krispi dengan karamelisasi di atasnya, kebahagiaan kecil dalam setiap gigitan.',
    image: 'https://images.unsplash.com/photo-1618237937965-0bc49877663a?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bahagia',
    food: 'Belgian Liege Waffles',
    description: 'Waffle krispi dengan gula mutiara yang terkaramelisasi untuk ledakan rasa manis yang membahagiakan.',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Bahagia',
    food: 'Mexican Tacos Al Pastor',
    description: 'Tacos dengan daging babi bumbu achiote dan nanas untuk perpaduan rasa yang meriah di mulut.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800'
  },

  // LELAH (TIRED)
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
    mood: 'Lelah',
    food: 'Steak Daging Sapi Protein Tinggi',
    description: 'Daging sapi pilihan yang kaya akan zat besi untuk mengatasi rasa lelah dan mengembalikan vitalitas tubuh.',
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Lelah',
    food: 'Sup Ayam Ginseng',
    description: 'Sup ayam hangat dengan ekstrak ginseng asli untuk memulihkan stamina Anda yang terkuras.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Lelah',
    food: 'Vietnamese Pho Bo',
    description: 'Sup mie sapi yang bersih dan bernutrisi, memberikan hidrasi dan pemulihan instan bagi tubuh lelah.',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Lelah',
    food: 'Chinese Dim Sum Platter',
    description: 'Berbagai macam cemilan kukus yang ringan namun memberikan energi bertahap untuk tubuh.',
    image: 'https://images.unsplash.com/photo-1563245339-23f3fc3c63c2?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Lelah',
    food: 'Indonesian Sop Buntut',
    description: 'Sup ekor sapi yang kaya kolagen dan mineral, memberikan kekuatan ekstra setelah hari yang panjang.',
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Lelah',
    food: 'Hungarian Beef Goulash',
    description: 'Rebusan daging kental dengan paprika Budapest untuk memanaskan tubuh dan memulihkan vitalitas.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db0f?auto=format&fit=crop&q=80&w=800'
  },

  // PETUALANG (ADVENTUROUS)
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
  },
  {
    mood: 'Petualang',
    food: 'Exotic Dragon Fruit Bowl',
    description: 'Buah naga merah yang eksotis dipadukan dengan granola, biji labu, dan potongan buah tropis langka.',
    image: 'https://images.unsplash.com/photo-1590080875515-849ee9bc36c0?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Petualang',
    food: 'Peruvian Ceviche',
    description: 'Ikan laut segar yang dimasak dengan rendaman jeruk nipis, cabai, dan bawang merah dalam gaya Peru yang autentik.',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Petualang',
    food: 'Korean Bibimbap',
    description: 'Nasi campur warna-warni dalam mangkuk batu panas, petualangan tekstur dan rasa di setiap adukan.',
    image: 'https://images.unsplash.com/photo-1541728472741-03e45a58cf88?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Petualang',
    food: 'Lebanese Mezze Platter',
    description: 'Perjalanan rasa Timur Tengah dengan hummus, falafel, tabbouleh, dan roti pita hangat.',
    image: 'https://images.unsplash.com/photo-1541014741259-df529411bc0a?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Petualang',
    food: 'Jamaican Jerk Chicken',
    description: 'Ayam panggang dengan bumbu pedas Karibia yang membakar dan aroma kayu pimento yang unik.',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800'
  },
  {
    mood: 'Petualang',
    food: 'Russian Beef Stroganoff',
    description: 'Irisan daging sapi dalam saus krim asam yang mewah di atas mie telur, cita rasa klasik dari Eurasia.',
    image: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&q=80&w=800'
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
