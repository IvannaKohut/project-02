import React from "react";
import c from "./Bloc1.module.scss"
import InformativeBlog from "../../../../comon/InformativeBlog";

const Bloc1 =(props)=>{
    return(
        <div className={c.bloc_1}>
            <div className={c.item_1}>
                <InformativeBlog img="img/Frame 1400 (3).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
            <div className={c.item_2}>
                <InformativeBlog img="img/Frame 1400 (4).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
        </div>
    )
}

export default Bloc1;