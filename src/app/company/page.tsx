import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Editable from '@/components/cms/Editable';
import styles from './Company.module.css';

export default function CompanyPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>

                <section className={styles.header}>
                    <div className={styles.container}>
                        <Editable k="company.header.badge" as="div" className={styles.sectionLabel}>Company</Editable>
                        <h1 className={styles.title}>
                            <Editable k="company.header.title">Engineering Business Software</Editable>
                        </h1>
                        <Editable k="company.header.subtitle" as="div" className={styles.subtitle}>
                            <p>Fostral is a business software engineering company and digital innovation partner helping organisations design and operate modern business management systems.</p>
                            <br/>
                            <p>Our work focuses on building software environments that allow companies to manage their operations with clarity, efficiency, and confidence.</p>
                            <br/>
                            <p>When approaching a project, our priorities remain simple:<br/>
                            First &ndash; the business solution.<br/>
                            Second &ndash; the system architecture.<br/>
                            Third &ndash; smooth and practical adoption by the organisation.</p>
                            <br/>
                            <p>Technology alone does not solve business problems. It must support the way companies actually operate.</p>
                        </Editable>
                    </div>
                </section>

                <section className={styles.storySection}>
                    <div className={styles.container}>
                        <div className={styles.twoColGrid}>

                            <div className={styles.textBlock}>
                                <h2><Editable k="company.story.title">Our Story</Editable></h2>
                                <Editable k="company.story.body" as="div">
                                    <p>Fostral was not created around a single product or technology. It evolved naturally through exposure to real business challenges and the constant evolution of enterprise software.</p>
                                    <br/>
                                    <p>The earliest projects date back to 2010&ndash;2012, when our team began working with CRM systems such as SugarCRM, designing solutions for customer management and early eCommerce environments &mdash; at a time when website builders and integrated business platforms were still far from mainstream.</p>
                                    <br/>
                                    <p>From there, the journey expanded into custom-built CRM solutions, operational systems, and integrations connecting multiple business tools together.</p>
                                    <br/>
                                    <p>Along the way, we were exposed to large-scale enterprise engineering approaches coming from global technology ecosystems, including methodologies influenced by the Silicon Valley software culture. These experiences helped shape a deeper understanding of how enterprise systems are designed, scaled, and maintained.</p>
                                    <br/>
                                    <p>Over time, this combination of practical business exposure and enterprise architecture thinking shaped the philosophy behind Fostral.</p>
                                    <br/>
                                    <p>Our objective has never been to promise the Everest of technology. It has always been to design systems that actually serve their purpose and deliver value to the business.</p>
                                </Editable>
                            </div>

                            <div className={styles.textBlock}>
                                <h2><Editable k="company.experience.title">Experience Across Industries and Regions</Editable></h2>
                                <Editable k="company.experience.body" as="div">
                                    <p>Over more than a decade, our work has extended across multiple industries and operational environments.</p>
                                    <br/>
                                    <p>We have delivered solutions for organisations ranging from growing businesses to highly specialised operational environments, including projects that required complex integrations, niche workflows, and highly customised software structures.</p>
                                    <br/>
                                    <p>Our teams have experience operating across multiple regions, delivering solutions adapted to different regulatory environments and operational realities.</p>
                                    <br/>
                                    <p>Clients often approach Fostral when they require:</p>
                                    <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
                                        <li>deep customisation of business systems</li>
                                        <li>integration between complex software environments</li>
                                        <li>solutions tailored to specialised industry processes</li>
                                        <li>systems capable of operating across multiple entities or regions</li>
                                    </ul>
                                    <p>Our approach combines European engineering standards with global delivery capabilities, allowing us to support organisations in a variety of markets.</p>
                                </Editable>
                            </div>

                        </div>
                    </div>
                </section>

                <section className={styles.foundersSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionCenterHeader}>
                            <Editable k="company.founders.badge" as="div" className={styles.sectionLabel}>Leadership</Editable>
                            <h2><Editable k="company.founders.title">Founders</Editable></h2>
                            <p style={{ marginTop: '1rem', color: 'var(--gray-600)' }}>
                                <Editable k="company.founders.description">Fostral was founded by professionals combining backgrounds in business operations and enterprise software engineering.</Editable>
                            </p>
                        </div>

                        <div className={styles.foundersGrid}>
                            <div className={styles.founderCard} style={{ textAlign: 'center' }}>
                                <div className={styles.founderImagePlaceholder} style={{ margin: '0 auto 1.5rem' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <h3><Editable k="company.founder1.name">Andrius Jankevicius</Editable></h3>
                                <Editable k="company.founder1.role" as="p" className={styles.founderRole}>Co-Founder</Editable>
                            </div>

                            <div className={styles.founderCard} style={{ textAlign: 'center' }}>
                                <div className={styles.founderImagePlaceholder} style={{ margin: '0 auto 1.5rem' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <h3><Editable k="company.founder2.name">Justinas Valeskis</Editable></h3>
                                <Editable k="company.founder2.role" as="p" className={styles.founderRole}>Co-Founder</Editable>
                            </div>
                        </div>

                        <p style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--gray-600)' }}>
                            <Editable k="company.founders.conclusion">Together they bring experience across business systems architecture, operational process design, and international project delivery.</Editable>
                        </p>
                    </div>
                </section>

                <section className={styles.philosophySection}>
                    <div className={styles.container}>
                        <div className={styles.philosophyBox}>
                            <div className={styles.philosophyGrid}>

                                <div className={styles.philBlock}>
                                    <div className={styles.philIcon}>✓</div>
                                    <h3><Editable k="company.whyFostral.title">Why Fostral</Editable></h3>
                                    <Editable k="company.whyFostral.body" as="div">
                                        <p>Selecting and implementing business software is rarely just a technical decision. It is a strategic step that shapes how a company operates for years to come.</p>
                                        <br/>
                                        <p>At Fostral, we approach every solution with a combination of business understanding, technical expertise, and long-term responsibility for the outcome.</p>
                                        <br/>
                                        <p>Clients choose Fostral because we are able to:</p>
                                        <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0', opacity: 0.8 }}>
                                            <li>translate operational challenges into structured digital solutions</li>
                                            <li>combine standard platforms with tailored modules where required</li>
                                            <li>connect complex systems into a coherent ecosystem</li>
                                            <li>design user environments that are practical for daily operations</li>
                                            <li>support organisations long after implementation</li>
                                        </ul>
                                        <p>Many of our projects involve environments where operations span multiple systems, divisions, or geographic entities. In these situations, our role is to simplify complexity and create systems that allow leadership teams to operate with clarity and control.</p>
                                        <br/>
                                        <p>For our clients, the outcome is not simply new software &ndash; it is a more organised way of running the business.</p>
                                    </Editable>
                                </div>

                                <div className={styles.philBlock}>
                                    <div className={styles.philIcon}>⚡</div>
                                    <h3><Editable k="company.platform.title">How We Choose the Right Platform</Editable></h3>
                                    <Editable k="company.platform.body" as="div">
                                        <p>Every organisation operates with different levels of complexity, scale, and ambition. Because of this, there is rarely a universal software solution.</p>
                                        <br/>
                                        <p>Our role is to evaluate the operational structure of the business and recommend the platform that best supports its long-term development.</p>
                                        <br/>
                                        <p>For many small and mid-sized organisations, platforms such as Odoo provide a flexible and integrated environment capable of managing finance, operations, and customer relationships within one coherent system.</p>
                                        <br/>
                                        <p>For larger organisations or complex corporate structures, enterprise platforms such as SAP Business Suite provide broader capabilities for governance, multi-entity environments, and large-scale operational management.</p>
                                        <br/>
                                        <p>The choice depends on several factors:</p>
                                        <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0', opacity: 0.8 }}>
                                            <li>operational complexity</li>
                                            <li>number of business entities</li>
                                            <li>regulatory requirements</li>
                                            <li>integration landscape</li>
                                            <li>strategic growth plans</li>
                                        </ul>
                                        <p>Our objective is always the same:<br/>to ensure the technology serves the business &ndash; not the other way around.</p>
                                    </Editable>
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
