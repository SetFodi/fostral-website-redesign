import Link from 'next/link';
import Editable from '@/components/cms/Editable';
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
                        <Editable k="home.hero.badge">Odoo Expertise</Editable>
                    </div>
                    <h1 className="fade-up-d1">
                        <Editable k="home.hero.title">Your trusted partner in </Editable>
                        <span className={styles.accent}><Editable k="home.hero.titleAccent">business automation</Editable></span>
                    </h1>
                    <Editable k="home.hero.description" as="p" className={`${styles.heroDesc} fade-up-d2`}>
                        We help companies digitise operations, simplify processes, and build software experiences people actually enjoy using.
                    </Editable>
                    <div className={`${styles.heroActions} fade-up-d3`}>
                        <Link href="/contact" className={styles.btnHeroPrimary}>
                            <Editable k="home.hero.ctaPrimary">Schedule a Consultation</Editable>
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                        </Link>
                        <Link href="/services" className={styles.btnHeroSecondary}>
                            <Editable k="home.hero.ctaSecondary">Explore Services</Editable>
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v10M4 9l4 4 4-4" /></svg>
                        </Link>
                    </div>
                </div>
                <div className={`${styles.heroVisual} fade-up-d4`}>
                    <div className={styles.statsPanel}>
                        <div className={styles.statsRow}>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}><Editable k="home.hero.stat1Value">50</Editable><span className={styles.plus}>+</span></div>
                                <Editable k="home.hero.stat1Label" as="div" className={styles.statLabel}>Implementations</Editable>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}><Editable k="home.hero.stat2Value">12M</Editable><span className={styles.plus}>+</span></div>
                                <Editable k="home.hero.stat2Label" as="div" className={styles.statLabel}>Transactions</Editable>
                            </div>
                        </div>
                        <div className={styles.statsRow} style={{ marginTop: '1.5rem' }}>
                            <div className={styles.statItem}>
                                <Editable k="home.hero.stat3Value" as="div" className={styles.statNumber}>6</Editable>
                                <Editable k="home.hero.stat3Label" as="div" className={styles.statLabel}>Countries</Editable>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statNumber}><Editable k="home.hero.stat4Value">98</Editable><span className={styles.plus}>%</span></div>
                                <Editable k="home.hero.stat4Label" as="div" className={styles.statLabel}>Retention Rate</Editable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
