import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import styles from './Services.module.css';

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>

                {/* Header Section */}
                <section className={styles.header}>
                    <div className={styles.container}>
                        <div className={styles.sectionLabel}>Services</div>
                        <h1 className={styles.title}>Designing clarity.<br />Delivering efficiency.<br />Enabling control.</h1>
                        <p className={styles.subtitle}>
                            We help organisations analyse, design, implement, and evolve business management software and digital processes.<br />
                            Our services cover the full journey &ndash; from assessment to long-term optimisation.
                        </p>
                    </div>
                </section>

                {/* Steps Section */}
                <section className={styles.stepsSection}>
                    <div className={styles.container}>

                        {/* Step 1 */}
                        <div id="digital-assessment" className={styles.stepBlock}>
                            <div className={styles.stepNum}>Step 1</div>
                            <div className={styles.stepContent}>
                                <h2>Digital Assessment</h2>
                                <p>Successful digital transformation starts with understanding the current reality. We analyse:</p>
                                <ul>
                                    <li>Existing software and tools</li>
                                    <li>How effectively systems are used</li>
                                    <li>Process efficiency and bottlenecks</li>
                                    <li>Manual workloads and duplication</li>
                                    <li>Data accuracy and inconsistencies</li>
                                    <li>Risk of human error and time loss</li>
                                    <li>Alignment between business model and technology</li>
                                </ul>
                                <p className={styles.outcome}>
                                    <strong>The outcome is a structured view of:</strong><br />
                                    Your current digital landscape, process gaps and inefficiencies, automation opportunities, and practical improvement paths. We provide clear, prioritised recommendations based on industry best practices.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div id="solution-design" className={styles.stepBlock}>
                            <div className={styles.stepNum}>Step 2</div>
                            <div className={styles.stepContent}>
                                <h2>Solution Design</h2>
                                <p>Once opportunities are identified, we design the optimal path forward. We define:</p>
                                <ul>
                                    <li>Future system architecture & process automation models</li>
                                    <li>Functional scope and priorities</li>
                                    <li>Standard vs custom components</li>
                                    <li>Data structure and master data strategy</li>
                                </ul>
                                <p>
                                    Where processes follow common industry patterns, design is fast and straightforward. For niche operations, we engineer tailored solutions.<br /><br />
                                    Fostral has extensive experience designing solutions for complex sectors including <strong>Maritime & Shipping, Oil & Gas, Heavy Manufacturing, and Cargo & Transportation</strong>.
                                </p>
                                <p className={styles.outcome}>
                                    Every design phase results in a structured blueprint &mdash; the foundation for predictable, controlled implementation.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div id="system-implementation" className={styles.stepBlock}>
                            <div className={styles.stepNum}>Step 3</div>
                            <div className={styles.stepContent}>
                                <h2>System Implementation</h2>
                                <p>We transform design into a working digital environment. Stages typically include:</p>
                                <ul>
                                    <li>Infrastructure & environment setup</li>
                                    <li>System configuration & custom development</li>
                                    <li>Testing, validation & debugging</li>
                                    <li>Go-live, deployment & user training</li>
                                </ul>
                                <p>
                                    Development and testing environments are managed within Fostral&apos;s infrastructure, while production systems are deployed according to customer preference &mdash; cloud or on-premise.
                                </p>
                                <p className={styles.outcome}>
                                    We ensure structured execution, transparent timelines, progress visibility, and controlled delivery cycles.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 (Integration) */}
                        <div id="integration-automation" className={styles.stepBlock}>
                            <div className={styles.stepNum}>Step 4</div>
                            <div className={styles.stepContent}>
                                <h2>Third-Party Integration & Automation</h2>
                                <p>Modern businesses rely on connected systems. We help organisations seamlessly link software, platforms, and data flows.</p>
                                <ul>
                                    <li>Third-party business & government compliance systems</li>
                                    <li>Banking, payment services & supplier portals</li>
                                    <li>eCommerce & tracking/logistics systems</li>
                                    <li>Analytics and reporting tools</li>
                                </ul>
                                <p>
                                    Beyond integrations, we implement intelligent automation mechanisms, including robotic process automation (RPA), to handle repetitive, rule-based tasks.
                                </p>
                                <p className={styles.outcome}>
                                    <strong>The objective is simple:</strong> Eliminate manual effort, reduce errors, accelerate operations, and improve data consistency.
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div id="continuous-support" className={styles.stepBlock} style={{ borderBottom: 'none' }}>
                            <div className={styles.stepNum}>Step 5</div>
                            <div className={styles.stepContent}>
                                <h2>Continuous Support & Enhancement</h2>
                                <p>Digital transformation does not end at go-live. We work closely with our clients to:</p>
                                <ul>
                                    <li>Enhance functionality & optimise workflows</li>
                                    <li>Introduce new features & fine-tune UX</li>
                                    <li>Expand automation</li>
                                </ul>
                                <p>
                                    Our customers value our support because we respond quickly, act with care, and provide advisory guidance with account-level attention.
                                </p>
                                <p className={styles.outcome}>
                                    Our service agreements typically cover 1 to 3 years of continuous support following implementation, ensuring stability, confidence, and long-term success.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Closing CTA */}
                <section className={styles.closingSection}>
                    <div className={styles.container}>
                        <div className={styles.closingBox}>
                            <h2>Technology should simplify business &mdash; not complicate it.</h2>
                            <p>Let&apos;s build, connect, and optimise systems that truly work for you.</p>
                            <Link href="/contact" className={styles.btnCta}>
                                Contact Us
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
