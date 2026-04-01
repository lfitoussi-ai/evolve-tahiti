import { getActiveProducts } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tous les produits | Bijoux Tahiti',
  description: 'Découvrez notre catalogue complet de charmes et bracelets.',
};

export default function ProductsPage() {
  const products = getActiveProducts();

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Notre Catalogue</h1>
        <p className="text-muted-foreground">Tous nos charmes et bracelets.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
