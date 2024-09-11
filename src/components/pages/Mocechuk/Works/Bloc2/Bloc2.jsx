import React from "react";
import InformativeBlog from "../../../../comon/InformativeBlog";
import c from "./Bloc2.module.scss"

const Bloc2 =(props)=>{
    return(
        <div className={c.bloc_2}>
            <InformativeBlog img="img/Frame 1400 (5).png" width="100%" awards="Annual Awwwards"
                             text="Nova Post Advent Calendar" author="Brand Design"/>
        </div>
    )
}

export default Bloc2;