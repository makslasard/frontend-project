import React from "react";
import styles from './Counter.module.scss'

export const Counter: React.FC = () => {
    return (
        <div className={styles.counter}>
            <h1>Counter</h1>
        </div>
    )
}