import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative rounded-lg border p-4 hover:shadow-md transition-shadow">
      <Link href={`/produit/${product.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Voir {product.title}</span>
      </Link>
      <div className="aspect-square relative overflow-hidden rounded-md bg-muted mb-4">
        {product.photos_png[0] ? (
          <Image
            src={product.photos_png[0]}
            alt={product.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary text-secondary-foreground">
            Pas d'image
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-medium leading-none">{product.title}</h3>
        <p className="text-sm text-muted-foreground capitalize">{product.type}</p>
        <p className="font-semibold">{product.price_xpf.toLocaleString('fr-FR')} XPF</p>
      </div>
    </article>
  );
}
