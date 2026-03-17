import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Editable from '@/components/cms/Editable';
import styles from './Blogs.module.css';

export default function BlogsPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.header}>
                    <div className={styles.container}>
                        <Editable k="blog.header.badge" as="div" className={styles.sectionLabel}>Insights</Editable>
                        <h1 className={styles.title}>
                            <Editable k="blog.header.title">Fostral Blog</Editable>
                        </h1>
                        <Editable k="blog.header.subtitle" as="p" className={styles.subtitle}>
                            Thoughts, technical deep dives, and industry insights on business management software.
                        </Editable>
                    </div>
                </section>

                <section className={styles.blogList}>
                    <div className={styles.container}>
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>📝</div>
                            <h2><Editable k="blog.empty.title">No articles published yet</Editable></h2>
                            <p><Editable k="blog.empty.description">We are currently writing our first technical insights and industry analysis. Check back soon for updates.</Editable></p>
                            <Link href="/" className={styles.btnReturn}>Return Home</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
