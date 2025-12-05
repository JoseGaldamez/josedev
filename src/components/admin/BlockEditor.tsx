'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Draggable } from 'react-beautiful-dnd';
import { 
  GripVertical, 
  Trash2, 
  ChevronUp, 
  ChevronDown, 
  Copy, 
  Upload,
  Code,
  Type,
  Image as ImageIcon,
  Quote,
  List,
  Heading,
  MousePointer
} from 'lucide-react';
import { useFirestore } from '@/hooks/useFirestore';
import { Block } from '@/types/blog';

interface BlockEditorProps {
  block: Block;
  index: number;
  onUpdate: (updates: Partial<Block>) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDuplicate: () => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}

export function BlockEditor({
  block,
  index,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  canMoveUp,
  canMoveDown,
}: BlockEditorProps) {
  const [uploading, setUploading] = useState(false);
  const [imageInputMode, setImageInputMode] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { images } = useFirestore();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const imageUrl = await images.upload(file, 'blog-content');
      if (imageUrl) {
        onUpdate({ src: imageUrl });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      onUpdate({ src: urlInput.trim() });
      setUrlInput('');
    }
  };

  const addListItem = () => {
    const newItems = [...(block.items || []), ''];
    onUpdate({ items: newItems });
  };

  const updateListItem = (itemIndex: number, value: string) => {
    const newItems = [...(block.items || [])];
    newItems[itemIndex] = value;
    onUpdate({ items: newItems });
  };

  const removeListItem = (itemIndex: number) => {
    const newItems = (block.items || []).filter((_, i) => i !== itemIndex);
    onUpdate({ items: newItems });
  };

  const getBlockIcon = () => {
    switch (block.type) {
      case 'heading': return <Heading className="w-4 h-4" />;
      case 'paragraph': return <Type className="w-4 h-4" />;
      case 'image': return <ImageIcon className="w-4 h-4" />;
      case 'code': return <Code className="w-4 h-4" />;
      case 'list': return <List className="w-4 h-4" />;
      case 'quote': return <Quote className="w-4 h-4" />;
      case 'button': return <MousePointer className="w-4 h-4" />;
      default: return <Type className="w-4 h-4" />;
    }
  };

  const getBlockTitle = () => {
    switch (block.type) {
      case 'heading': return `Encabezado H${block.level || 2}`;
      case 'paragraph': return 'Párrafo';
      case 'image': return 'Imagen';
      case 'code': return 'Código';
      case 'list': return 'Lista';
      case 'quote': return 'Cita';
      case 'button': return 'Botón';
      default: return 'Bloque';
    }
  };

  return (
    <Draggable draggableId={block.id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="p-4 hover:shadow-md transition-shadow"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div {...provided.dragHandleProps} className="cursor-move">
                <GripVertical className="w-4 h-4 text-gray-400" />
              </div>
              {getBlockIcon()}
              <span className="text-sm font-medium text-gray-700">
                {getBlockTitle()}
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <Button
                onClick={onMoveUp}
                disabled={!canMoveUp}
                variant="ghost"
                size="sm"
              >
                <ChevronUp className="w-4 h-4" />
              </Button>
              
              <Button
                onClick={onMoveDown}
                disabled={!canMoveDown}
                variant="ghost"
                size="sm"
              >
                <ChevronDown className="w-4 h-4" />
              </Button>
              
              <Button
                onClick={onDuplicate}
                variant="ghost"
                size="sm"
              >
                <Copy className="w-4 h-4" />
              </Button>
              
              <Button
                onClick={onDelete}
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Content Editor */}
          <div className="space-y-4">
            {block.type === 'heading' && (
              <>
                <div className="flex gap-2 mb-2">
                  <label className="text-sm font-medium text-gray-700">Nivel:</label>
                  <select
                    value={block.level || 2}
                    onChange={(e) => onUpdate({ level: parseInt(e.target.value) })}
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5, 6].map((level) => (
                      <option key={level} value={level}>H{level}</option>
                    ))}
                  </select>
                </div>
                <Input
                  value={block.content || ''}
                  onChange={(e) => onUpdate({ content: e.target.value })}
                  placeholder="Escribe el título..."
                  className="text-lg font-semibold"
                />
              </>
            )}

            {block.type === 'paragraph' && (
              <Textarea
                value={block.content || ''}
                onChange={(e) => onUpdate({ content: e.target.value })}
                placeholder="Escribe tu párrafo aquí..."
                rows={4}
              />
            )}

            {block.type === 'image' && (
              <div className="space-y-3">
                {block.src ? (
                  <div className="space-y-3">
                    <img
                      src={block.src}
                      alt={block.caption || 'Blog image'}
                      className="w-full h-48 object-cover rounded-lg border"
                    />
                    <div className="flex gap-2">
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        size="sm"
                        disabled={uploading}
                      >
                        Cambiar imagen
                      </Button>
                      <Button
                        onClick={() => onUpdate({ src: '' })}
                        variant="destructive"
                        size="sm"
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* Mode Toggle */}
                    <div className="flex gap-2 justify-center">
                      <Button
                        onClick={() => setImageInputMode('upload')}
                        variant={imageInputMode === 'upload' ? 'default' : 'outline'}
                        size="sm"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Subir archivo
                      </Button>
                      <Button
                        onClick={() => setImageInputMode('url')}
                        variant={imageInputMode === 'url' ? 'default' : 'outline'}
                        size="sm"
                      >
                        <ImageIcon className="w-4 h-4 mr-2" />
                        URL directa
                      </Button>
                    </div>

                    {imageInputMode === 'upload' ? (
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        disabled={uploading}
                        className="w-full h-32 border-dashed"
                      >
                        <Upload className="w-6 h-6 mr-2" />
                        {uploading ? 'Subiendo...' : 'Subir imagen desde archivo'}
                      </Button>
                    ) : (
                      <div className="space-y-2">
                        <Input
                          value={urlInput}
                          onChange={(e) => setUrlInput(e.target.value)}
                          placeholder="https://ejemplo.com/imagen.jpg"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleUrlSubmit();
                            }
                          }}
                        />
                        <Button
                          onClick={handleUrlSubmit}
                          disabled={!urlInput.trim()}
                          className="w-full"
                        >
                          Usar esta URL
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                <Input
                  value={block.caption || ''}
                  onChange={(e) => onUpdate({ caption: e.target.value })}
                  placeholder="Descripción de la imagen (opcional)"
                />
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            )}

            {block.type === 'code' && (
              <div className="space-y-3">
                <div className="flex gap-2">
                  <label className="text-sm font-medium text-gray-700">Lenguaje:</label>
                  <select
                    value={block.language || 'javascript'}
                    onChange={(e) => onUpdate({ language: e.target.value })}
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="sql">SQL</option>
                    <option value="bash">Bash</option>
                    <option value="json">JSON</option>
                    <option value="markdown">Markdown</option>
                    <option value="yaml">YAML</option>
                  </select>
                </div>
                <Textarea
                  value={block.content || ''}
                  onChange={(e) => onUpdate({ content: e.target.value })}
                  placeholder="// Escribe tu código aquí..."
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>
            )}

            {block.type === 'list' && (
              <div className="space-y-2">
                {(block.items || []).map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-2">
                    <Input
                      value={item}
                      onChange={(e) => updateListItem(itemIndex, e.target.value)}
                      placeholder={`Elemento ${itemIndex + 1}...`}
                    />
                    <Button
                      onClick={() => removeListItem(itemIndex)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={addListItem}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Agregar elemento
                </Button>
              </div>
            )}

            {block.type === 'quote' && (
              <Textarea
                value={block.content || ''}
                onChange={(e) => onUpdate({ content: e.target.value })}
                placeholder="Escribe la cita aquí..."
                rows={3}
                className="italic"
              />
            )}

            {block.type === 'button' && (
              <div className="space-y-3">
                <Input
                  value={block.buttonText || ''}
                  onChange={(e) => onUpdate({ buttonText: e.target.value })}
                  placeholder="Texto del botón..."
                />
                <Input
                  value={block.url || ''}
                  onChange={(e) => onUpdate({ url: e.target.value })}
                  placeholder="https://ejemplo.com"
                  type="url"
                />
                {(block.buttonText || block.url) && (
                  <div className="p-3 bg-gray-50 rounded-lg border">
                    <p className="text-sm text-gray-600 mb-2">Vista previa:</p>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      disabled
                    >
                      {block.buttonText || 'Texto del botón'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>
      )}
    </Draggable>
  );
}