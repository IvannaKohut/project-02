import React from "react";
import c from "./Title.module.scss"

const Title = (props) => {
    return <div className={c.title}>
        <div>{props.years}</div>
        <div className={c.text}>{props.text}</div>
    </div>
}

export default Title;