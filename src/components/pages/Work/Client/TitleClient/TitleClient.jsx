import c from "./TitleClient.module.scss"
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {project} from "../../../../../config/client";
import Button from "./Button/Button";

const activeLink = ({isActive}) => isActive ? c.active : c.comeback;


const TitleClient = (props) => {
    const [client, setClient]=useState(project);

    return <div className={c.title}>
        <div className={c.comeback}>
            <NavLink className={activeLink} to="/work">{props.comeback}</NavLink>
        </div>
        <div className={c.text}>{props.text}</div>
        <Button projects={props.projects}  strategy={props.strategy}/>
    </div>
}

export default TitleClient;