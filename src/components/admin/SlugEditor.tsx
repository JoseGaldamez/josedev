'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface SlugEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  baseUrl?: string;
}

export function SlugEditor({ 
  value, 
  onChange, 
  placeholder = "url-del-post",
  label = "URL del post (slug)",
  baseUrl = "/blog"
}: SlugEditorProps) {
  const handleSlugChange = (newValue: string) => {
    // Sanitize slug: lowercase, replace non-alphanumeric with hyphens, remove multiple hyphens
    const sanitizedSlug = newValue
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-');
    
    onChange(sanitizedSlug);
  };

  return (
    <Card className="p-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <Input
        value={value}
        onChange={(e) => handleSlugChange(e.target.value)}
        placeholder={placeholder}
        className="font-mono"
      />
      {value && (
        <p className="text-sm text-gray-500 mt-1">
          URL: {baseUrl}/{value}
        </p>
      )}
    </Card>
  );
}