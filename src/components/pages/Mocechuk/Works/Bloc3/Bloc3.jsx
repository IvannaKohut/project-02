import React from "react";
import c from "./Bloc3.module.scss"
import InformativeBlog from "../../../../comon/InformativeBlog";

const Bloc3 =(props)=>{
    return(
        <div className={c.bloc_3}>
            <div className={c.item_1}>
                <InformativeBlog img="img/Frame 1400 (6).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
            <div className={c.item_2}>
                <InformativeBlog img="img/Frame 1400 (7).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
        </div>
    )
}

export default Bloc3;