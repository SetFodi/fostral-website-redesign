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
                            <h3>Practical AI Technologies</h3>
                            <p>We enhance business software with practical AI technologies:</p>
                            <div className={styles.aiModules}>
                                <span className={styles.moduleTag}>Intelligent document recognition</span>
                                <span className={styles.moduleTag}>Automated data extraction</span>
                                <span className={styles.moduleTag}>Data validation &amp; classification</span>
                                <span className={styles.moduleTag}>Cross-system data exchange</span>
                                <span className={styles.moduleTag}>Workflow automation</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutText}>
                        <div className={styles.sectionLabel}>Smarter Systems with AI</div>
                        <h2 className={styles.sectionTitle}>
                            Reduce manual work.<br />Increase accuracy.<br />Accelerate decisions.
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Our focus is simple: reduce manual work, increase accuracy, and accelerate decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
