import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold sm:inline-block">Bijoux Tahiti</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/produits" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Catalogue
          </Link>
          <Link href="/produits/charmes" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Charmes
          </Link>
          <Link href="/produits/bracelets" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Bracelets
          </Link>
          <Link href="/boutiques" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Boutiques
          </Link>
          <Link href="/faq" className="transition-colors hover:text-foreground/80 text-foreground/60">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
