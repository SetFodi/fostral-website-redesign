'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import contentData from '@/content/content.json';

interface ContentContextType {
  content: Record<string, unknown>;
  isAdmin: boolean;
  hasChanges: boolean;
  isSaving: boolean;
  saveResult: { method: string } | null;
  updateContent: (key: string, value: string) => void;
  saveContent: () => Promise<void>;
  discardChanges: () => void;
}

const ContentContext = createContext<ContentContextType>({
  content: {},
  isAdmin: false,
  hasChanges: false,
  isSaving: false,
  saveResult: null,
  updateContent: () => {},
  saveContent: async () => {},
  discardChanges: () => {},
});

export function useContent() {
  return useContext(ContentContext);
}

function setNestedValue(obj: Record<string, unknown>, path: string, value: string): Record<string, unknown> {
  const result = JSON.parse(JSON.stringify(obj));
  const keys = path.split('.');
  let current = result;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]] || typeof current[keys[i]] !== 'object') {
      current[keys[i]] = {};
    }
    current = current[keys[i]] as Record<string, unknown>;
  }

  current[keys[keys.length - 1]] = value;
  return result;
}

export default function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<Record<string, unknown>>(contentData);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveResult, setSaveResult] = useState<{ method: string } | null>(null);
  const originalContent = useRef(contentData);

  useEffect(() => {
    const hasCookie = document.cookie
      .split(';')
      .some((c) => c.trim().startsWith('admin_token='));
    setIsAdmin(hasCookie);
  }, []);

  useEffect(() => {
    if (!hasChanges || !isAdmin) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasChanges, isAdmin]);

  const updateContent = useCallback((key: string, value: string) => {
    setContent((prev) => setNestedValue(prev, key, value));
    setHasChanges(true);
    setSaveResult(null);
  }, []);

  const saveContent = useCallback(async () => {
    setIsSaving(true);
    setSaveResult(null);
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });
      if (!res.ok) throw new Error('Save failed');
      const data = await res.json();
      setHasChanges(false);
      originalContent.current = content as typeof contentData;
      setSaveResult({ method: data.method });
    } catch (err) {
      alert('Failed to save. Check console for details.');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  }, [content]);

  const discardChanges = useCallback(() => {
    setContent(originalContent.current);
    setHasChanges(false);
    setSaveResult(null);
    window.location.reload();
  }, []);

  return (
    <ContentContext.Provider
      value={{ content, isAdmin, hasChanges, isSaving, saveResult, updateContent, saveContent, discardChanges }}
    >
      {children}
    </ContentContext.Provider>
  );
}
