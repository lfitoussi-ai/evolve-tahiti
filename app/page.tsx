import Link from 'next/link';
import { getActiveProducts } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const products = getActiveProducts().slice(0, 4); // Show 4 featured products

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <section className="text-center space-y-4 py-12 md:py-24">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Bijoux Tahiti
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          Découvrez notre collection exclusive de charmes et bracelets, inspirée par la beauté de la Polynésie.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link href="/produits" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Voir le catalogue
          </Link>
          <Link href="/boutiques" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            Nos boutiques
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Nouveautés</h2>
          <Link href="/produits" className="text-sm font-medium text-primary hover:underline">
            Tout voir &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
