import Editable from '@/components/cms/Editable';
import styles from './ClaritySection.module.css';

export default function ClaritySection() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <div className={styles.sectionHeaderCenter}>
                    <Editable k="home.clarity.badge" as="div" className={styles.sectionLabel} style={{ justifyContent: 'center' }}>Clarity Over Complexity</Editable>
                    <h2 className={styles.sectionTitle}>
                        <Editable k="home.clarity.title">Regaining control over fragmented operations</Editable>
                    </h2>
                    <Editable k="home.clarity.description" as="p" className={styles.sectionSubtitle}>
                        We help companies regain control over fragmented tools, inefficient processes, and unclear data flows.
                    </Editable>
                </div>

                <div className={styles.clarityGrid}>
                    <div className={styles.clarityIntro}>
                        <p><Editable k="home.clarity.intro">Fostral acts as a long-term partner who:</Editable></p>
                    </div>
                    <div className={styles.clarityCard}>
                        <div className={styles.clarityIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12l10 5 10-5" /><path d="M2 17l10 5 10-5" /><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
                        </div>
                        <h3><Editable k="home.clarity.card0">Oversees digital architecture</Editable></h3>
                    </div>
                    <div className={styles.clarityCard}>
                        <div className={styles.clarityIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        </div>
                        <h3><Editable k="home.clarity.card1">Eliminates operational friction</Editable></h3>
                    </div>
                    <div className={styles.clarityCard}>
                        <div className={styles.clarityIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <h3><Editable k="home.clarity.card2">Connects business units</Editable></h3>
                    </div>
                    <div className={styles.clarityCard}>
                        <div className={styles.clarityIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                        </div>
                        <h3><Editable k="home.clarity.card3">Builds adaptable user interfaces</Editable></h3>
                    </div>
                    <div className={styles.clarityCard}>
                        <div className={styles.clarityIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                        </div>
                        <h3><Editable k="home.clarity.card4">Enables management visibility</Editable></h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
