import React from "react";
import Title from "../../../comon/Title";
import InformativeBlog from "../../../comon/InformativeBlog";
import c from "./Approach.module.scss"

const Approach = (props) => {
    return (
        <div className={c.content}>
            <div className={c.title}>
              <div className={c.years_1}> <Title years="2016—2023 роки"/></div>
                <div className={c.text}><Title text="Інженерно-естетичний підхід"/></div>
                <div className={c.years}><Title years="2016—2023 роки"/></div>
            </div>
            <div className={c.approach}>
                <div className={c.item}>
                    <InformativeBlog img="img/Frame 1400.png" width="100%" awards="Annual Awwwards"
                                     text="Nova Post Advent Calendar" author="Brand Design"/>
                </div>
                <div className={c.item}>
                    <InformativeBlog img="img/Frame 1400 (2).png" width="100%" awards="Newtone"
                                     text="Poster anons cider" author="Brand Design"/>
                </div>
            </div>
        </div>)
}

export default Approach;