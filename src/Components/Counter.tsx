import React, {useState} from 'react';
import styles from './Component.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className={styles.container} onClick={increment}>Increment</button>
        </div>
    );
};

