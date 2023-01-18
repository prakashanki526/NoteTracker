import React from 'react';
import styles from './NotesContainer.module.css';

const NotesContainer = (props) => {
    const data = props.data;
    console.log(props.data);

    return (
        <div className={styles.container}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. */}
            {data[0]};
            <div className={styles.date}>
                05/52/25 12:34 PM
            </div>
        </div>
    );
};

export default NotesContainer;