'use client';

import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

interface EditorHeaderProps {
  isEditing: boolean;
  saving: boolean;
  onSaveDraft: () => void;
  onPublish: () => void;
}

export function EditorHeader({
  isEditing,
  saving,
  onSaveDraft,
  onPublish
}: EditorHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-white">
        {isEditing ? 'Editar Post' : 'Crear Nuevo Post'}
      </h1>

      <div className="flex gap-3">
        <Button
          onClick={onSaveDraft}
          disabled={saving}
          variant="outline"
          className='text-white border-white/20 hover:bg-white/10 hover:text-white bg-transparent'
        >
          {saving ? 'Guardando...' : 'Guardar borrador'}
        </Button>

        <Button
          onClick={onPublish}
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 text-white border-none"
        >
          <Eye className="w-4 h-4 mr-2" />
          {saving ? 'Publicando...' : 'Publicar'}
        </Button>
      </div>
    </div>
  );
}