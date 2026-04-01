import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export interface Product {
  slug: string;
  type: 'charmes' | 'bracelets';
  title: string;
  price_xpf: number;
  photos_png: string[];
  description: string;
  is_active: boolean;
}

export interface Store {
  name: string;
  hours: string;
  google_maps_url: string;
  phone?: string;
  email?: string;
  messenger_url?: string;
  notes?: string;
}

export interface FAQ {
  order: number;
  question: string;
  answer: string;
}

function readCsv<T>(filename: string): T[] {
  const filePath = path.join(process.cwd(), 'data', filename);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const result = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
  });
  return result.data as T[];
}

export function getProducts(): Product[] {
  const rawProducts = readCsv<any>('products.csv');
  return rawProducts.map((p) => ({
    slug: p.slug,
    type: p.type as 'charmes' | 'bracelets',
    title: p.title,
    price_xpf: parseInt(p.price_xpf, 10) || 0,
    photos_png: p.photos_png ? p.photos_png.split('|').filter(Boolean) : [],
    description: p.description || '',
    is_active: p.is_active === 'true',
  }));
}

export function getActiveProducts(): Product[] {
  return getProducts().filter((p) => p.is_active);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getActiveProducts().find((p) => p.slug === slug);
}

export function getProductsByType(type: 'charmes' | 'bracelets'): Product[] {
  return getActiveProducts().filter((p) => p.type === type);
}

export function getStores(): Store[] {
  return readCsv<Store>('stores.csv');
}

export function getFaqs(): FAQ[] {
  const faqs = readCsv<any>('faq.csv');
  return faqs
    .map((f) => ({
      order: parseInt(f.order, 10) || 0,
      question: f.question,
      answer: f.answer,
    }))
    .sort((a, b) => a.order - b.order);
}
