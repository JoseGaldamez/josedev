'use client';

import { useState, useRef, useCallback } from 'react';
import { useEditor } from '@/hooks/useEditor';
import { useFirestore } from '@/hooks/useFirestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlockEditor } from './BlockEditor';
import { TitleEditor } from './TitleEditor';
import { SlugEditor } from './SlugEditor';
import { ExcerptEditor } from './ExcerptEditor';
import { EditorHeader } from './EditorHeader';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Upload, Save, Eye, Plus } from 'lucide-react';

interface EditorProps {
  initialData?: any;
  isEditing?: boolean;
  onSave?: (data: any) => void;
}

export function PostEditor({ initialData, isEditing = false, onSave }: EditorProps) {
  const [imageUploading, setImageUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const featuredImageRef = useRef<HTMLInputElement>(null);

  const {
    editorState,
    updateField,
    addBlock,
    updateBlock,
    deleteBlock,
    moveBlock,
    duplicateBlock,
    reorderBlocks,
    hasUnsavedChanges,
  } = useEditor(initialData);

  const { posts, images, utils, loading, error } = useFirestore();

  const handleSave = async (status: 'draft' | 'published' = 'draft') => {
    setSaving(true);
    
    try {
      // Generate slug if empty
      let slug = editorState.slug;
      if (!slug) {
        const generatedSlug = await utils.generateSlug(editorState.title);
        if (generatedSlug) {
          slug = generatedSlug;
          updateField('slug', slug);
        }
      }

      const now = new Date();
      const postData = {
        ...editorState,
        slug,
        status,
        publishedAt: status === 'published' ? now : null,
        updatedAt: now,
      };

      let result;
      if (isEditing && initialData?.slug) {
        result = await posts.update(initialData.slug, postData);
      } else {
        result = await posts.create(postData);
      }

      if (result && onSave) {
        onSave(result);
      }
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleFeaturedImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    try {
      const imageUrl = await images.upload(file, 'featured-images');
      if (imageUrl) {
        updateField('featuredImage', imageUrl);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setImageUploading(false);
    }
  };

  const addCategory = () => {
    if (newCategory.trim() && !editorState.categories.includes(newCategory.trim())) {
      updateField('categories', [...editorState.categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const removeCategory = (categoryToRemove: string) => {
    updateField('categories', editorState.categories.filter(cat => cat !== categoryToRemove));
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    reorderBlocks(result.source.index, result.destination.index);
  };

  const blockTypes = [
    { type: 'paragraph', label: 'Párrafo', icon: '¶' },
    { type: 'heading', label: 'Encabezado', icon: 'H' },
    { type: 'image', label: 'Imagen', icon: '🖼️' },
    { type: 'code', label: 'Código', icon: '<>' },
    { type: 'list', label: 'Lista', icon: '•' },
    { type: 'quote', label: 'Cita', icon: '"' },
  ] as const;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <EditorHeader
        isEditing={isEditing}
        saving={saving}
        onSaveDraft={() => handleSave('draft')}
        onPublish={() => handleSave('published')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <TitleEditor
            value={editorState.title}
            onChange={(value) => updateField('title', value)}
          />

          {/* Slug */}
          <SlugEditor
            value={editorState.slug}
            onChange={(value) => updateField('slug', value)}
          />

          {/* Excerpt */}
          <ExcerptEditor
            value={editorState.excerpt}
            onChange={(value) => updateField('excerpt', value)}
          />

          {/* Content Blocks */}
          <Card className="p-6">
            <div className="flex flex-col mb-6">
              <h3 className="text-lg font-semibold pb-5">Contenido del post</h3>
              
              <div className="flex gap-2">
                {blockTypes.map(({ type, label, icon }) => (
                  <Button
                    key={type}
                    onClick={() => addBlock(type)}
                    variant="outline"
                    size="sm"
                    title={`Agregar ${label}`}
                  >
                    <span className="mr-1">{icon}</span>
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="blocks">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-4"
                  >
                    {editorState.blocks.map((block, index) => (
                      <BlockEditor
                        key={block.id}
                        block={block}
                        index={index}
                        onUpdate={(updates) => updateBlock(block.id, updates)}
                        onDelete={() => deleteBlock(block.id)}
                        onMoveUp={() => moveBlock(block.id, 'up')}
                        onMoveDown={() => moveBlock(block.id, 'down')}
                        onDuplicate={() => duplicateBlock(block.id)}
                        canMoveUp={index > 0}
                        canMoveDown={index < editorState.blocks.length - 1}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            {editorState.blocks.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500 mb-4">
                  Tu post está vacío. Agrega algunos bloques para empezar a escribir.
                </p>
                <Button onClick={() => addBlock('paragraph')} variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar primer párrafo
                </Button>
              </div>
            )}

            <div className="flex gap-2 my-8">
                {blockTypes.map(({ type, label, icon }) => (
                  <Button
                    key={type}
                    onClick={() => addBlock(type)}
                    variant="outline"
                    size="sm"
                    title={`Agregar ${label}`}
                  >
                    <span className="mr-1">{icon}</span>
                    {label}
                  </Button>
                ))}
              </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Featured Image */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Imagen destacada</h3>
            
            {editorState.featuredImage ? (
              <div className="space-y-3">
                <img
                  src={editorState.featuredImage}
                  alt="Featured"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={() => featuredImageRef.current?.click()}
                    variant="outline"
                    size="sm"
                    disabled={imageUploading}
                  >
                    Cambiar
                  </Button>
                  <Button
                    onClick={() => updateField('featuredImage', '')}
                    variant="destructive"
                    size="sm"
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                onClick={() => featuredImageRef.current?.click()}
                variant="outline"
                disabled={imageUploading}
                className="w-full"
              >
                <Upload className="w-4 h-4 mr-2" />
                {imageUploading ? 'Subiendo...' : 'Subir imagen'}
              </Button>
            )}
            
            <input
              ref={featuredImageRef}
              type="file"
              accept="image/*"
              onChange={handleFeaturedImageUpload}
              className="hidden"
            />
          </Card>

          {/* Categories */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Nueva categoría"
                  onKeyPress={(e) => e.key === 'Enter' && addCategory()}
                />
                <Button onClick={addCategory} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              {editorState.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {editorState.categories.map((category) => (
                    <Badge
                      key={category}
                      variant="secondary"
                      className="cursor-pointer hover:bg-red-100 hover:text-red-800"
                      onClick={() => removeCategory(category)}
                    >
                      {category} ×
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </Card>

          {/* Save Status */}
          {hasUnsavedChanges(initialData) && (
            <Card className="p-4 bg-yellow-50 border-yellow-200">
              <p className="text-sm text-yellow-800">
                ⚠️ Hay cambios sin guardar
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}