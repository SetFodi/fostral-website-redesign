import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Editable from '@/components/cms/Editable';
import styles from './Services.module.css';

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>

                <section className={styles.header}>
                    <div className={styles.container}>
                        <Editable k="services.header.badge" as="div" className={styles.sectionLabel}>Services</Editable>
                        <h1 className={styles.title}>
                            <Editable k="services.header.title">Designing clarity.<br />Delivering efficiency.<br />Enabling control.</Editable>
                        </h1>
                        <Editable k="services.header.subtitle" as="p" className={styles.subtitle}>
                            We help organisations analyse, design, implement, and evolve business management software and digital processes.<br />
                            Our services cover the full journey &ndash; from assessment to long-term optimisation.
                        </Editable>
                    </div>
                </section>

                <section className={styles.stepsSection}>
                    <div className={styles.container}>

                        <div id="digital-assessment" className={styles.stepBlock}>
                            <div className={styles.stepNum}>Step 1</div>
                            <div className={styles.stepContent}>
                                <h2><Editable k="services.step1.title">Digital Assessment</Editable></h2>
                                <p><Editable k="services.step1.intro">Successful digital transformation starts with understanding the current reality. We analyse:</Editable></p>
                                <ul>
                                    <li><Editable k="services.step1.list0">Existing software and tools</Editable></li>
                                    <li><Editable k="services.step1.list1">How effectively systems are used</Editable></li>
                                    <li><Editable k="services.step1.list2">Process efficiency and bottlenecks</Editable></li>
                                    <li><Editable k="services.step1.list3">Manual workloads and duplication</Editable></li>
                                    <li><Editable k="services.step1.list4">Data accuracy and inconsistencies</Editable></li>
                                    <li><Editable k="services.step1.list5">Risk of human error and time loss</Editable></li>
                                    <li><Editable k="services.step1.list6">Alignment between business model and technology</Editable></li>
                                </ul>
                                <Editable k="services.step1.outcome" as="p" className={styles.outcome}>
                                    <strong>The outcome is a structured view of:</strong><br />
                                    Your current digital landscape, process gaps and inefficiencies, automation opportunities, and practical improvement paths. We provide clear, prioritised recommendations based on industry best practices.
                                </Editable>
                            </div>
                        </div>

                        <div id="solution-design" className={styles.stepBlock}>
                            <div className={styles.stepNum}>Step 2</div>
                            <div className={styles.stepContent}>
                                <h2><Editable k="services.step2.title">Solution Design</Editable></h2>
                                <p><Editable k="services.step2.intro">Once opportunities are identified, we design the optimal path forward. We define:</Editable></p>
                                <ul>
                                    <li><Editable k="services.step2.list0">Future system architecture &amp; process automation models</Editable></li>
                                    <li><Editable k="services.step2.list1">Functional scope and priorities</Editable></li>
                                    <li><Editable k="services.step2.list2">Standard vs custom components</Editable></li>
                                    <li><Editable k="services.step2.list3">Data structure and master data strategy</Editable></li>
                                </ul>
                                <Editable k="services.step2.body" as="p">
                                    Where processes follow common industry patterns, design is fast and straightforward. For niche operations, we engineer tailored solutions.<br /><br />
                                    Fostral has extensive experience designing solutions for complex sectors including <strong>Maritime &amp; Shipping, Oil &amp; Gas, Heavy Manufacturing, and Cargo &amp; Transportation</strong>.
                                </Editable>
                                <Editable k="services.step2.outcome" as="p" className={styles.outcome}>
                                    Every design phase results in a structured blueprint &mdash; the foundation for predictable, controlled implementation.
                                </Editable>
                            </div>
                        </div>

                        <div id="system-implementation" className={styles.stepBlock}>
                            <div className={styles.stepNum}>Step 3</div>
                            <div className={styles.stepContent}>
                                <h2><Editable k="services.step3.title">System Implementation</Editable></h2>
                                <p><Editable k="services.step3.intro">We transform design into a working digital environment. Stages typically include:</Editable></p>
                                <ul>
                                    <li><Editable k="services.step3.list0">Infrastructure &amp; environment setup</Editable></li>
                                    <li><Editable k="services.step3.list1">System configuration &amp; custom development</Editable></li>
                                    <li><Editable k="services.step3.list2">Testing, validation &amp; debugging</Editable></li>
                                    <li><Editable k="services.step3.list3">Go-live, deployment &amp; user training</Editable></li>
                                </ul>
                                <Editable k="services.step3.body" as="p">
                                    Development and testing environments are managed within Fostral&apos;s infrastructure, while production systems are deployed according to customer preference &mdash; cloud or on-premise.
                                </Editable>
                                <Editable k="services.step3.outcome" as="p" className={styles.outcome}>
                                    We ensure structured execution, transparent timelines, progress visibility, and controlled delivery cycles.
                                </Editable>
                            </div>
                        </div>

                        <div id="integration-automation" className={styles.stepBlock}>
                            <div className={styles.stepNum}>Step 4</div>
                            <div className={styles.stepContent}>
                                <h2><Editable k="services.step4.title">Third-Party Integration &amp; Automation</Editable></h2>
                                <Editable k="services.step4.intro" as="p">Modern businesses rely on connected systems. We help organisations seamlessly link software, platforms, and data flows.</Editable>
                                <ul>
                                    <li><Editable k="services.step4.list0">Third-party business &amp; government compliance systems</Editable></li>
                                    <li><Editable k="services.step4.list1">Banking, payment services &amp; supplier portals</Editable></li>
                                    <li><Editable k="services.step4.list2">eCommerce &amp; tracking/logistics systems</Editable></li>
                                    <li><Editable k="services.step4.list3">Analytics and reporting tools</Editable></li>
                                </ul>
                                <Editable k="services.step4.body" as="p">
                                    Beyond integrations, we implement intelligent automation mechanisms, including robotic process automation (RPA), to handle repetitive, rule-based tasks.
                                </Editable>
                                <Editable k="services.step4.outcome" as="p" className={styles.outcome}>
                                    <strong>The objective is simple:</strong> Eliminate manual effort, reduce errors, accelerate operations, and improve data consistency.
                                </Editable>
                            </div>
                        </div>

                        <div id="continuous-support" className={styles.stepBlock} style={{ borderBottom: 'none' }}>
                            <div className={styles.stepNum}>Step 5</div>
                            <div className={styles.stepContent}>
                                <h2><Editable k="services.step5.title">Continuous Support &amp; Enhancement</Editable></h2>
                                <p><Editable k="services.step5.intro">Digital transformation does not end at go-live. We work closely with our clients to:</Editable></p>
                                <ul>
                                    <li><Editable k="services.step5.list0">Enhance functionality &amp; optimise workflows</Editable></li>
                                    <li><Editable k="services.step5.list1">Introduce new features &amp; fine-tune UX</Editable></li>
                                    <li><Editable k="services.step5.list2">Expand automation</Editable></li>
                                </ul>
                                <Editable k="services.step5.body" as="p">
                                    Our customers value our support because we respond quickly, act with care, and provide advisory guidance with account-level attention.
                                </Editable>
                                <Editable k="services.step5.outcome" as="p" className={styles.outcome}>
                                    Our service agreements typically cover 1 to 3 years of continuous support following implementation, ensuring stability, confidence, and long-term success.
                                </Editable>
                            </div>
                        </div>

                    </div>
                </section>

                <section className={styles.closingSection}>
                    <div className={styles.container}>
                        <div className={styles.closingBox}>
                            <h2><Editable k="services.closing.title">Technology should simplify business &mdash; not complicate it.</Editable></h2>
                            <p><Editable k="services.closing.description">Let&apos;s build, connect, and optimise systems that truly work for you.</Editable></p>
                            <Link href="/contact" className={styles.btnCta}>
                                <Editable k="services.closing.cta">Contact Us</Editable>
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
