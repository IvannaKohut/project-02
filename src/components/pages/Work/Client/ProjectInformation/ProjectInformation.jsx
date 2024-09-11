import React, {useState} from "react";
import c from "./ProjectInformation.module.scss";
import AboutClient from "../../../../comon/AboutClient/AboutClient";
import {project} from "../../../../../config/client";

const ProjectInformation = (props) => {

    const [isOpen, setOpen] = useState(false);

    const burgerOnClick =()=>{
        setOpen(!isOpen)
    }

    return (
        <div className={c.inf}>
            <div className={c.header}>
                <div className={c.title}>Project information</div>
                <div className={c.burger} onClick={burgerOnClick}>
                    <span></span>
                </div>
            </div>
            {isOpen ? <div className={c.container}>
                <div className={c.item}><AboutClient title="Задача" text={props.projects.task}/></div>
                <div className={c.item}><AboutClient title="Що я зробив" text={props.projects.work}/></div>
            </div> : null}
            { isOpen ? <div className={c.button}>
                <div className={c.item_button}>
                    <div className={c.element}>Демонструвати</div>
                    <div>Клієнт: {props.projects.fullName}</div>
                    <div>Проект: {props.projects.projectName}</div>
                    <div>Цифрова платформа:</div>
                    <div>Рік: {project.project.year}</div>
                </div>
                <div className={c.item_1_button}>
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
            </div> : null}
        </div>
    )
}

export default ProjectInformation;