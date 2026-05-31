export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  isVeg: boolean;
  rating: number;
  image: string;
  description: string;
  popular?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export type ActiveSection = 'home' | 'menu' | 'booking' | 'info';
