import React from "react";
import c from "./AboutMeServices.module.scss";

const AboutMeServices =(props) =>{
    return (
        <div className={c.container}>
            <div className={c.name}>{props.name}</div>
            <div className={c.info} dangerouslySetInnerHTML={{__html:props.info}}></div>
        </div>
    )
}
export  default AboutMeServices;
