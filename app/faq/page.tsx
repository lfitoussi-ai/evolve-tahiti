import { getFaqs } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Bijoux Tahiti',
  description: 'Foire aux questions.',
};

export default function FaqPage() {
  const faqs = getFaqs();

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Foire aux questions</h1>
        <p className="text-muted-foreground">Trouvez les réponses à vos questions.</p>
      </div>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.order} className="border-b pb-6">
            <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
