'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Editable from '@/components/cms/Editable';
import styles from './Industries.module.css';

const industriesData = [
    {
        id: 'manufacturing',
        icon: '⚙️',
        title: 'Industrial Manufacturing',
        description: 'Manufacturing environments are built on complex operational chains that begin with raw material sourcing and end with finished product delivery.\n\nThese processes often involve supplier coordination, production planning, manufacturing orders, quality control, warehouse operations, and financial reconciliation. When these elements are managed across multiple disconnected tools or spreadsheets, the risk of delays, inconsistencies, and operational blind spots increases significantly.\n\nFostral designs digital environments that unify the entire manufacturing cycle. Production planning, inventory movements, supplier transactions, and financial reporting operate within a single structured system. Manufacturing orders can be tracked in real time, while production documentation and identification codes for finished goods are generated automatically as items move through each stage of the process.\n\nThis approach is particularly valuable when production facilities and back-office operations are geographically separated, ensuring that finance, logistics, and management always have a reliable view of operational activity.\n\nOur experience in this sector ranges from chemical production to heavy industrial manufacturing, including oil and gas pipeline production, where precision and traceability are essential.\n\nThe result is a manufacturing environment where planning becomes predictable, documentation is generated automatically, and operational teams work from a shared source of truth.'
    },
    {
        id: 'maritime',
        icon: '🚢',
        title: 'Maritime Transportation',
        description: 'The container shipping industry operates within a highly specialised operational framework involving carriers, agents, port authorities, customs services, and freight customers.\n\nMany shipping agents still rely on fragmented workflows involving spreadsheets, manual calculations, and repetitive data handling across multiple systems. This often leads to billing discrepancies, operational delays, and significant administrative overhead.\n\nFostral has developed specialised solutions tailored to maritime transportation, enabling shipping agents to manage the full operational cycle within a single digital environment.\n\nThese systems allow organisations to manage container movements, quotations, billing cycles, vendor invoices, and maritime documentation while maintaining structured records of each shipment and service transaction.\n\nAn important element of the solution is integration with carrier data feeds. When vessels are scheduled to arrive at port, operational data is automatically synchronised into the system, ensuring all parties have immediate visibility into upcoming shipments and service requirements.\n\nThe result is a unified operational platform that replaces dozens of spreadsheets and manual data processing steps, allowing shipping agents to manage container activity, service charges, and customer interactions with full transparency and control.'
    },
    {
        id: 'wholesale',
        icon: '📦',
        title: 'Wholesale & Distribution',
        description: 'Wholesale and distribution companies depend on accurate inventory control, efficient order processing, and reliable financial tracking.\n\nSales teams, warehouse operations, and finance departments must operate from consistent information in order to prevent stock discrepancies, delayed deliveries, or revenue leakage.\n\nOur solutions enable distributors to coordinate the entire order lifecycle—from quotation and order confirmation to warehouse fulfilment and payment collection—within a single digital environment.\n\nBeyond operational efficiency, many distributors are increasingly expanding into portal-based and automated sales models, allowing customers to place orders directly through online platforms. Modern systems also enable intelligent request capture, allowing incoming customer communications to be automatically structured and routed to sales teams without losing critical information.\n\nBy integrating sales operations, inventory management, and financial processes, distributors gain a reliable view of stock availability, sales performance, and customer demand patterns, allowing management teams to make better-informed planning decisions.'
    },
    {
        id: 'retail',
        icon: '🛍️',
        title: 'Boutique Retail & Online Stores',
        description: 'Retail businesses operate in a highly dynamic environment where sales transactions, inventory levels, and customer interactions must be monitored continuously.\n\nFor boutique retail chains and independent store networks, the ability to consolidate sales activity across multiple points of sale—both physical and online—is essential for maintaining accurate financial and operational oversight.\n\nOur solutions allow retailers to track daily transactions across all sales channels within a unified system. Inventory levels can be synchronised across central warehouses and store locations, ensuring that stock availability reflects real demand patterns.\n\nAutomated replenishment mechanisms can detect fast-moving products and trigger restocking processes before shortages occur. At the same time, retailers gain the ability to manage supplier orders, product lifecycles, and expiration-sensitive goods through structured inventory processes.\n\nCustomer loyalty programmes also play an important role in this environment. Integrated loyalty systems allow retailers to build long-term customer relationships through membership programmes, personalised promotions, and targeted communication.\n\nPerhaps most importantly, retail operations can connect seamlessly with online storefronts, allowing product availability and pricing to remain synchronised across digital and physical channels. Customers can view real-time availability and select delivery or pickup options from the most convenient location.'
    },
    {
        id: 'food',
        icon: '🌾',
        title: 'Food & Beverage Production',
        description: 'Food and beverage producers operate at the intersection of manufacturing, agriculture, supply chain coordination, and strict regulatory oversight.\n\nThese organisations must track raw material sourcing, batch production, quality control, packaging processes, and distribution channels while maintaining compliance with safety and traceability standards.\n\nOur solutions provide structured oversight of the entire production cycle—from agricultural inputs and crop planning to manufacturing batches, quality assurance, and product distribution.\n\nProduction data, supplier information, and operational metrics are captured within a single environment, allowing producers to maintain full traceability across the supply chain. This capability is particularly important in food safety environments where rapid product tracking and recall management may become necessary.\n\nBy digitising production and supply chain workflows, food and beverage companies gain improved planning capabilities, stronger compliance control, and clearer operational visibility.'
    },
    {
        id: 'services',
        icon: '🤝',
        title: 'Professional Services',
        description: 'Professional service organisations, such as consulting firms, legal practices, and accountancy firms, rely heavily on structured information management and time coordination.\n\nTheir work often involves managing complex client relationships, maintaining detailed documentation, and tracking communications across multiple engagements.\n\nOur solutions provide a centralised environment where client interactions, project documentation, financial records, and communication history can be managed consistently.\n\nFirms gain the ability to track project timelines, manage task scheduling, monitor time allocation, and generate financial documentation linked directly to service delivery.\n\nThis allows service organisations to maintain full visibility over client engagements while ensuring that important details, communications, and contractual documentation remain properly organised.\n\nIn addition, organisations operating in service-heavy environments, such as wellness centres or specialised clinics can benefit from integrated appointment scheduling, client management, and payment processing capabilities within the same system.'
    },
    {
        id: 'hospitality',
        icon: '🛎️',
        title: 'Hospitality & Tourism',
        description: 'Hospitality businesses operate in an environment where service quality, operational coordination, and customer experience must remain consistently high despite fluctuating demand.\n\nHotels, guest houses, and tourism operators often face the challenge of managing staff availability, facility operations, inventory supplies, and customer bookings simultaneously.\n\nEffective planning becomes especially important during seasonal peaks, when staffing levels, housekeeping schedules, and operational readiness must be aligned precisely with guest demand.\n\nOur solutions help hospitality operators coordinate these activities within a unified system. Human resource planning, facility management, procurement processes, and booking activities can all be synchronised to ensure smooth daily operations.\n\nHospitality businesses frequently operate as hybrid environments combining accommodation services, food and beverage operations, wellness services, and event management. Digital systems help organise these different activities within a single operational framework.\n\nThis allows management teams to maintain structured planning across departments while ensuring consistent customer service, efficient payment processing, and reliable back-office coordination.'
    }
];

