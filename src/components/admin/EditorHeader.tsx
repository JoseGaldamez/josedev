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
      <h1 className="text-3xl font-bold text-gray-900">
        {isEditing ? 'Editar Post' : 'Crear Nuevo Post'}
      </h1>
      
      <div className="flex gap-3">
        <Button
          onClick={onSaveDraft}
          disabled={saving}
          variant="outline"
          className='text-black'
        >
          {saving ? 'Guardando...' : 'Guardar borrador'}
        </Button>
        
        <Button
          onClick={onPublish}
          disabled={saving}
        >
          <Eye className="w-4 h-4 mr-2" />
          {saving ? 'Publicando...' : 'Publicar'}
        </Button>
      </div>
    </div>
  );
}