'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Editable from '@/components/cms/Editable';
import styles from './Solutions.module.css';

const solutionsData = [
    {
        id: 'odoo-ecosystem',
        title: 'Odoo ERP Ecosystem',
        description: 'For many growing organisations, the challenge is not the lack of software – but the fragmentation of it. Finance sits in one system, sales in another, and operations somewhere else.\n\nOdoo provides an integrated business management environment where core functions operate within one connected platform. It is particularly well suited for small and mid-sized companies that require enterprise-grade capabilities without the complexity typically associated with large corporate systems.',
        items: [
            { id: 'cfo-consolidator', name: 'CFO Consolidator', desc: 'Cross-entity financial consolidation, multi-company transaction synchronisation, structured approval workflows, and consistent tax reporting.' },
            { id: 'mrp-warehouse', name: 'MRP & Warehouse Management', desc: 'Production planning, bill of materials, inventory tracking, and demand forecasting for greater operational control.' },
            { id: 'sales-order', name: 'Sales & Order Management', desc: 'Unified framework for the entire order lifecycle – quotations, approvals, contracts, fulfilment, and invoicing.' },
            { id: 'crm-b2b', name: 'CRM for B2B', desc: 'Manage opportunity pipelines, customer interactions, sales forecasting, and deal management.' },
            { id: 'crm-marketing', name: 'CRM & Marketing for B2C', desc: 'Orchestrate communication campaigns, marketing automation, lead generation, and customer lifecycle tracking.' },
            { id: 'ecommerce-loyalty', name: 'eCommerce & Customer Loyalty', desc: 'Online store management, product catalogue synchronisation, order fulfilment, and loyalty programmes.' },
            { id: 'hcm-payroll', name: 'HCM & Payroll', desc: 'Manage employees, contracts, leave management, and payroll processes in one structured environment.' },
            { id: 'tax-reporting', name: 'Tax Reporting Management', desc: 'Automated transaction records, approval flows, and reporting frameworks for tax compliance.' },
            { id: 'tender-supplier', name: 'Tender & Supplier Management', desc: 'Tender coordination, vendor comparison, and contract lifecycle visibility for structured procurement.' },
            { id: 'iso-management', name: 'ISO Management', desc: 'Documentation control, quality procedures, audit events, and compliance monitoring.' }
        ]
    },
    {
        id: 'odoo-custom',
        title: 'Odoo Custom Solutions',
        description: 'While standard modules cover most operational needs, many organisations operate in specialised environments that require tailored workflows. Fostral designs custom solutions within the Odoo framework to support unique business models.',
        items: [
            { id: 'unique-workflows', name: 'Unique Workflows', desc: 'Custom workflows and specialised modules for industries like maritime logistics, oil & gas operations, heavy manufacturing, and cargo transportation.' },
            { id: 'rpa-connectors', name: 'RPA Connectors', desc: 'Robotic process automation algorithms allowing software to interact with external systems that lack standard APIs.' },
            { id: 'ai-extensions', name: 'AI Extensions', desc: 'Intelligent automation to recognise document data, extract invoice info, process scanned materials, and automate decisions.' }
        ]
    },
    {
        id: 'sap',
        title: 'SAP Business Suite',
        description: 'For industry leaders or more complex enterprise environments, we implement solutions based on the SAP Business Suite. SAP platforms are widely used by large corporations requiring robust scalability, advanced governance, and industry-specific functionality.',
        items: [
            { id: 'sap-s4hana-public', name: 'SAP S/4HANA Cloud Public', desc: 'Modern enterprise ERP delivered as a managed cloud service with rapid deployment cycles.' },
            { id: 'sap-s4hana-private', name: 'SAP S/4HANA Cloud Private', desc: 'Private cloud deployments providing greater flexibility and deeper customisation options for complex environments.' },
            { id: 'sap-data-cloud', name: 'SAP Business Data Cloud', desc: 'Built on HANA in-memory database to aggregate internal, external, and analytical data models into one trusted environment.' },
            { id: 'sap-business-ai', name: 'SAP Business AI', desc: 'Generative AI capabilities to analyse operational data, automate tasks, and assist employees with decision-making.' }
        ]
    },
    {
        id: 'google',
        title: 'Google Workspace',
        description: 'Alongside operational platforms, organisations require modern collaboration tools. Google Workspace provides a cloud-based productivity environment enabling teams to collaborate, communicate, and manage documents in real time.',
        items: [
            { id: 'google-collaboration', name: 'Collaboration Ecosystem', desc: 'Corporate email infrastructure, shared document governance, video meetings, and cross-team workflow coordination.' }
        ]
    }
];

