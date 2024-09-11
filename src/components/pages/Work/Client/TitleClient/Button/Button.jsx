import React from "react";
import c from "./Button.module.scss";
import {project} from "../../../../../../config/client";


const Button = (props) =>{

    return (
        <div className={c.button}>
            <div className={c.item}>
                <div className={c.element}>Демонструвати</div>
                <div>Клієнт: {props.projects.fullName}</div>
                <div>Проект: {props.projects.projectName} </div>
                <div>Цифрова платформа:</div>
                <div>Рік: {project.project.year}</div>
            </div>
            <div className={c.item_1}>
                {props.strategy.map((s)=>{
                 return(
                     <div>{s.name}</div>
                 )
                })}
            </div>
            <div className={c.item_2}>
                <div className={c.element}>Кредити</div>
                <div>{props.projects.credit}</div>
            </div>
        </div>
    )
}

export default Button;