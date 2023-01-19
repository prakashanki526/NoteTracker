import React from 'react';
import styles from './NotesContainer.module.css';

const NotesContainer = (props) => {
    const data = props.data;
    const currentState = props.currentState;

    return (
        <div className={styles.container}>
            {currentState === 0 ? data.data : <a href={data.data}>{data.data}</a>}
            <div className={styles.date}>
                {data.date}
            </div>
        </div>
    );
};

export default NotesContainer;