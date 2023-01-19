import React,{useState} from 'react';
import styles from './Home.module.css';
import Menubar from '../Menubar/Menubar';
import NotesContainer from '../NotesContainer/NotesContainer';
import InputField from '../InputField/InputField';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Home = () => {
    const [currentState, setCurrentState] = useState(0);
    const [notes, setNotes] = useState([{data:"absg",date:"snbs"}]);
    const [Bookmarks, setBookmarks] = useState([]);
    const [inputData, setInputData] = useState("");

    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <BrowserRouter>
                <div className={styles.left}>
                    <Menubar currentState={currentState} setCurrentState={setCurrentState} />
                </div>
                <div className={styles.right}>
                    <div className={styles.upper} >
                        {/* {currentState === 0 ? notes.map((data,index) => {
                            return(
                                <NotesContainer data={data} />
                            )
                        }) : Bookmarks.map((data,index) => {
                            return(
                                <NotesContainer data={data} />
                            )
                        })} */}

                            <Routes>
                                <Route path="/" element = {notes.map((data,index) => {
                                    return(
                                        <NotesContainer data={data} key={index} currentState={currentState} />
                                    )})} >
                                </Route>
                                <Route path="/bookmarks" element = { Bookmarks.map((data,index) => {
                                    return(
                                        <NotesContainer data={data} key={index} currentState={currentState} />
                                    )})}>
                                </Route>
                            </Routes>
                    </div>
                    <InputField currentState={currentState} setCurrentState={setCurrentState} inputData={inputData} setInputData={setInputData} notes={notes} setNotes={setNotes} Bookmarks={Bookmarks} setBookmarks={setBookmarks} />
                </div>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default Home;