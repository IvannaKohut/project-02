import React from "react";
import {NavLink} from "react-router-dom";
import c from './Leader.module.scss'


const activeLink = ({isActive}) => isActive ? c.active : c.comeback;


const Leader = (props) => {
    return <div className={c.leader}>
        <div className={c.comeback}>
            <NavLink className={activeLink} to={props.to}>{props.comeback}</NavLink>
        </div>
        <div className={c.text}>{props.text}</div>
    </div>
}

export default Leader;