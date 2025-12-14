export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Beer {
  id: number;
  name: string;
  style: string;
  abv: string;
  description: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  category: 'cans' | 'gift-packs' | 'merch' | 'mini-kegs' | 'events';
  price: number;
  image: string;
  description: string;
  abv?: string; // Optional for non-beer items
  style?: string;
  isNew?: boolean;
  date?: string; // For events
}

export enum SectionId {
  HERO = 'hero',
  SHOP = 'shop',
  TAPROOM = 'taproom',
  EVENTS = 'events',
  GALLERY = 'gallery',
  CONTACT = 'contact',
  ABOUT = 'about'
}