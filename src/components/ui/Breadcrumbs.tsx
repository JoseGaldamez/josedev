'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  generateStructuredData?: boolean;
}

export function Breadcrumbs({ items, generateStructuredData = false }: BreadcrumbsProps) {
  // Generate structured data for SEO
  const structuredData = generateStructuredData ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href && { item: `https://josegaldamez.dev${item.href}` })
    }))
  } : null;

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-white/40">
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              {index > 0 && <span>/</span>}
              {item.href && !item.current ? (
                <Link href={item.href} className="hover:text-white/60 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span 
                  className={`${item.current ? 'text-white/60 truncate max-w-xs' : ''}`}
                  title={item.current ? item.name : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}