export default function IndustriesPage() {
    const [activeTab, setActiveTab] = useState(industriesData[0].id);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && industriesData.find(ind => ind.id === hash)) {
                setActiveTab(hash);
                document.getElementById('industries-content')?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const activeContent = industriesData.find(ind => ind.id === activeTab);

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.header}>
                    <div className={styles.container}>
                        <Editable k="industries.header.badge" as="div" className={styles.sectionLabel}>Industries</Editable>
                        <h1 className={styles.title}>
                            <Editable k="industries.header.title">Technology shaped around<br />real industries</Editable>
                        </h1>
                        <Editable k="industries.header.subtitle" as="p" className={styles.subtitle}>
                            Every industry operates with its own operational rhythm, regulatory environment, and business logic. At Fostral, we design business management solutions that reflect these realities rather than forcing organisations to adapt to generic software structures.<br /><br />
                            Our experience spans industries where process coordination, operational visibility, and reliable data flows are essential for running the business effectively.
                        </Editable>
                    </div>
                </section>

                <section id="industries-content" className={styles.tabsSection} style={{ scrollMarginTop: '100px' }}>
                    <div className={styles.container}>
                        <div className={styles.tabsLayout}>
                            <div className={styles.tabsList}>
                                {industriesData.map((ind) => (
                                    <button
                                        key={ind.id}
                                        className={`${styles.tabBtn} ${activeTab === ind.id ? styles.activeTab : ''}`}
                                        onClick={() => setActiveTab(ind.id)}
                                    >
                                        <span className={styles.tabIcon}>{ind.icon}</span>
                                        <Editable k={`industries.tab.${ind.id}`}>{ind.title}</Editable>
                                    </button>
                                ))}
                            </div>

                            <div className={styles.tabContent}>
                                {activeContent && (
                                    <div className={styles.contentCard}>
                                        <div className={styles.contentHeader}>
                                            <span className={styles.contentIcon}>{activeContent.icon}</span>
                                            <h2><Editable k={`industries.${activeContent.id}.title`}>{activeContent.title}</Editable></h2>
                                        </div>

                                        <div className={styles.contentText}>
                                            <Editable k={`industries.${activeContent.id}.description`} as="div">
                                                {activeContent.description.split('\n\n').map((paragraph, idx) => (
                                                    <p key={idx}>{paragraph}</p>
                                                ))}
                                            </Editable>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.closingSection}>
                    <div className={styles.container}>
                        <div className={styles.closingBox}>
                            <h2><Editable k="industries.closing.title">Ready to streamline your industry operations?</Editable></h2>
                            <p><Editable k="industries.closing.description">Book a free consultation and let&apos;s map out your digital transformation.</Editable></p>
                            <Link href="/contact" className={styles.btnCta}>
                                <Editable k="industries.closing.cta">Contact Us</Editable>
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
