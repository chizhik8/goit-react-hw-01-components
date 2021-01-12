import React from 'react'
import styles from './Profile.module.css';

console.log(styles);

export default function Profile({ avatar, name, tag, location, stats}) {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
  );
}
