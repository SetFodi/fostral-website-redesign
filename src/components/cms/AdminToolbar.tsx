'use client';

import { useContent } from './ContentProvider';
import styles from './AdminToolbar.module.css';

export default function AdminToolbar() {
  const { isAdmin, hasChanges, isSaving, saveResult, saveContent, discardChanges } = useContent();

  if (!isAdmin) return null;

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/';
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <span className={styles.dot} />
        <span className={styles.label}>Edit Mode</span>
        {saveResult && (
          <span className={styles.saved}>
            {saveResult.method === 'github'
              ? 'Saved — changes will be live in ~30s'
              : 'Saved to filesystem'}
          </span>
        )}
      </div>
      <div className={styles.actions}>
        {hasChanges && (
          <>
            <button onClick={discardChanges} className={styles.btnDiscard} disabled={isSaving}>
              Discard
            </button>
            <button onClick={saveContent} className={styles.btnSave} disabled={isSaving}>
              {isSaving ? 'Saving…' : 'Save Changes'}
            </button>
          </>
        )}
        <button onClick={handleLogout} className={styles.btnLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
