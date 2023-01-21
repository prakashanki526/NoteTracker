import React from 'react';
import styles from './NotesContainer.module.css';
import { useLocation } from 'react-router-dom';

const NotesContainer = (props) => {
    const data = props.data;
    let location = useLocation();

    return (
        <div className={styles.container}>
            {location.pathname === "/" ? data.data : <a href={data.data.match("http") ? data.data : `https://${data.data}`} target="_blank" rel="noreferrer">{data.data}</a>}
            <div className={styles.date}>
                {data.date}
            </div>
        </div>
    );
};

export default NotesContainer;