import { getProductBySlug, getActiveProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const products = getActiveProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Produit non trouvé' };
  
  return {
    title: `${product.title} | Bijoux Tahiti`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square relative overflow-hidden rounded-xl bg-muted">
          {product.photos_png[0] ? (
            <Image
              src={product.photos_png[0]}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              referrerPolicy="no-referrer"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary text-secondary-foreground">
              Pas d'image
            </div>
          )}
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground capitalize">{product.type}</p>
            <h1 className="text-4xl font-bold tracking-tight">{product.title}</h1>
            <p className="text-2xl font-semibold">{product.price_xpf.toLocaleString('fr-FR')} XPF</p>
          </div>
          <div className="prose prose-sm md:prose-base dark:prose-invert">
            <p>{product.description}</p>
          </div>
          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              Disponible dans nos boutiques. Contactez-nous pour vérifier les stocks.
            </p>
            <a href="/boutiques" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Voir les boutiques
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
