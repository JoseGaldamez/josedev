'use client';

import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface ExcerptEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  rows?: number;
}

export function ExcerptEditor({ 
  value, 
  onChange, 
  placeholder = "Breve descripción del post para mostrar en la lista...",
  label = "Resumen del post",
  rows = 3
}: ExcerptEditorProps) {
  return (
    <Card className="p-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
      />
    </Card>
  );
}