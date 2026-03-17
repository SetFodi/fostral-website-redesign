import Editable from '@/components/cms/Editable';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
    return (
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <div className={styles.sectionHeaderCenter}>
                    <Editable k="home.experience.badge" as="div" className={styles.sectionLabel} style={{ justifyContent: 'center' }}>Experience That Matters</Editable>
                    <h2 className={styles.sectionTitle}>
                        <Editable k="home.experience.title">Working across the full business cycle</Editable>
                    </h2>
                    <Editable k="home.experience.description" as="p" className={styles.sectionSubtitle}>
                        With over 10 years of hands-on experience in business software, we understand how organisations truly operate.
                    </Editable>
                </div>

                <div className={styles.experienceGrid}>
                    <div className={styles.experCard}>
                        <div className={styles.experNum}>01</div>
                        <h3><Editable k="home.experience.card0Title">Demand Generation</Editable></h3>
                        <p><Editable k="home.experience.card0Desc">Managing the initial customer contact, marketing automation, and revenue pipeline visibility.</Editable></p>
                    </div>
                    <div className={styles.experCard}>
                        <div className={styles.experNum}>02</div>
                        <h3><Editable k="home.experience.card1Title">Operational Execution</Editable></h3>
                        <p><Editable k="home.experience.card1Desc">Orchestrating manufacturing, inventory, logistics, and service delivery workflows seamlessly.</Editable></p>
                    </div>
                    <div className={styles.experCard}>
                        <div className={styles.experNum}>03</div>
                        <h3><Editable k="home.experience.card2Title">Financial Control</Editable></h3>
                        <p><Editable k="home.experience.card2Desc">Connecting all operations into one coherent accounting, reporting, and consolidation environment.</Editable></p>
                    </div>
                </div>

                <div className={styles.conclusionText}>
                    <Editable k="home.experience.conclusion" as="p">
                        From service delivery to performance visibility.<br />
                        Our strength lies in connecting these elements into one coherent, efficient digital environment.
                    </Editable>
                </div>
            </div>
        </section>
    );
}
