import React from "react";
import c from "./MyBrandClient.module.scss";
import {project} from "../../../../config/aboutMe";


const MyBrandClient = (props) => {
    return (
        <div className={c.container}>
            {project.brand.map((b) => {
                return (
                    <div className={c.name}>
                        <div className={c.name_item}>{b.name}</div>
                    </div>
                )
            })
            }

        </div>
    )
}
    export default MyBrandClient;