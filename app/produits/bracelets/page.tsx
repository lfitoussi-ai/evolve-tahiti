import { getProductsByType } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bracelets | Bijoux Tahiti',
  description: 'Découvrez notre collection de bracelets.',
};

export default function BraceletsPage() {
  const products = getProductsByType('bracelets');

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Bracelets</h1>
        <p className="text-muted-foreground">La base parfaite pour votre collection de charmes.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
