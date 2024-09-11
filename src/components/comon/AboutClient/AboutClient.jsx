import React from "react";
import c from "./AboutClient.module.scss"


const AboutClient = (props) => {
    return (
            <div className={c.container}>
                <div className={c.title}>{props.title}</div>
                <div className={c.text} dangerouslySetInnerHTML={{__html: props.text}}></div>
            </div>
    )
}
export default AboutClient;