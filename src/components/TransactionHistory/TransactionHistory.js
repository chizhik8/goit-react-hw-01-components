import React from 'react'
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({items}) {
    return (
        <section>
            <table className={styles.transactionHistory}>
                <thead className={styles.thead}>
                    <tr>
                        <th className={styles.name}>Type</th>
                        <th className={styles.name}>Amount</th>
                        <th className={styles.name}>Currency</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {items.map(item => (
                        <tr className={styles.item} key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
