'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setActiveMenu(null);
        setMobileOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} onMouseLeave={() => setActiveMenu(null)}>
            <div className={styles.navInner}>
                <Link href="/" className={styles.navLogo}>
                    <Image src="/fostral_logo.png" alt="Fostral" width={120} height={36} priority />
                </Link>

                {/* Hamburger Button */}
                <button
                    className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Desktop Links */}
                <div className={styles.navLinks}>

                    {/* Services Dropdown */}
                    <div
                        className={styles.navItem}
                        onMouseEnter={() => setActiveMenu('services')}
                    >
                        <Link href="/services" className={styles.navLink}>
                            Services <span className={styles.chevron}></span>
                        </Link>

                        {/* Mega Menu Content */}
                        <div className={`${styles.megaMenu} ${activeMenu === 'services' ? styles.megaMenuOpen : ''}`}>
                            <div className={styles.megaContainer}>
                                <div className={styles.megaSidebar}>
                                    <h3>Our Approach</h3>
                                    <p>End-to-end digital transformation methodology designed for complex operational environments.</p>
                                    <Link href="/services" className={styles.megaAction}>View All Services &rarr;</Link>
                                </div>
                                <div className={styles.megaContent}>
                                    <div className={styles.megaGrid}>
                                        <Link href="/services#digital-assessment" className={styles.megaCard}>
                                            <div className={styles.megaIcon}>1</div>
                                            <h4>Digital Assessment</h4>
                                            <p>Evaluating existing systems, mapping workflows, and identifying automation opportunities.</p>
                                        </Link>
                                        <Link href="/services#solution-design" className={styles.megaCard}>
                                            <div className={styles.megaIcon}>2</div>
                                            <h4>Solution Design</h4>
                                            <p>Architecting technical blueprints and functional scopes for optimal process execution.</p>
                                        </Link>
                                        <Link href="/services#system-implementation" className={styles.megaCard}>
                                            <div className={styles.megaIcon}>3</div>
                                            <h4>System Implementation</h4>
                                            <p>Configuring, developing, and deploying enterprise-grade business software environments.</p>
                                        </Link>
                                        <Link href="/services#integration-automation" className={styles.megaCard}>
                                            <div className={styles.megaIcon}>4</div>
                                            <h4>Integration & Support</h4>
                                            <p>Connecting third-party platforms and providing continuous operational support.</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Dropdown */}
                    <div
                        className={styles.navItem}
                        onMouseEnter={() => setActiveMenu('solutions')}
                    >
                        <Link href="/solutions" className={styles.navLink}>
                            Solutions <span className={styles.chevron}></span>
                        </Link>

                        {/* Mega Menu Content */}
                        <div className={`${styles.megaMenu} ${activeMenu === 'solutions' ? styles.megaMenuOpen : ''}`}>
                            <div className={styles.megaContainer}>
                                <div className={styles.megaSidebar}>
                                    <h3>Platforms</h3>
                                    <p>We build and integrate systems using world-class operational foundations.</p>
                                    <Link href="/solutions" className={styles.megaAction}>Explore Solutions &rarr;</Link>
                                </div>
                                <div className={styles.megaContent}>
                                    <div className={styles.megaList}>
                                        <div className={styles.megaListCol}>
                                            <h4>Odoo ERP</h4>
                                            <Link href="/solutions#mrp-warehouse">Manufacturing & MRP</Link>
                                            <Link href="/solutions#sales-order">Sales & CRM</Link>
                                            <Link href="/solutions#mrp-warehouse">Inventory & Warehouse</Link>
                                            <Link href="/solutions#cfo-consolidator">Corporate Finance & Accounting</Link>
                                            <Link href="/solutions#hcm-payroll">Human Resources</Link>
                                        </div>
                                        <div className={styles.megaListCol}>
                                            <h4>Enterprise</h4>
                                            <Link href="/solutions#sap-s4hana-public">SAP S/4HANA Cloud</Link>
                                            <Link href="/solutions#sap-data-cloud">SAP Business Data Cloud</Link>
                                            <Link href="/solutions#google-collaboration">Google Workspace Ecosystem</Link>
                                            <h4 style={{ marginTop: '1.5rem' }}>Specialised</h4>
                                            <Link href="/solutions#unique-workflows">Custom Built Applications</Link>
                                            <Link href="/solutions#rpa-connectors">RPA & AI Extensions</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/industries" className={styles.navLink} onMouseEnter={() => setActiveMenu(null)}>Industries</Link>
                    <Link href="/company" className={styles.navLink} onMouseEnter={() => setActiveMenu(null)}>Company</Link>

                    <LanguageSwitcher variant="desktop" />

                    <Link href="/contact" className={styles.btnNav}>Book a Call</Link>
                </div>

                {/* Mobile Drawer */}
                <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}>
                    <div className={styles.mobileLinks}>
                        <LanguageSwitcher variant="mobile" />
                        <Link href="/services" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Services</Link>
                        <Link href="/solutions" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Solutions</Link>
                        <Link href="/industries" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Industries</Link>
                        <Link href="/company" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Company</Link>
                        <Link href="/blogs" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Blog</Link>
                        <Link href="/contact" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>
                            Book a Call
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                        </Link>
                    </div>
                </div>
                {mobileOpen && <div className={styles.mobileBackdrop} onClick={() => setMobileOpen(false)} />}
            </div>
        </nav>
    );
}
