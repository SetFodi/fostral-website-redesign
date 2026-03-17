'use client';

import { useRef, useCallback } from 'react';
import { useContent } from './ContentProvider';

interface EditableProps {
  k: string;
  as?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const val = path.split('.').reduce<unknown>((o, key) => {
    if (o && typeof o === 'object') return (o as Record<string, unknown>)[key];
    return undefined;
  }, obj);
  return typeof val === 'string' ? val : undefined;
}

export default function Editable({ k, as: tagName = 'span', children, ...props }: EditableProps) {
  const { content, isAdmin, updateContent } = useContent();
  const override = getNestedValue(content, k);
  const ref = useRef<HTMLElement>(null);

  const handleBlur = useCallback(() => {
    if (ref.current) {
      updateContent(k, ref.current.innerHTML);
    }
  }, [k, updateContent]);

  const Tag = tagName as unknown as React.ElementType;

  if (!isAdmin) {
    if (override !== undefined) {
      return <Tag {...props} dangerouslySetInnerHTML={{ __html: override }} />;
    }
    return <Tag {...props}>{children}</Tag>;
  }

  const editableProps = {
    ref,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onBlur: handleBlur,
    'data-editable': k,
    ...props,
  };

  if (override !== undefined) {
    return <Tag {...editableProps} dangerouslySetInnerHTML={{ __html: override }} />;
  }

  return <Tag {...editableProps}>{children}</Tag>;
}
