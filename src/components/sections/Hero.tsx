import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBg}></div>
            <div className={styles.heroGridOverlay}></div>
            <div className={`${styles.heroOrb} ${styles.heroOrb1}`}></div>
            <div className={`${styles.heroOrb} ${styles.heroOrb2}`}></div>
            <div className={styles.heroInner}>
                <div>
                    <div className={`${styles.heroLabel} fade-up`}>
                        <span className={styles.heroLabelDot}></span>
                        Odoo Expertise
                    </div>
                    <h1 className="fade-up-d1">
                        Your trusted partner in <span className={styles.accent}>business automation</span>
                    </h1>
                    <p className={`${styles.heroDesc} fade-up-d2`}>
                        We help companies digitise operations, simplify processes, and build software experiences people actually enjoy using.
                    </p>
                    <div className={`${styles.heroActions} fade-up-d3`}>
                        <Link href="/contact" className={styles.btnHeroPrimary}>
                            Schedule a Consultation
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                        </Link>
                        <Link href="/services" className={styles.btnHeroSecondary}>
                            Explore Services
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v10M4 9l4 4 4-4" /></svg>
                        </Link>
                    </div>
                </div>
                <div className={`${styles.heroVisual} fade-up-d4`}>
                    <div className={styles.statsPanel}>
                        <div className={styles.statsRow}>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>50<span className={styles.plus}>+</span></div>
                                <div className={styles.statLabel}>Implementations</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>12M<span className={styles.plus}>+</span></div>
                                <div className={styles.statLabel}>Transactions</div>
                            </div>
                        </div>
                        <div className={styles.statsRow} style={{ marginTop: '1.5rem' }}>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>6</div>
                                <div className={styles.statLabel}>Countries</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}>98<span className={styles.plus}>%</span></div>
                                <div className={styles.statLabel}>Retention Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
