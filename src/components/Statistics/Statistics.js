import React from 'react'
import styles from './Statistics.module.css'
import PropTypes from 'prop-types'

function Statistics({ title, stats}) {
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


Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact(
            {
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
            }
        )
    )
}

export default Statistics;
