export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface GalleryItem {
  id: number;
  url: string;
  prompt: string;
  author: string;
}

export interface ImageMetadata {
  id: string;
  url: string;
  localUrl: string;
  width: number;
  height: number;
  alt?: string;
}
