import { getProductsByType } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Charmes | Bijoux Tahiti',
  description: 'Découvrez notre collection de charmes.',
};

export default function CharmesPage() {
  const products = getProductsByType('charmes');

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Charmes</h1>
        <p className="text-muted-foreground">Personnalisez votre bracelet avec nos charmes uniques.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
