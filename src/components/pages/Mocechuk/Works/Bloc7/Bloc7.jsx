import React from "react";
import c from "./Bloc7.module.scss"
import InformativeBlog from "../../../../comon/InformativeBlog";

const Bloc7 =(props)=>{
    return(
        <div className={c.bloc_7}>
            <div className={c.item_1}>
                <InformativeBlog img="img/Frame 1400 (12).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
            <div className={c.item_2}>
                <InformativeBlog img="img/Frame 1400 (13).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
            <div className={c.item_3}>
                <InformativeBlog img="img/Frame 1400 (14).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
            <div className={c.item_4}>
                <InformativeBlog img="img/Frame 1400 (15).png" width="100%" awards="Annual Awwwards"
                                 text="Annual Aw" author="Brand Design"/>
            </div>
        </div>
    )
}

export default Bloc7;