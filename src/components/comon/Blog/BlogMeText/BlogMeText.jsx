import React from "react";
import c from "./BlogMeText.module.scss";

const BlogMeText =(props)=>{
    return(
        <div className={c.text}>
            <div className={c.p1} dangerouslySetInnerHTML={{__html:props.text}}></div>
        </div>
    )
}

export default BlogMeText;