import React,{useState} from 'react';
import styles from './Home.module.css';
import Menubar from '../Menubar/Menubar';
import NotesContainer from '../NotesContainer/NotesContainer';
import arrow from '../../assets/arrow.svg';

const Home = () => {
    const [currentState, setCurrentState] = useState(0);

    const [notes, setNotes] = useState(["abcd"]);
    const [Bookmarks, setBookmarks] = useState(["avsh"]);

    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <Menubar currentState={currentState} setCurrentState={setCurrentState} />
                </div>
                <div className={styles.right}>
                    <div className={styles.upper}>
                        <NotesContainer data={currentState === 0 ? notes : Bookmarks} />
                    </div>
                    <div className={styles.lower}>
                        <div className={styles.inputContainer}>
                            <input type="text" className={styles.inputField} placeholder="Type a daily note..."></input>
                        </div>
                        <div className={styles.icon}>
                            <img src={arrow} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;