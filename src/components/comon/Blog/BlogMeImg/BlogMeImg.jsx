import React from "react";
import c from "./BlogMeImg.module.scss"

const BlogMeImg = (props) => {
    return (
        <div>
            <div>
                <img src={props.img} width={props.width}/>
            </div>
            <div className={c.text}>
                {props.text}
            </div>
        </div>
    )
}

export default BlogMeImg;