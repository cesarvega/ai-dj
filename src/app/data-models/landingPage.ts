type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CAD' | 'AUD';// add money

type Price = {
  current: number;
  original?: number; // original price
  currency: Currency;
};

type Feature = {
  title: string;
  description: string;
};

type Benefit = {
  title: string;
  description: string;
};

type CTA = {
  message: string;
  button_label: string;
  link: string;
};

type Color = {
  name: string;
  hex: string;
  rgb: string;
};
export interface Product {
  id: string;
  name: string;
  description: string;
  price: Price;
  features: Feature[];
  benefits: Benefit[];
  cta: CTA;
  imageUrl?: string;
  category: 'book' | 'soundpack' | 'song' | 'bicycle' | 'other'; // Category to identify the type of product.
  tags?: string[]; 
  colors?: Color[]; 
}