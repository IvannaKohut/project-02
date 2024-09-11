import React, {useState} from "react";
import c from "./BlogElement.module.scss";
import {project} from "../../../../config/aboutMe";


const BlogElement = (props) => {
    //const [items,setItems]=useState(project);
    return (
        <div className={c.container}>
            {project.works.items.map((i) => {
                return (
                    <div className={c.item}>
                        <div className={c.number}>{i.number}</div>
                        <div className={c.item_element}>
                            <div className={c.topic} dangerouslySetInnerHTML={{__html:i.topic}}></div>
                            <div className={c.description} dangerouslySetInnerHTML={{__html:i.description}}></div>
                        </div>

                    </div>
                )
            })}


        </div>
    )
}
export  default BlogElement;