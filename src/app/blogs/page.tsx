import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import styles from './Blogs.module.css';

export default function BlogsPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.header}>
                    <div className={styles.container}>
                        <div className={styles.sectionLabel}>Insights</div>
                        <h1 className={styles.title}>Fostral Blog</h1>
                        <p className={styles.subtitle}>
                            Thoughts, technical deep dives, and industry insights on business management software.
                        </p>
                    </div>
                </section>

                <section className={styles.blogList}>
                    <div className={styles.container}>
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>📝</div>
                            <h2>No articles published yet</h2>
                            <p>We are currently writing our first technical insights and industry analysis. Check back soon for updates.</p>
                            <Link href="/" className={styles.btnReturn}>Return Home</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
