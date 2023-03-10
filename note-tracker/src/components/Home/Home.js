import React,{useState} from 'react';
import styles from './Home.module.css';
import Menubar from '../Menubar/Menubar';
import NotesContainer from '../NotesContainer/NotesContainer';
import InputField from '../InputField/InputField';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Home = () => {
    const [inputData, setInputData] = useState("");

    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <BrowserRouter>
                <div className={styles.left}>
                    <Menubar />
                </div>
                <div className={styles.right}>
                    <div className={styles.upper} >
                            <Routes>
                                <Route path="/" element = {localStorage.notes && JSON.parse(localStorage.notes).map((data,index) => {
                                    return(
                                        <NotesContainer data={data} key={index} />
                                    )})} >
                                </Route>
                                <Route path="/bookmarks" element = {localStorage.bookmarks && JSON.parse(localStorage.bookmarks).map((data,index) => {
                                    return(
                                        <NotesContainer data={data} key={index} />
                                    )})}>
                                </Route>
                            </Routes>
                    </div>
                    <InputField inputData={inputData} setInputData={setInputData} />
                </div>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default Home;