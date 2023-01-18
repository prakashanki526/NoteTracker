import React from 'react';
import styles from './Menubar.module.css';
import MenuElement from '../MenuElements/MenuElement.js';
import titleicon from '../../assets/titleicon.svg';

const Menubar = () => {
    return (
        <div className={styles.menubar}>
            <div className={styles.title}>
                <img src={titleicon} alt='loading'></img>
                &nbsp; DAILY NOTE TRACKER
            </div>
            <MenuElement name="Daily Notes" />
            <MenuElement name="Bookmarks" />
        </div>
    );
};

export default Menubar;