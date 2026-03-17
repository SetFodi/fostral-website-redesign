import Link from 'next/link';
import Image from 'next/image';
import Editable from '@/components/cms/Editable';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerBrand}>
                    <Image src="/fostral_logo.png" alt="Fostral" width={100} height={30} className={styles.footerLogo} />
                    <Editable k="footer.tagline" as="div" className={styles.footerTagline}>Fostering Your Growth</Editable>
                    <Editable k="footer.legal" as="div" className={styles.footerLegal}>
                        Fostral MB, Raugyklos g. 17-R78,<br />
                        LT-01140 Vilnius, Lithuania<br />
                        Reg. No. 305508450 &middot; VAT LT100013047212<br /><br />
                        Skywish O&Uuml;, M&otilde;isa 4,<br />
                        13522 Tallinn, Estonia<br />
                        Reg. No. 1202605
                    </Editable>
                </div>
                <div className={styles.footerLinksCol}>
                    <h5>Company</h5>
                    <Link href="/services">Services</Link>
                    <Link href="/company">About</Link>
                    <Link href="#">Careers</Link>
                </div>
                <div className={styles.footerLinksCol}>
                    <h5>Resources</h5>
                    <Link href="#">Case Studies</Link>
                    <Link href="/blogs">Blog</Link>
                    <Link href="#">Documentation</Link>
                </div>
                <div className={styles.footerLinksCol}>
                    <h5>Legal</h5>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                </div>
            </div>
            <div className={styles.footerBottom}>
                &copy; {new Date().getFullYear()} Fostral Consulting. All rights reserved.
            </div>
        </footer>
    );
}
