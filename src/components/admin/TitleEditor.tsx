'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface TitleEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function TitleEditor({
  value,
  onChange,
  placeholder = "Escribe el título de tu post...",
  label = "Título del post"
}: TitleEditorProps) {
  return (
    <Card className="p-6 bg-white/5 border-white/10">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="!text-2xl font-bold border-none p-2 !focus:ring-0 bg-transparent text-white placeholder:text-gray-600"
      />
    </Card>
  );
}