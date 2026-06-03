export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  period: 'month' | 'year';
  description: string;
  features: string[];
  recommended?: boolean;
}

export type MoodType = 'Bersemangat' | 'Santai' | 'Stres' | 'Bahagia' | 'Lelah' | 'Petualang';

export interface PregnancyNutrition {
  folat?: string;
  zatBesi?: string;
  kalsium?: string;
  protein?: string;
  omega3?: string;
  manfaatHamil: string;
}

export interface MoodRecommendation {
  mood: MoodType;
  food: string;
  description: string;
  image: string;
  nutrisiHamil?: PregnancyNutrition;
}

