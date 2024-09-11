import React from "react";
import c from "./BlogMeTitle.module.scss"

const BlogMeTitle =(props) =>{
    return(
        <div className={c.title}>
            {props.title}
        </div>
    )
}

export default BlogMeTitle;