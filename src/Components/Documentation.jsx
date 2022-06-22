import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Documentation() {
    return (
        <Link href="/test/hello-js-12e3434">
            <div className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
            </div>
        </Link>
    )
}
