import { getStores } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Boutiques | Bijoux Tahiti',
  description: 'Trouvez la boutique Bijoux Tahiti la plus proche de chez vous.',
};

export default function StoresPage() {
  const stores = getStores();

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Nos Boutiques</h1>
        <p className="text-muted-foreground">Venez découvrir nos collections en magasin.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stores.map((store, index) => (
          <div key={index} className="rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">{store.name}</h2>
            <div className="space-y-2 text-sm">
              <p><strong>Horaires :</strong> {store.hours}</p>
              {store.phone && <p><strong>Téléphone :</strong> {store.phone}</p>}
              {store.email && <p><strong>Email :</strong> <a href={`mailto:${store.email}`} className="text-primary hover:underline">{store.email}</a></p>}
              {store.notes && <p className="text-muted-foreground italic">{store.notes}</p>}
            </div>
            <div className="flex gap-4 pt-4">
              {store.google_maps_url && (
                <a href={store.google_maps_url} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                  Voir sur la carte
                </a>
              )}
              {store.messenger_url && (
                <a href={store.messenger_url} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  Nous contacter
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
