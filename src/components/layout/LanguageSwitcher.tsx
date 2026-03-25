'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './LanguageSwitcher.module.css';

const LANGUAGES = [
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'AZ', name: 'Azərbaycan', flag: '🇦🇿' },
  { code: 'KA', name: 'ქართული', flag: '🇬🇪' },
  { code: 'RU', name: 'Русский', flag: '🇷🇺' },
  { code: 'ES', name: 'Español', flag: '🇪🇸' },
  { code: 'IT', name: 'Italiano', flag: '🇮🇹' },
] as const;

type LangCode = (typeof LANGUAGES)[number]['code'];

type Props = {
  variant?: 'desktop' | 'mobile';
};

export default function LanguageSwitcher({ variant = 'desktop' }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<LangCode>('EN');
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === 'mobile') return;
    const handleClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [variant]);

  useEffect(() => {
    if (variant === 'mobile') return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [variant]);

  const current = LANGUAGES.find((l) => l.code === selected) ?? LANGUAGES[0];

  const select = (code: LangCode) => {
    setSelected(code);
    if (variant === 'desktop') setOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div className={styles.mobileWrap}>
        <button
          type="button"
          className={`${styles.trigger} ${styles.mobileTrigger}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <GlobeIcon className={styles.globe} />
            <span className={styles.code}>{current.code}</span>
            <span style={{ color: 'var(--gray-500)', fontWeight: 600 }}>·</span>
            <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>{current.name}</span>
          </span>
          <ChevronIcon className={`${styles.chevron} ${open ? styles.chevronUp : ''}`} />
        </button>
        <div
          className={`${styles.panel} ${styles.mobilePanel} ${open ? '' : styles.mobilePanelClosed}`}
          role="listbox"
        >
          <div className={styles.panelHeader}>Language</div>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={selected === lang.code}
              className={`${styles.option} ${styles.mobileOption} ${selected === lang.code ? styles.optionActive : ''}`}
              onClick={() => select(lang.code)}
            >
              <span className={styles.flag} aria-hidden>
                {lang.flag}
              </span>
              <span className={styles.optionTexts}>
                <div className={styles.optionCode}>{lang.code}</div>
                <div className={styles.optionName}>{lang.name}</div>
              </span>
              <CheckIcon className={styles.check} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Language: ${current.name}. Change language`}
      >
        <GlobeIcon className={styles.globe} />
        <span className={styles.code}>{current.code}</span>
        <ChevronIcon className={`${styles.chevron} ${open ? styles.chevronUp : ''}`} />
      </button>

      <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`} role="listbox">
        <div className={styles.panelHeader}>Language</div>
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            role="option"
            aria-selected={selected === lang.code}
            className={`${styles.option} ${selected === lang.code ? styles.optionActive : ''}`}
            onClick={() => select(lang.code)}
          >
            <span className={styles.flag} aria-hidden>
              {lang.flag}
            </span>
            <span className={styles.optionTexts}>
              <div className={styles.optionCode}>{lang.code}</div>
              <div className={styles.optionName}>{lang.name}</div>
            </span>
            <CheckIcon className={styles.check} />
          </button>
        ))}
        <div className={styles.panelFooter}>Translations coming soon — UI preview only.</div>
      </div>
    </div>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
