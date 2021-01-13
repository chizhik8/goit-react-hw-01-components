import React from 'react'
import styles from './Statistics.module.css'

export default function Statistics({ title, stats}) {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.statList}>
                {stats.map(stat => (
                    <li className={styles.item} key={stat.id}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}%</span>
                    </li>               
                ))}
            </ul>
        </section>
    )
}
