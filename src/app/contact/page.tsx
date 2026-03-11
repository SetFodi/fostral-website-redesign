import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './Contact.module.css';

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.contactSection}>
                    <div className={styles.container}>
                        <div className={styles.contactGrid}>

                            <div className={styles.contactInfo}>
                                <div className={styles.sectionLabel}>Contact</div>
                                <h1 className={styles.title}>Let&apos;s talk</h1>
                                <p className={styles.subtitle}>
                                    Reach out to our founding team directly &mdash; no sales reps, no forms, just a conversation.
                                </p>

                                {/* Contact cards from HTML mockup */}
                                <div className={styles.infoCards}>
                                    <div className={styles.infoCard}>
                                        <div className={styles.contactAvatar}>AJ</div>
                                        <div>
                                            <h3>Andrius Jankevi&#269;ius</h3>
                                            <div className={styles.contactRole}>CTO &amp; Co-Founder</div>
                                            <div className={styles.contactLinks}>
                                                <a href="mailto:aj@fostral.net">aj@fostral.net</a>
                                                <a href="tel:+37069679929">+370 696 79 929</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.infoCard}>
                                        <div className={styles.contactAvatar}>JV</div>
                                        <div>
                                            <h3>Justinas Valeskis</h3>
                                            <div className={styles.contactRole}>CCO &amp; Co-Founder</div>
                                            <div className={styles.contactLinks}>
                                                <a href="mailto:jv@fostral.net">jv@fostral.net</a>
                                                <a href="tel:+37069679929">+370 696 79 929</a>
                                                <a href="tel:+35677236424">+356 772 36 424</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Legal info */}
                                <div className={styles.legalInfo}>
                                    <p>Fostral MB, Raugyklos g. 17-R78,<br/>LT-01140 Vilnius, Lithuania<br/>Reg. No. 305508450 &middot; VAT LT100013047212</p>
                                    <br/>
                                    <p>Skywish O&Uuml;, M&otilde;isa 4,<br/>13522 Tallinn, Estonia<br/>Reg. No. 1202605</p>
                                </div>
                            </div>

                            <div className={styles.contactFormWrapper}>
                                <div className={styles.formCard}>
                                    <h2>Contact Us</h2>
                                    <p className={styles.formSubtitle}>We&apos;ll work around its customisation, so we know the nature of request.</p>
                                    <form action="mailto:aj@fostral.net" method="post" encType="text/plain" className={styles.form}>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" id="name" name="name" required placeholder="Your name" />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" name="email" required placeholder="you@company.com" />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="message">How can we help?</label>
                                            <textarea id="message" name="message" rows={5} required placeholder="Briefly describe your project or area of interest..."></textarea>
                                        </div>

                                        <button type="submit" className={styles.submitBtn}>
                                            Send Request
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