export default function SolutionsPage() {
    const [activeTab, setActiveTab] = useState(solutionsData[0].id);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (!hash) return;

            const category = solutionsData.find(sol => sol.id === hash);
            if (category) {
                setActiveTab(hash);
                document.getElementById('solutions-content')?.scrollIntoView({ behavior: 'smooth' });
                return;
            }

            let targetCategory: string | null = null;
            solutionsData.forEach(cat => {
                if (cat.items.find(item => item.id === hash)) {
                    targetCategory = cat.id;
                }
            });

            if (targetCategory) {
                setActiveTab(targetCategory);
                setTimeout(() => {
                    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const activeContent = solutionsData.find(sol => sol.id === activeTab);

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.header}>
                    <div className={styles.container}>
                        <Editable k="solutions.header.badge" as="div" className={styles.sectionLabel}>Solutions</Editable>
                        <h1 className={styles.title}>
                            <Editable k="solutions.header.title">Digital platforms that run<br />modern businesses</Editable>
                        </h1>
                        <Editable k="solutions.header.subtitle" as="p" className={styles.subtitle}>
                            At Fostral, we design and implement business management environments built on proven technology platforms.
                            These solutions allow organisations to centralise operations, automate workflows, connect systems, and gain full visibility over their activities.
                            <br /><br />
                            Our approach combines world-class software ecosystems with tailored extensions, allowing each solution to reflect the real operational needs of the organisation.
                        </Editable>
                    </div>
                </section>

                <section id="solutions-content" className={styles.tabsSection} style={{ scrollMarginTop: '100px' }}>
                    <div className={styles.container}>
                        <div className={styles.tabsLayout}>
                            <div className={styles.tabsList}>
                                {solutionsData.map((sol) => (
                                    <button
                                        key={sol.id}
                                        className={`${styles.tabBtn} ${activeTab === sol.id ? styles.activeTab : ''}`}
                                        onClick={() => setActiveTab(sol.id)}
                                    >
                                        <Editable k={`solutions.tab.${sol.id}`}>{sol.title}</Editable>
                                    </button>
                                ))}
                            </div>

                            <div className={styles.tabContent}>
                                {activeContent && (
                                    <div className={`${styles.contentCard} fade-up`}>
                                        <h2 className={styles.contentTitle}>
                                            <Editable k={`solutions.${activeContent.id}.title`}>{activeContent.title}</Editable>
                                        </h2>

                                        <div className={styles.contentDescription}>
                                            <Editable k={`solutions.${activeContent.id}.description`} as="p">
                                                {activeContent.description}
                                            </Editable>
                                        </div>

                                        <div className={styles.moduleGrid}>
                                            {activeContent.items.map((item) => (
                                                <div key={item.id} id={item.id} className={styles.moduleCard} style={{ scrollMarginTop: '120px' }}>
                                                    <div className={styles.moduleIndicator}></div>
                                                    <h3><Editable k={`solutions.${activeContent.id}.${item.id}.name`}>{item.name}</Editable></h3>
                                                    <p><Editable k={`solutions.${activeContent.id}.${item.id}.desc`}>{item.desc}</Editable></p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.closingSection}>
                    <div className={styles.container}>
                        <div className={styles.coherentBox}>
                            <h2><Editable k="solutions.closing.title">A Connected Digital Environment</Editable></h2>
                            <Editable k="solutions.closing.body1" as="p">
                                Our objective is not simply to deploy software, but to create a coherent digital architecture where systems, processes, and data work together seamlessly.
                            </Editable>
                            <Editable k="solutions.closing.body2" as="p">
                                By combining proven platforms with tailored extensions, we help organisations build digital environments that are scalable, adaptable, and aligned with their strategic goals.
                            </Editable>
                            <div style={{ marginTop: '2rem' }}>
                                <Link href="/contact" className={styles.btnPrimary}>
                                    <Editable k="solutions.closing.cta">Discuss Your Architecture</Editable>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
