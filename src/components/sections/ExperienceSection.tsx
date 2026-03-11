import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <div className={styles.sectionHeaderCenter}>
                    <div className={styles.sectionLabel} style={{ justifyContent: 'center' }}>Experience That Matters</div>
                    <h2 className={styles.sectionTitle}>Working across the<br />full business cycle</h2>
                    <p className={styles.sectionSubtitle}>
                        With over 10 years of hands-on experience in business software, we understand how organisations truly operate.
                    </p>
                </div>

                <div className={styles.experienceGrid}>
                    <div className={styles.experCard}>
                        <div className={styles.experNum}>01</div>
                        <h3>Demand Generation</h3>
                        <p>Managing the initial customer contact, marketing automation, and revenue pipeline visibility.</p>
                    </div>
                    <div className={styles.experCard}>
                        <div className={styles.experNum}>02</div>
                        <h3>Operational Execution</h3>
                        <p>Orchestrating manufacturing, inventory, logistics, and service delivery workflows seamlessly.</p>
                    </div>
                    <div className={styles.experCard}>
                        <div className={styles.experNum}>03</div>
                        <h3>Financial Control</h3>
                        <p>Connecting all operations into one coherent accounting, reporting, and consolidation environment.</p>
                    </div>
                </div>

                <div className={styles.conclusionText}>
                    <p>
                        From service delivery to performance visibility.<br />
                        Our strength lies in connecting these elements into one coherent, efficient digital environment.
                    </p>
                </div>
            </div>
        </section>
    );
}
