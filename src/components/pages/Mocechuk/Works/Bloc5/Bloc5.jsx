import React from "react";
import c from "./Bloc5.module.scss"
import InformativeBlog from "../../../../comon/InformativeBlog";

const Bloc5 =(props)=>{
    return(
        <div className={c.bloc_5}>
            <div className={c.item_1}>
                <InformativeBlog img="img/Frame 1400 (8).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
            <div className={c.item_2}>
                <InformativeBlog img="img/Frame 1400 (9).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
        </div>
    )
}

export default Bloc5;