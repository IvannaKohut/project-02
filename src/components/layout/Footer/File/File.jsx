
import React from "react";
import c from "./File.module.css"
import Rectangle from "../../../rectangle";

const File =(props) =>{
    return (
        <div className={c.file}>
            <div className={c.text}>іноді все, що вам потрібно, це старий pdf-файл</div>
            <div className={c.download}>
                <div className={c.rectangle}><Rectangle/></div>
                <div className={c.old_file}>завантажити профіль PDF</div>
            </div>
        </div>
    )

}

export default File;