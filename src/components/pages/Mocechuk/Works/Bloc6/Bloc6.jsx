import React from "react";
import c from "./Bloc6.module.scss"
import InformativeBlog from "../../../../comon/InformativeBlog";

const Bloc6 =(props)=>{
    return(
        <div className={c.bloc_6}>
            <div className={c.item_1}>
                <InformativeBlog img="img/Frame 1400 (10).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
            <div className={c.item_2}>
                <InformativeBlog img="img/Frame 1400 (11).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
        </div>
    )
}

export default Bloc6;