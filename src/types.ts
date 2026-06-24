export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  role: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'equipment' | 'workout' | 'cardio' | 'all';
  image: string;
}
