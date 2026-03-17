import Editable from '@/components/cms/Editable';
import styles from './AISection.module.css';

export default function AISection() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <div className={styles.aboutGrid}>
                    <div className={styles.aboutVisual}>
                        <div className={styles.aboutCard}>
                            <div className={styles.aboutCardIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <h3><Editable k="home.ai.cardTitle">Practical AI Technologies</Editable></h3>
                            <p><Editable k="home.ai.cardDescription">We enhance business software with practical AI technologies:</Editable></p>
                            <div className={styles.aiModules}>
                                <Editable k="home.ai.module0" as="span" className={styles.moduleTag}>Intelligent document recognition</Editable>
                                <Editable k="home.ai.module1" as="span" className={styles.moduleTag}>Automated data extraction</Editable>
                                <Editable k="home.ai.module2" as="span" className={styles.moduleTag}>Data validation &amp; classification</Editable>
                                <Editable k="home.ai.module3" as="span" className={styles.moduleTag}>Cross-system data exchange</Editable>
                                <Editable k="home.ai.module4" as="span" className={styles.moduleTag}>Workflow automation</Editable>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutText}>
                        <Editable k="home.ai.badge" as="div" className={styles.sectionLabel}>Smarter Systems with AI</Editable>
                        <h2 className={styles.sectionTitle}>
                            <Editable k="home.ai.title">Reduce manual work.<br />Increase accuracy.<br />Accelerate decisions.</Editable>
                        </h2>
                        <Editable k="home.ai.description" as="p" className={styles.sectionSubtitle}>
                            Our focus is simple: reduce manual work, increase accuracy, and accelerate decisions.
                        </Editable>
                    </div>
                </div>
            </div>
        </section>
    );
}
