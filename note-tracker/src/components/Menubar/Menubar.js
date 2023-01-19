import React from 'react';
import styles from './Menubar.module.css';
import titleicon from '../../assets/titleicon.svg';
import notesIcon from '../../assets/notesIcon.svg';
import bookmarkIcon from '../../assets/bookmarkIcon.svg';
import {useNavigate} from "react-router-dom";


const Menubar = (props) => {
    const currentState = props.currentState;
    const setCurrentState = props.setCurrentState;

    const navigate = useNavigate();

    return (
        <div className={styles.menubar}>
            <div className={styles.title}>
                <img src={titleicon} alt='loading'></img>
                &nbsp; DAILY NOTE TRACKER
            </div>
            <div className={currentState === 0 ? styles.containerSelected : styles.container} onClick={function(){navigate(`/`); setCurrentState(0)}}>
                <div className={styles.icon} style={{backgroundColor: "#806BFF"}}>
                    <img src={notesIcon} alt=""></img>
                </div>
                <div className={styles.menu} style={{color : "#806BFF"}}>
                    Daily Notes
                </div>
            </div>
            <div className={currentState === 1 ? styles.containerSelected : styles.container} onClick={function(){navigate(`/bookmarks`); setCurrentState(1)}}>
                <div className={styles.icon} style={{backgroundColor: "#FF6B6B"}}>
                    <img src={bookmarkIcon} alt=""></img>
                </div>
                <div className={styles.menu} style={{color : "#FF6B6B"}}>
                    Bookmarks
                </div>
            </div>
        </div>
    );
};

export default Menubar;
