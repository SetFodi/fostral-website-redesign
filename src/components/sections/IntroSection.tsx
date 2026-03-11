import styles from './IntroSection.module.css';

export default function IntroSection() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <div className={styles.aboutGrid}>
                    <div className={styles.aboutText}>
                        <div className={styles.sectionLabel}>Value Proposition</div>
                        <h2 className={styles.sectionTitle}>
                            Bringing clarity to<br />everyday business
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Fostral is an IT services company specialising in business management software. We design, implement, and optimise digital systems that bring clarity, efficiency, and control to everyday business operations.
                        </p>
                        <p className={styles.sectionSubtitle} style={{ marginTop: '1rem' }}>
                            From first customer contact to financial reporting &ndash; we connect, automate, and streamline the way your business works.
                        </p>
                    </div>
                    <div className={styles.aboutVisual}>
                        <div className={styles.aboutCard}>
                            <div className={styles.aboutCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                            </div>
                            <h3>What We Do</h3>
                            <p>We support organisations in transforming complex workflows into intelligent, structured, and user-friendly digital environments.</p>
                            <ul className={styles.featureList} style={{ marginTop: '1.5rem' }}>
                                <li><span className={styles.featureDot}></span>Automating core business processes</li>
                                <li><span className={styles.featureDot}></span>Digitising operational workflows</li>
                                <li><span className={styles.featureDot}></span>Simplifying customer journeys</li>
                                <li><span className={styles.featureDot}></span>Designing clean, intuitive interfaces</li>
                                <li><span className={styles.featureDot}></span>Integrating disconnected systems</li>
                                <li><span className={styles.featureDot}></span>Embedding AI-driven capabilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
