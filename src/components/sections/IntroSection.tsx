import Editable from '@/components/cms/Editable';
import styles from './IntroSection.module.css';

export default function IntroSection() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <div className={styles.aboutGrid}>
                    <div className={styles.aboutText}>
                        <Editable k="home.intro.badge" as="div" className={styles.sectionLabel}>Value Proposition</Editable>
                        <h2 className={styles.sectionTitle}>
                            <Editable k="home.intro.title">Bringing clarity to{'\n'}everyday business</Editable>
                        </h2>
                        <Editable k="home.intro.description" as="p" className={styles.sectionSubtitle}>
                            Fostral is an IT services company specialising in business management software. We design, implement, and optimise digital systems that bring clarity, efficiency, and control to everyday business operations.
                        </Editable>
                        <Editable k="home.intro.description2" as="p" className={styles.sectionSubtitle} style={{ marginTop: '1rem' }}>
                            From first customer contact to financial reporting &ndash; we connect, automate, and streamline the way your business works.
                        </Editable>
                    </div>
                    <div className={styles.aboutVisual}>
                        <div className={styles.aboutCard}>
                            <div className={styles.aboutCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                            </div>
                            <h3><Editable k="home.intro.cardTitle">What We Do</Editable></h3>
                            <p><Editable k="home.intro.cardDescription">We support organisations in transforming complex workflows into intelligent, structured, and user-friendly digital environments.</Editable></p>
                            <ul className={styles.featureList} style={{ marginTop: '1.5rem' }}>
                                <li><span className={styles.featureDot}></span><Editable k="home.intro.feature0">Automating core business processes</Editable></li>
                                <li><span className={styles.featureDot}></span><Editable k="home.intro.feature1">Digitising operational workflows</Editable></li>
                                <li><span className={styles.featureDot}></span><Editable k="home.intro.feature2">Simplifying customer journeys</Editable></li>
                                <li><span className={styles.featureDot}></span><Editable k="home.intro.feature3">Designing clean, intuitive interfaces</Editable></li>
                                <li><span className={styles.featureDot}></span><Editable k="home.intro.feature4">Integrating disconnected systems</Editable></li>
                                <li><span className={styles.featureDot}></span><Editable k="home.intro.feature5">Embedding AI-driven capabilities</Editable></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
