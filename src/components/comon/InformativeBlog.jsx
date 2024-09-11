import React from "react";
import  c from "./InformativeBlog.module.scss"

const InformativeBlog = (props) => {


    return <div className={c.informative_blog}>
        <img src={props.img} width={props.width}/>
        <div className={c.item}>
            <div>
                <div className={c.awards}>{props.awards}</div>
                <div className={c.text}>{props.text}</div>
            </div>
            {props.author && <div className={c.author}>{props.author}</div>}
            {props.date && <div className={c.date}>{props.date}</div>}
        </div>
        <div className={c.info}>{props.info}</div>
    </div>
}

export default InformativeBlog;