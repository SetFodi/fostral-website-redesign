import Link from 'next/link';
import Editable from '@/components/cms/Editable';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaBox}>
                <div className={styles.ctaContent}>
                    <h2><Editable k="home.cta.title">Turnkey, Peace-of-Mind Delivery</Editable></h2>
                    <Editable k="home.cta.description" as="p">
                        We deliver complete, ready-to-operate solutions &ndash; from analysis and design to deployment and optimisation.<br /><br />
                        One partner. Structured execution. Reliable outcomes.<br />
                        So business owners and executives can focus on growth &ndash; not system chaos.
                    </Editable>
                    <div className={styles.actionGroup}>
                        <Link href="/contact" className={styles.btnCta}>
                            <Editable k="home.cta.buttonText">Let&apos;s simplify and automate your business.</Editable>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
