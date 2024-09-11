import c from "./TitleClient.module.scss"
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {project} from "../../config/client";

const activeLink = ({isActive}) => isActive ? c.active : c.comeback;


const TitleClient = (props) => {
    const [client, setClient]=useState(project);

    return <div className={c.title}>
        <div className={c.comeback}>
            <NavLink className={activeLink} to="/work">{props.comeback}</NavLink>
        </div>
        <div className={c.text}>{props.text}</div>
        <div className={c.button}>
            <div className={c.item}>
                <div className={c.element}>Демонструвати</div>
                <div>Клієнт: {project.client.name}</div>
                <div>Проект: </div>
                <div>Цифрова платформа:</div>
                <div>Рік: {project.project.year}</div>
            </div>
            <div className={c.item_1}>
                <div>Творчий напрямок</div>
                <div>Напрямок дизайну</div>
                <div>Досвід користувача</div>
                <div>Інтерфейс користувача</div>
                <div>Веб-сайт</div>
            </div>
            <div className={c.item_2}>
                <div className={c.element}>Кредити</div>
                <div>ВІДДІЛ</div>
            </div>
        </div>
    </div>
}

export default TitleClient;