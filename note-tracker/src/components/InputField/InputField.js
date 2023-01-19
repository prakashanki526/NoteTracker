import React from 'react';
import styles from './InputField.module.css';
import arrow from '../../assets/arrow.svg';
import {useNavigate} from "react-router-dom";

const InputField = (props) => {
    const inputData = props.inputData;
    const setInputData = props.setInputData;
    const notes = props.notes;
    const setNotes = props.setNotes;
    const Bookmarks = props.Bookmarks;
    const setBookmarks = props.setBookmarks;

    const navigate = useNavigate();

    function handleChange(event){
        const val = event.target.value;
        setInputData(val);
    }

    async function handleClick(event){
        if(!inputData){
            return;
        }

        if(props.currentState){
            let newData = Bookmarks;
            newData.push({data: inputData, date: new Date().getDate()+"-"+ new Date().getMonth()+1+"-"+ new Date().getFullYear()});
            await setBookmarks(newData);
            navigate(`/bookmarks`);
        }
        else{
            let newData = notes;
            newData.push({data: inputData, date: new Date().getDate()+"-"+ new Date().getMonth()+1+"-"+ new Date().getFullYear()});
            await setNotes(newData);
            navigate(`/`);
        }

        setInputData("");
    }

    return (
        <div className={styles.lower}>
            <div className={styles.inputContainer}>
                <input type="text" className={styles.inputField} placeholder={`Type a ${props.currentState===0 ? "daily note..." : "bookmark..."}`} onChange={handleChange} value={props.inputData}></input>
            </div>
            <button className={styles.icon} onClick={handleClick}>
                <img src={arrow} alt=""></img>
            </button>
        </div>
    );
};

export default InputField;