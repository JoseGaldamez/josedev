import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface BlogPostFooterProps {
  updatedAt?: Date | null;
}

export function BlogPostFooter({ updatedAt }: BlogPostFooterProps) {
  return (
    <footer className="mt-12 pt-8 border-t border-white/20">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-white/40 font-light">
          {updatedAt && `Última actualización: ${format(updatedAt, "d 'de' MMMM 'de' yyyy", { locale: es })}`}
        </div>
        
        <Link
          href="/blog"
          className="text-white/50 hover:text-white/80 font-light transition-colors"
        >
          ← Volver al blog
        </Link>
      </div>
    </footer>
  );
}