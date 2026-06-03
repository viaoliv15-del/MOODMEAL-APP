import { MoodRecommendation, Testimonial, ServicePackage } from './types';

export const MOOD_RECOMMENDATIONS: MoodRecommendation[] = [
  // BERSEMANGAT (ENERGETIC)
  {
    mood: 'Bersemangat',
    food: 'Quinoa Power Bowl',
    description: 'Kaya akan protein nabati, kale organik, alpukat mentega, dan dressing lemon-tahini segar yang kaya akan asam folat untuk menjaga energi harian bunda.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '35% AKG',
      zatBesi: '25% AKG',
      kalsium: '8% AKG',
      protein: '12g',
      manfaatHamil: 'Serat kale mencegah sembelit kehamilan, lemak sehat alpukat menyerap vitamin esensial, dan folat tinggi mendukung pembentukan tabung saraf janin.'
    }
  },
  {
    mood: 'Bersemangat',
    food: 'Smoothie Berry Protein',
    description: 'Campuran blueberry organik, raspberry, dan protein isolat halal yang bebas zat aditif untuk memberikan ledakan stamina alami.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '15% AKG',
      zatBesi: '8% AKG',
      kalsium: '20% AKG',
      protein: '22g',
      manfaatHamil: 'Asupan protein whey berkualitas tinggi membantu percepatan sel-sel janin dan memelihara kebugaran rahim ibu hamil.'
    }
  },
  {
    mood: 'Bersemangat',
    food: 'Matcha Zen Energy Bowl',
    description: 'Bubuk matcha organik rendah kafein dipadukan dengan biji chia, almond panggang, dan taburan goji berry matang sebagai antioksidan kognitif.',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '10% AKG',
      zatBesi: '15% AKG',
      kalsium: '12% AKG',
      protein: '9g',
      omega3: '0.8g',
      manfaatHamil: 'Asam lemak esensial (Omega-3) murni dari chia seeds merangsang pembelahan awal sel-sel retina dan pendengaran janin.'
    }
  },
  {
    mood: 'Bersemangat',
    food: 'Ayam Panggang Gochujang & Mandu Kukus',
    description: 'Daging dada ayam panggang rendah lemak bumbu Gochujang ringan, disajikan dengan mandu sayuran kukus steril untuk penawar mual.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '8% AKG',
      zatBesi: '12% AKG',
      kalsium: '5% AKG',
      protein: '28g',
      manfaatHamil: 'Ayam panggang tanpa minyak jenuh menyediakan protein padat untuk sintesis sel rahim serta melegakan lambung dengan bumbu hangat.'
    }
  },
  {
    mood: 'Bersemangat',
    food: 'Brazilian Açaí Bowl',
    description: 'Açaí berry murni beku tinggi antioksidan dengan topping pisang segar, granola gandum utuh, dan madu acacia terpasteurisasi.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '10% AKG',
      kalsium: '6% AKG',
      protein: '6g',
      manfaatHamil: 'Polifenol aktif di dalam aci berry membangun ketahanan imun plasenta ibu hamil dari serangan infeksi musiman.'
    }
  },
  {
    mood: 'Bersemangat',
    food: 'Whole Wheat Chilaquiles & Welldone Egg',
    description: 'Keripik tortilla gandum panggang dengan saus tomat hijau segar, telur matang sempurna, dan keju laktosa rendah.',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '20% AKG',
      zatBesi: '14% AKG',
      kalsium: '15% AKG',
      protein: '14g',
      manfaatHamil: 'Telur matang menyuplai kolin alami dalam kadar ideal untuk merangsang sirkuit memori janin sejak trimester pertama.'
    }
  },
  {
    mood: 'Bersemangat',
    food: 'Turkish Menemen',
    description: 'Orak-arik telur organik matang dengan tomat kukus lumat, paprika hijau steril, dan minyak zaitun murni pembersih arteri.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '25% AKG',
      zatBesi: '18% AKG',
      kalsium: '10% AKG',
      protein: '13g',
      manfaatHamil: 'Likopen dari tomat yang dimasak menenangkan peradangan vaskular plasenta dan menormalkan tekanan darah ibu.'
    }
  },
  {
    mood: 'Bersemangat',
    food: 'Ethiopian Doro Wat (Stew Ayam Kampung)',
    description: 'Semur ayam kampung empuk rebusan lambat kaya rempah berbere yang meningkatkan metabolisme pencernaan bumil.',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '10% AKG',
      zatBesi: '30% AKG',
      kalsium: '8% AKG',
      protein: '26g',
      manfaatHamil: 'Zat besi hewani dari ayam kampung sangat cepat diserap usus halus demi mencegah pembengkakan otot panggul yang lelah.'
    }
  },

  // SANTAI (RELAXED)
  {
    mood: 'Santai',
    food: 'Brown Rice Creamy Mushroom Risotto',
    description: 'Nasi cokelat kaya serat dimasak perlahan dengan jamur tiram organik, sup sayur buatan rumah, dan parmesan panggang yang gurih santun.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '15% AKG',
      zatBesi: '12% AKG',
      kalsium: '18% AKG',
      protein: '10g',
      manfaatHamil: 'Beras cokelat berglikemik rendah mengelola pelepasan gula darah seimbang, mencegah risiko diabetes gestasional.'
    }
  },
  {
    mood: 'Santai',
    food: 'Whole Wheat Pasta Aglio Olio & Udang Panggang',
    description: 'Pasta gandum utuh ringan dengan kelimpahan bawang putih, minyak zaitun extra virgin, dan topping udang laut matang tinggi seng.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '10% AKG',
      kalsium: '4% AKG',
      protein: '18g',
      manfaatHamil: 'Kandungan selenium dan seng dari udang laut terpasteurisasi mengoptimalkan kekebalan seluler janin.'
    }
  },
  {
    mood: 'Santai',
    food: 'Sourdough Lavender Honey Toast',
    description: 'Roti fermentasi sourdough murni dengan olesan madu acacia aroma lavender yang menenangkan denyut nadi asam lambung.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '8% AKG',
      zatBesi: '6% AKG',
      kalsium: '10% AKG',
      protein: '7g',
      manfaatHamil: 'Asam alami sourdough difermentasi ramah bagi lambung bumil yang sensitif, secara efektif mencegah naiknya kadar asam.'
    }
  },
  {
    mood: 'Santai',
    food: 'Oat Coconut Mango Sticky Rice',
    description: 'Bubur oat manis berserat tinggi dengan lumatan kelapa muda dan mangga arumanis segar pengganti ketan putih.',
    image: 'https://images.unsplash.com/photo-1601050633647-81a35d37c35a?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '30% AKG',
      zatBesi: '5% AKG',
      kalsium: '6% AKG',
      protein: '4g',
      manfaatHamil: 'Mangga kaya vitamin A serta beta karoten untuk mendukung jaringan visual mata bayi, dan oat melancarkan usus.'
    }
  },
  {
    mood: 'Santai',
    food: 'French Ratatouille',
    description: 'Rebusan sayur labu kuning, terong ungu, dan paprika matang Provence kaya vitamin C alami penangkal radikal bebas.',
    image: 'https://images.unsplash.com/photo-1615485499267-be388b139fcb?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '22% AKG',
      zatBesi: '14% AKG',
      kalsium: '8% AKG',
      protein: '5g',
      manfaatHamil: 'Rebusan sayuran berair lunak mendukung hidrasi seimbang dan memasok serat larut untuk mencegah hemoroid natal.'
    }
  },
  {
    mood: 'Santai',
    food: 'Sweet Potato Gnocchi Sorrentina',
    description: 'Gnocchi dari labu manis / ubi jalar ungu hangat berbalut saus tomat segar dan lumeran keju mozzarella organik.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '18% AKG',
      zatBesi: '12% AKG',
      kalsium: '25% AKG',
      protein: '11g',
      manfaatHamil: 'Ubi jalar merupakan asupan karbohidrat kompleks alami berkadar mikronutrisi kalium tinggi pereda pusing kepala.'
    }
  },
  {
    mood: 'Santai',
    food: 'Low-Fat Greek Moussaka',
    description: 'Pangganan terong ungu berlapis cincangan dada kalkun / ayam organik rendah kalori dengan siraman saus béchamel susu skim.',
    image: 'https://images.unsplash.com/photo-1599321955726-e048429384bb?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '20% AKG',
      zatBesi: '24% AKG',
      kalsium: '20% AKG',
      protein: '22g',
      manfaatHamil: 'Protein bebas kalori jenuh menyuplai asam amino arginin guna merawat elastisitas dinding pembuluh jembatan plasenta.'
    }
  },
  {
    mood: 'Santai',
    food: 'Sup Ramen Kaldu Tulang Sapi Organik',
    description: 'Sajian mie sehat dengan siraman kaldu tulang sapi (beef bone broth) bebas MSG dan taburan telur rebus matang.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '10% AKG',
      zatBesi: '20% AKG',
      kalsium: '12% AKG',
      protein: '25g',
      manfaatHamil: 'Kaldu tulang sapi murni memulihkan kolagen pelindung kelenturan sendi panggul ibu hamil yang menahan berat rahim.'
    }
  },

  // STRES (STRESSED)
  {
    mood: 'Stres',
    food: 'Dark Chocolate & Berry Parfait',
    description: 'Cokelat hitam organik 75% peredam kortisol berlapis yogurt Yunani terpasteurisasi dan blueberry pembersih toksin.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '15% AKG',
      zatBesi: '18% AKG',
      kalsium: '22% AKG',
      protein: '14g',
      manfaatHamil: 'Yogurt penuh probiotik menjaga keseimbangan bakteri intim bumil, magnesium cokelat murni mengistirahatkan ketegangan saraf.'
    }
  },
  {
    mood: 'Stres',
    food: 'Teh Chamomile & Salmon Panggang',
    description: 'Teh chamomile bebas kafein penenang insomnia bersanding filet salmon kaya omega-3 panggang welldone.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '8% AKG',
      zatBesi: '16% AKG',
      kalsium: '10% AKG',
      protein: '26g',
      omega3: '2.5g',
      manfaatHamil: 'Limpahan DHA-Omega 3 tinggi pada salmon sangat mutlak diperlukan bagi penyusunan struktur miliaran sel kognitif otak anak.'
    }
  },
  {
    mood: 'Stres',
    food: 'Oatmeal Almond Butter',
    description: 'Sereal gandum oats hangat dengan lumatan mentega kacang almond murni kaya magnesium pelunak ketegangan otot panggul.',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '15% AKG',
      zatBesi: '20% AKG',
      kalsium: '14% AKG',
      protein: '11g',
      manfaatHamil: 'Magnesium murni merilekskan otot tegang, menekan kecemasan hormon kehamilan, dan memelihara kualitas tidur malam.'
    }
  },
  {
    mood: 'Stres',
    food: 'Salad Bayam & Alpukat',
    description: 'Bayam segar hidroponik tiga kali cuci bersanding alpukat mentega, buah kiwi penyerap zat besi, dan biji wijen kalsium.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '45% AKG',
      zatBesi: '25% AKG',
      kalsium: '12% AKG',
      protein: '5g',
      manfaatHamil: 'Kombinasi folat sayur hijau terdahsyat demi proteksi total janin dari risiko cacat bumbung saraf (spina bifida).'
    }
  },
  {
    mood: 'Stres',
    food: 'Sup Labu Parang Panggang',
    description: 'Labu kuning parang organik matang dihaluskan menjadi sup hangat nan lembut bersanding roti gandum kering tinggi serat.',
    image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '10% AKG',
      zatBesi: '12% AKG',
      kalsium: '12% AKG',
      protein: '8g',
      manfaatHamil: 'Serat pektin labu kuning mengondisikan kestabilan mukosa lambung dari asam lambung naik yang dipicu oleh hormon progesteron.'
    }
  },
  {
    mood: 'Stres',
    food: 'Baked Salmon & Sweet Potato Fries',
    description: 'Ikan salmon segar dan stik ubi jalar manis dipanggang tanpa minyak jenuh untuk menjaga pembuluh arteri plasenta.',
    image: 'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '15% AKG',
      kalsium: '10% AKG',
      protein: '24g',
      omega3: '1.9g',
      manfaatHamil: 'Ubi jalar kaya beta karoten diproses bebas lemak trans guna memasok energi konstan bagi kontraksi sel sehat rahim.'
    }
  },
  {
    mood: 'Stres',
    food: 'Light Butter Chicken & Quinoa',
    description: 'Sajian ayam fillet rendah lemak dimasak bumbu tomat krim susu skim encer bersanding quinoa organik lembut kaya zat besi.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '22% AKG',
      kalsium: '10% AKG',
      protein: '27g',
      manfaatHamil: 'Asam amino murni dari dada ayam kampung meregenerasi sel-sel plasenta, dan rempah kunyit menenangkan emosi kecemasan.'
    }
  },
  {
    mood: 'Stres',
    food: 'Oat-Crusted Baked Chicken & Whole Wheat Waffles',
    description: 'Fillet ayam berlapis remahan oat panggang renyah rendah kolesterol disanding waffle gandum murni dengan topping madu kelulut.',
    image: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '14% AKG',
      zatBesi: '18% AKG',
      kalsium: '10% AKG',
      protein: '25g',
      manfaatHamil: 'Meringankan beban kelelahan fisik bumil secara signifikan berkat pasokan vitamin B kompleks murni dari gandum oat.'
    }
  },

  // BAHAGIA (HAPPY)
  {
    mood: 'Bahagia',
    food: 'Warm Cooked Salmon Poke Bowl',
    description: 'Salmon panggang matang renyah, edamame kupas steril, lobak parut, alpukat, dan wijen di atas nasi organik pulen hangat.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '30% AKG',
      zatBesi: '20% AKG',
      kalsium: '10% AKG',
      protein: '25g',
      omega3: '2.0g',
      manfaatHamil: 'Kombinasi megah protein kacang edamame (asam folat tinggi) dan omega-3 salmon mengoptimalkan kelistrikan otak fetus janin.'
    }
  },
  {
    mood: 'Bahagia',
    food: 'Oat Pancake Buah Segar',
    description: 'Pancake tipis dari adonan gandum oat murni disiram sirup mapel manis alami bersanding stroberi manis dan pisang penenang lambung.',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '20% AKG',
      zatBesi: '8% AKG',
      kalsium: '10% AKG',
      protein: '6g',
      manfaatHamil: 'Kandungan Vitamin C super tinggi dari buah beri merangsang seratus persen penyerapan zat besi dari santapan harian ibu.'
    }
  },
  {
    mood: 'Bahagia',
    food: 'Cauliflower Crust Rainbow Veggie Pizza',
    description: 'Pizza renyah berbasis parutan kembang kol bebas gluten dengan lumatan saus tomat alami, keju parmesan, asparagus, dan paprika pelindung janin.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '25% AKG',
      zatBesi: '15% AKG',
      kalsium: '15% AKG',
      protein: '12g',
      manfaatHamil: 'Adonan kembang kol kaya fitonutrien indola melindungi struktur hati bumil dan membersihkan jalur pencernaan.'
    }
  },
  {
    mood: 'Bahagia',
    food: 'Low-Sugar Strawberry Greek Yogurt Parfait',
    description: 'Yogurt Yunani terpasteurisasi kental rendah gula berlapis remahan biskuit oat berserat tinggi dan stroberi organik.',
    image: 'https://images.unsplash.com/photo-1593172813137-ec5c0d5885c3?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '5% AKG',
      kalsium: '18% AKG',
      protein: '8g',
      manfaatHamil: 'Menstabilkan produksi hormon dopamin penenang suasana hati lewat sumbangan kalsium susu pekat bebas lemak jenuh luar.'
    }
  },
  {
    mood: 'Bahagia',
    food: 'Brown Rice Seafood Paella (Well-done)',
    description: 'Nasi cokelat kuning dimasak rempah kunyit premium dengan topping kerang kupas matang, cumi steril, dan kepiting matang sempurna penyuplai yodium.',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '15% AKG',
      zatBesi: '22% AKG',
      kalsium: '14% AKG',
      protein: '22g',
      manfaatHamil: 'Seafood matang tinggi yodium mencegah gangguan kretinisme (pertumbuhan terhambat) pada raga si kecil dalam kandungan.'
    }
  },
  {
    mood: 'Bahagia',
    food: 'Baked Egg Custard Pudding dengan Biji Chia',
    description: 'Puding telur kukus panggang berbahan dasar kuning telur kaya omega-3, susu almond, dan taburan biji chia anti sembelit.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '8% AKG',
      zatBesi: '10% AKG',
      kalsium: '15% AKG',
      protein: '8g',
      manfaatHamil: 'Lutein murni dari kuning telur mendukung perkembangan sistem saraf saraf visual pada kornea mata bayi sejak awal kehamilan.'
    }
  },
  {
    mood: 'Bahagia',
    food: 'Oat & Banana Liege Waffle Madu Alami',
    description: 'Waffle sehat dari tepung gandum oat cokelat dipanggang harum dengan pisang lumat, disajikan dengan siraman madu acacia murni steril.',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '8% AKG',
      zatBesi: '10% AKG',
      kalsium: '10% AKG',
      protein: '6g',
      manfaatHamil: 'Pisang matang menyuplai Vitamin B6 bebas asam guna merawat lambung dari pemicu asam mual pagi hari (morning sickness).'
    }
  },
  {
    mood: 'Bahagia',
    food: 'Soft Corn Tacos Daging Sapi & Salsa Nanas',
    description: 'Tortilla jagung bebas pengawet dengan tumisan cincangan daging tenderloin matang sempurna disanding cacahan nanas matang pembasmi mual.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '14% AKG',
      zatBesi: '18% AKG',
      kalsium: '10% AKG',
      protein: '20g',
      manfaatHamil: 'Nanas matang terkontrol menyajikan enzim bromelain kadar aman penyembuh begah sembelit pencernaan rahim.'
    }
  },

  // LELAH (TIRED)
  {
    mood: 'Lelah',
    food: 'Kari Merah Udang & Tahu Thailand (Steril)',
    description: 'Kari merah encer rendah lemak dengan topping udang steril dikupas bersih dan tahu protein tinggi, membangkitkan stamina tubuh bumil.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '20% AKG',
      kalsium: '12% AKG',
      protein: '24g',
      manfaatHamil: 'Tahu kaya protein nabati rendah kolesterol menopang asupan kalsium dalam proses percepatan pembelahan raga bayi.'
    }
  },
  {
    mood: 'Lelah',
    food: 'Decaf Matcha & Seeded Avocado Toast',
    description: 'Roti panggang gandu hitam berbalut alpukat mentega, taburan biji rami (flaxseed), dan pendamping decaf matcha bebas kafein pemicu asam lambung.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '30% AKG',
      zatBesi: '14% AKG',
      kalsium: '10% AKG',
      protein: '11g',
      manfaatHamil: 'Decaf matcha bebas kafein aman diminum kapan saja tanpa menghalangi kelancaran usus dlm menyerap kalsium makanan.'
    }
  },
  {
    mood: 'Lelah',
    food: 'Grass-Fed Beef Tenderloin Steak (Well-Done)',
    description: 'Daging sapi premium rendah lemak dipanggang matang merata tanpa bagian berdarah, disajikan bersama tumbukan kentang brokoli tinggi zat besi.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '15% AKG',
      zatBesi: '45% AKG',
      kalsium: '6% AKG',
      protein: '35g',
      manfaatHamil: 'Konsentrasi zat besi heme tertinggi yang luar biasa responsif memulihkan cadangan hemoglobin darah ibu untuk stamina melahirkan.'
    }
  },
  {
    mood: 'Lelah',
    food: 'Sup Ayam Kampung Ginseng & Jahe Merah',
    description: 'Sup kaldu ayam kampung bebas lemak beraroma ginseng ringan dan jahe merah yang manjur menenangkan batuk pilek prenatal.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '20% AKG',
      kalsium: '12% AKG',
      protein: '28g',
      manfaatHamil: 'Kaldu ayam kampung menghidrasi ginjal secara seimbang, serta jahe merah menghalau hiperesmosis muntah asam perut.'
    }
  },
  {
    mood: 'Lelah',
    food: 'Traditional Pho Sapi Matang Sempurna',
    description: 'Sup mie beras khas Vietnam jernih anti kental dengan irisan daging tenderloin ranum welldone, tauge steril, dan kemangi organik harum.',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '18% AKG',
      zatBesi: '25% AKG',
      kalsium: '8% AKG',
      protein: '24g',
      manfaatHamil: 'Star anise dan kapulaga dalam pho adalah antiseptik pencernaan pencegah infeksi virus kuman patogen usus bumil.'
    }
  },
  {
    mood: 'Lelah',
    food: 'Steam Dim Sum Platter Organik',
    description: 'Sajian kudapan siomai udang organik steril, hakau wortel, dan lumpia kulit tahu kukus rendah lemak trans.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '10% AKG',
      zatBesi: '12% AKG',
      kalsium: '12% AKG',
      protein: '18g',
      manfaatHamil: 'Dimsak tanpa digoreng menjaga keaslian nutrisi laut serta meringankan beban metabolisme hati yang tertekan hormon kehamilan.'
    }
  },
  {
    mood: 'Lelah',
    food: 'Sop Buntut Sapi Premium Rendah Lemak',
    description: 'Sop ekor sapi premium saringan bersih lemak bumbu rempah pala dan cengkeh harum, wortel kalsium, dan daun seledri segar.',
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '35% AKG',
      kalsium: '15% AKG',
      protein: '32g',
      manfaatHamil: 'Ekor sapi kaya jaminan kolagen cair pembangun kelenturan ligamen sendi rahim agar lancar dalam persalinan.'
    }
  },
  {
    mood: 'Lelah',
    food: 'Beef & Paprika Goulash Kaya Zat Besi',
    description: 'Rebusan daging sapi empuk kental dengan paprika merah matang kaya Vitamin C tinggi yang memaksimalkan pembentukan sel hemoglobin darah.',
    image: 'https://images.unsplash.com/photo-1534939561126-755ecf1b8f9c?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '15% AKG',
      zatBesi: '40% AKG',
      kalsium: '8% AKG',
      protein: '34g',
      manfaatHamil: 'Tinggi vitamin B12 dan asam amino esensial guna memelihara perkembangan sistem saraf internal tulang belakang janin.'
    }
  },

  // PETUALANG (ADVENTUROUS)
  {
    mood: 'Petualang',
    food: 'Slow-Cooked Moroccan Lamb Tagine (Well-Done)',
    description: 'Eksplorasi cita rasa tinggi dengan daging domba manis empuk, aprikot matang kaya kalium, buncis segar, dan taburan kacang pinus steril.',
    image: 'https://images.unsplash.com/photo-1541742425281-c1d3fc8aa964?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '25% AKG',
      zatBesi: '35% AKG',
      kalsium: '12% AKG',
      protein: '30g',
      manfaatHamil: 'Kacang arab buncis menyodorkan Asam Folat masif, sedangkan aprikot kering meredam tegang kram otot kaki bumil.'
    }
  },
  {
    mood: 'Petualang',
    food: 'Baked Salmon & Avocado Maki Roll',
    description: 'Sushi gulung maki dengan isian salmon matang panggang gurih, alpukat mentega, dan taburan biji wijen kalsium tinggi bebas bakteri raw.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=85&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '15% AKG',
      kalsium: '10% AKG',
      protein: '22g',
      omega3: '1.8g',
      manfaatHamil: '100% Bebas dari bahaya cacing parasit laut berkat salmon yang dimatangkan sempurna demi keamanan janin.'
    }
  },
  {
    mood: 'Petualang',
    food: 'Exotic Dragon Fruit Bowl',
    description: 'Sajian buah naga merah eksotis bersanding buah naga kuning madu, siraman kelapa parut panggang kering steril, dan madu acacia harian.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '18% AKG',
      zatBesi: '12% AKG',
      kalsium: '8% AKG',
      protein: '5g',
      manfaatHamil: 'Buah naga berserat tinggi melonggarkan sembelit kolon, kandungan betasianinnya menopang daya kerja ginjal bunda.'
    }
  },
  {
    mood: 'Petualang',
    food: 'Warm-Cured Citrus Snapper (Ceviche Matang Organik)',
    description: 'Sajian ikan kakap laut segar dimasak matang penuh dengan rendaman perasan air jeruk nipis panas dan tumis jahe wangi murni.',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '12% AKG',
      zatBesi: '15% AKG',
      kalsium: '10% AKG',
      protein: '24g',
      omega3: '1.2g',
      manfaatHamil: 'Diberi proses pematangan panas tradisional untuk membunuh tuntas spora bakteri listeria laut penyerang janin.'
    }
  },
  {
    mood: 'Petualang',
    food: 'Organic Beef & Spinach Bibimbap with Well-Done Egg',
    description: 'Nasi campur ala Korea dengan isian bayam folat, wortel vitamin A, toge steril kukus, daging sapi tenderloin matang, dan telur mata sapi matang penuh.',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '35% AKG',
      zatBesi: '28% AKG',
      kalsium: '14% AKG',
      protein: '20g',
      manfaatHamil: 'Satu hidangan bento super komplit gizi yang menyumbangkan mineral seimbang bagi tumbuh kembang sel darah bayi.'
    }
  },
  {
    mood: 'Petualang',
    food: 'Lebanese Mezze Platter',
    description: 'Hummus kacang arab lembut kaya folat, falafel panggang non-goreng, tabbouleh peterseli steril, dan gurihnya roti pita gandum utuh.',
    image: 'https://images.unsplash.com/photo-1544124499-58ec407ff243?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '40% AKG',
      zatBesi: '26% AKG',
      kalsium: '15% AKG',
      protein: '14g',
      manfaatHamil: 'Hummus kacang arab menyajikan folat nabati jempolan yang luar biasa menstabilkan pembelahan DNA janin di trimester pertama.'
    }
  },
  {
    mood: 'Petualang',
    food: 'Air-Fried Jamaican Jerk Chicken',
    description: 'Dada ayam panggang bumbu pedas manis pimento khas Karibia yang diolah menggunakan air-fryer guna membuang tumpukan kalori berlebih.',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '10% AKG',
      zatBesi: '18% AKG',
      kalsium: '8% AKG',
      protein: '26g',
      manfaatHamil: 'Menyediakan niasin (Vitamin B3) murni konsentrasi tinggi guna membantu pembentukan integritas jaringan kulit mulus genetika bayi.'
    }
  },
  {
    mood: 'Petualang',
    food: 'Whole Wheat Russian Beef Stroganoff',
    description: 'Irisan daging sapi tenderloin gurih bersanding mie telur gandum murni dalam sapuan saus krim asam terpasteurisasi sehat.',
    image: 'https://images.unsplash.com/photo-1614748437500-29c8789524bb?auto=format&fit=crop&q=80&w=800',
    nutrisiHamil: {
      folat: '14% AKG',
      zatBesi: '35% AKG',
      kalsium: '12% AKG',
      protein: '32g',
      manfaatHamil: 'Daging sapi kaya seng memicu keaktifan perkembangan rambut dan kuku janin dalam kandungan secara solid.'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Hartono',
    role: 'Ibu Hamil Trimester 2',
    content: 'MoodMeal Bumil App mengubah cara saya menavigasi trimester kedua. Saat saya lelah akibat mual & ngidam makanan manis/asam, pendeteksi instannya merekomendasikan Avocado Berry Bowl tinggi folat – mual mereda, gizi janin pun terpenuhi dengan aman!',
    avatar: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'dr. Marcus Chen, Sp.OG',
    role: 'Dokter Spesialis Kebidanan & Kandungan',
    content: 'Sebagai dokter obgyn, saya sangat mengapresiasi detektor gizi ini. Aplikasi ini adalah solusi pertama yang cerdas menyinkronkan perubahan hormonal ibu hamil dengan asupan Asam Folat, Zat Besi, dan Kalsium yang terukur secara klinis.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Elena Rodriguez, S.Gz',
    role: 'Konsultan Nutrisionis Ibu & Anak',
    content: 'Memahami ngidam dan suasana hati ibu hamil adalah kunci utama gizi optimal. Detektor gizi MoodMeal sangat membantu memasangkan selera makan bumil dengan gizi esensial lengkap demi pembentukan kognitif janin yang unggul.',
    avatar: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Gizi Bumil Basic',
    price: 'Rp 249rb',
    period: 'bulan',
    description: 'Rencana pendampingan gizi dasar harian untuk calon ibu agar kehamilan sehat bebas khawatir.',
    features: [
      'Detektor Mood & Ngidam AI Ibu Hamil',
      'Daftar Resep Tinggi Asam Folat & Zat Besi',
      'Pelacakan Gizi Mikro Esensial',
      'Panduan Redakan Morning Sickness'
    ]
  },
  {
    id: 'pro',
    name: 'Maternity Premium',
    price: 'Rp 599rb',
    period: 'bulan',
    recommended: true,
    description: 'Rencana sangat populer dengan pelacakan lengkap gizi janin + Chat Ahli Gizi.',
    features: [
      'Semua Fitur Gizi Bumil Basic',
      'Konsultasi Gizi Eksklusif Chat 24/7',
      'Skema Makanan Khusus Per Trimester',
      'Rekomendasi Menu Pre-natal Spesifik',
      'Akses Webinar Gizi Bumil & Janin'
    ]
  },
  {
    id: 'enterprise',
    name: 'Maternity VIP Medis',
    price: 'Rp 1.4jt',
    period: 'bulan',
    description: 'Solusi medis paripurna bersama Dokter Spesialis & Dokter Gizi Klinis.',
    features: [
      'Semua Fitur Maternity Premium',
      'Tele-Medicine Dokter Spesialis Kandungan',
      'Custom Delivery Catering Gizi Hamil 3x Sehari',
      'Analisis Lab Profil Darah & Risiko Anemia',
      'Pendampingan Dokter Spesialis Terpadu'
    ]
  }
];
