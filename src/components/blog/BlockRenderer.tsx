'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Block } from '@/types/blog';

interface BlockRendererProps {
  block: Block;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case 'heading':
      return <HeadingBlock block={block} />;
    case 'paragraph':
      return <ParagraphBlock block={block} />;
    case 'image':
      return <ImageBlock block={block} />;
    case 'code':
      return <CodeBlock block={block} />;
    case 'list':
      return <ListBlock block={block} />;
    case 'quote':
      return <QuoteBlock block={block} />;
    case 'button':
      return <ButtonBlock block={block} />;
    default:
      return null;
  }
}

function HeadingBlock({ block }: { block: Block }) {
  const { level = 2, content = '' } = block;
  
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = {
    1: 'text-4xl font-thin mb-6 px-2 md:px-8 text-white/80',
    2: 'text-3xl font-thin mb-5 px-2 md:px-8 text-white/80',
    3: 'text-2xl font-thin mb-4 px-2 md:px-8 text-white/80',
    4: 'text-xl font-light mb-3 px-2 md:px-8 text-white/80',
    5: 'text-lg font-light mb-2 px-2 md:px-8 text-white/80',
    6: 'text-base font-light mb-2 px-2 md:px-8 text-white/80',
  };

  return (
    <Tag className={classes[level as keyof typeof classes] || classes[2]}>
      {content}
    </Tag>
  );
}

function ParagraphBlock({ block }: { block: Block }) {
  const { content = '' } = block;
  
  return (
    <div 
      className="mb-4 px-2 md:px-8 text-lg text-white/60 leading-relaxed font-light"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

function ImageBlock({ block }: { block: Block }) {
  const { src = '', caption = '' } = block;
  
  if (!src) return null;
  
  return (
    <figure className="my-5">
      <div className="relative w-full overflow-hidden">
        <img
          src={src}
          alt={caption || 'Blog image'}
          className="object-cover w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-white/40 text-center italic font-light">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function CodeBlock({ block }: { block: Block }) {
  const { content = '', language = 'javascript' } = block;
  
  return (
    <div className="mb-6">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
        }}
        showLineNumbers
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}

function ListBlock({ block }: { block: Block }) {
  const { items = [] } = block;
  
  if (items.length === 0) return null;
  
  return (
    <ul className="mb-4 text-lg px-2 md:px-16 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="inline-block w-2 h-2 bg-white/50 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span className="text-white/60 font-light" dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

function QuoteBlock({ block }: { block: Block }) {
  const { content = '' } = block;
  
  return (
    <blockquote className="mb-6 pl-6 border-l-4 border-white/30 bg-white/5 py-4 pr-4 rounded-r-lg">
      <div 
        className="text-white/70 italic text-lg leading-relaxed font-light"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </blockquote>
  );
}

function ButtonBlock({ block }: { block: Block }) {
  const { buttonText = '', url = '' } = block;
  
  if (!buttonText || !url) return null;
  
  return (
    <div className="mb-6 px-5">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block no-underline px-6 py-3 bg-white/10 text-white/80 border border-white/20 rounded-lg hover:bg-white/20 hover:text-white/90 transition-all duration-200 font-medium backdrop-blur-sm"
      >
        {buttonText}
      </a>
    </div>
  );
}