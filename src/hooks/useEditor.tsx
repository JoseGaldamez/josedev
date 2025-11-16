'use client';

import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Block {
  id: string;
  type: 'heading' | 'paragraph' | 'image' | 'code' | 'list' | 'quote';
  level?: number;
  content?: string;
  src?: string;
  caption?: string;
  language?: string;
  items?: string[];
}

interface EditorState {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  categories: string[];
  blocks: Block[];
  status: 'draft' | 'published';
}

const initialState: EditorState = {
  title: '',
  slug: '',
  excerpt: '',
  featuredImage: '',
  categories: [],
  blocks: [],
  status: 'draft',
};

export function useEditor(initialData?: Partial<EditorState>) {
  const [editorState, setEditorState] = useState<EditorState>({
    ...initialState,
    ...initialData,
  });

  const updateField = useCallback((field: keyof EditorState, value: any) => {
    setEditorState(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const addBlock = useCallback((type: Block['type'], index?: number) => {
    const newBlock: Block = {
      id: uuidv4(),
      type,
      content: '',
    };

    // Set default properties based on block type
    switch (type) {
      case 'heading':
        newBlock.level = 2;
        break;
      case 'code':
        newBlock.language = 'javascript';
        break;
      case 'list':
        newBlock.items = [''];
        break;
    }

    setEditorState(prev => {
      const newBlocks = [...prev.blocks];
      const insertIndex = index !== undefined ? index : newBlocks.length;
      newBlocks.splice(insertIndex, 0, newBlock);
      
      return {
        ...prev,
        blocks: newBlocks,
      };
    });

    return newBlock.id;
  }, []);

  const updateBlock = useCallback((blockId: string, updates: Partial<Block>) => {
    setEditorState(prev => ({
      ...prev,
      blocks: prev.blocks.map(block =>
        block.id === blockId ? { ...block, ...updates } : block
      ),
    }));
  }, []);

  const deleteBlock = useCallback((blockId: string) => {
    setEditorState(prev => ({
      ...prev,
      blocks: prev.blocks.filter(block => block.id !== blockId),
    }));
  }, []);

  const moveBlock = useCallback((blockId: string, direction: 'up' | 'down') => {
    setEditorState(prev => {
      const blocks = [...prev.blocks];
      const currentIndex = blocks.findIndex(block => block.id === blockId);
      
      if (currentIndex === -1) return prev;
      
      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      
      if (newIndex < 0 || newIndex >= blocks.length) return prev;
      
      // Swap blocks
      [blocks[currentIndex], blocks[newIndex]] = [blocks[newIndex], blocks[currentIndex]];
      
      return {
        ...prev,
        blocks,
      };
    });
  }, []);

  const duplicateBlock = useCallback((blockId: string) => {
    setEditorState(prev => {
      const blockIndex = prev.blocks.findIndex(block => block.id === blockId);
      if (blockIndex === -1) return prev;
      
      const originalBlock = prev.blocks[blockIndex];
      const duplicatedBlock: Block = {
        ...originalBlock,
        id: uuidv4(),
      };
      
      const newBlocks = [...prev.blocks];
      newBlocks.splice(blockIndex + 1, 0, duplicatedBlock);
      
      return {
        ...prev,
        blocks: newBlocks,
      };
    });
  }, []);

  const reorderBlocks = useCallback((startIndex: number, endIndex: number) => {
    setEditorState(prev => {
      const newBlocks = [...prev.blocks];
      const [reorderedItem] = newBlocks.splice(startIndex, 1);
      newBlocks.splice(endIndex, 0, reorderedItem);
      
      return {
        ...prev,
        blocks: newBlocks,
      };
    });
  }, []);

  const resetEditor = useCallback((newData?: Partial<EditorState>) => {
    setEditorState({
      ...initialState,
      ...newData,
    });
  }, []);

  const getBlockById = useCallback((blockId: string) => {
    return editorState.blocks.find(block => block.id === blockId);
  }, [editorState.blocks]);

  const hasUnsavedChanges = useCallback((originalData?: Partial<EditorState>) => {
    if (!originalData) return true;
    
    return JSON.stringify(editorState) !== JSON.stringify({
      ...initialState,
      ...originalData,
    });
  }, [editorState]);

  return {
    editorState,
    updateField,
    addBlock,
    updateBlock,
    deleteBlock,
    moveBlock,
    duplicateBlock,
    reorderBlocks,
    resetEditor,
    getBlockById,
    hasUnsavedChanges,
  };
}