import React from 'react';
import styles from './InputField.module.css';
import arrow from '../../assets/arrow.svg';
import {useNavigate, useLocation} from "react-router-dom";

const InputField = (props) => {
    const inputData = props.inputData;
    const setInputData = props.setInputData;

    const location = useLocation();
    const navigate = useNavigate();

    function handleChange(event){
        const val = event.target.value;
        setInputData(val);
    }

    function handleKeyPress(event){
        if(event.code === "Enter"){
            handleClick();
        }
    }

    function handleClick(){
        if(!inputData){
            return;
        }

        let newData= [];

        if(location.pathname !== "/"){
            localStorage.bookmarks && newData.push(...JSON.parse(localStorage.bookmarks));
            newData.push({data: inputData, date: new Date().getDate()+"-"+ new Date().getMonth()+1+"-"+ new Date().getFullYear()+" "+new Date().getHours()+":"+new Date().getMinutes()});
            // localStorage.setItem("bookmarks", JSON.stringify(Bookmarks));
            localStorage.bookmarks = JSON.stringify(newData);
            navigate(`/bookmarks`);
        }
        else{
            localStorage.notes && newData.push(...JSON.parse(localStorage.notes));
            newData.push({data: inputData, date: new Date().getDate()+"-"+ new Date().getMonth()+1+"-"+ new Date().getFullYear()+" "+new Date().getHours()+":"+new Date().getMinutes()});
            // localStorage.setItem("notes", JSON.stringify(notes));
            localStorage.notes = JSON.stringify(newData);
            navigate(`/`);
        }


        setInputData("");
    }

    return (
        <div className={styles.lower}>
            <div className={styles.inputContainer}>
                <input type="text" className={styles.inputField} placeholder={`Type a ${location.pathname === "/" ? "daily note..." : "bookmark..."}`} onChange={handleChange} value={props.inputData} onKeyPress={handleKeyPress}></input>
            </div>
            <button className={styles.icon} onClick={handleClick}>
                <img src={arrow} alt=""></img>
            </button>
        </div>
    );
};

export default InputField;