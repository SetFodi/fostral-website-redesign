import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaBox}>
                <div className={styles.ctaContent}>
                    <h2>Turnkey, Peace-of-Mind Delivery</h2>
                    <p>
                        We deliver complete, ready-to-operate solutions &ndash; from analysis and design to deployment and optimisation.<br /><br />
                        One partner. Structured execution. Reliable outcomes.<br />
                        So business owners and executives can focus on growth &ndash; not system chaos.
                    </p>
                    <div className={styles.actionGroup}>
                        <Link href="/contact" className={styles.btnCta}>
                            Let&apos;s simplify and automate your business.
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
