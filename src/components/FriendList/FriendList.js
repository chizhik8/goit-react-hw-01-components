import React from 'react'
import styles from './FriendList.module.css';

function FriendList({ friends }) {
    return (
        <section className={styles.container}>
            <ul className={styles.friendList}>
                {friends.map(friend => (
                <li className={styles.item} key={friend.id}>
                    <span className={ friend.isOnline ? styles.available : styles.notAvailable }></span>
                    <img className={styles.avatar} src={friend.avatar} alt="Аватар пользователя" width="48" />
                    <p className={styles.name}>{friend.name}</p>
                </li>
                ))}

            </ul>
        </section>
    )
}

export default FriendList;