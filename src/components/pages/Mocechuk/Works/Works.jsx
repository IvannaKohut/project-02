import React from "react";
import Title from "../../../comon/Title";
import InformativeBlog from "../../../comon/InformativeBlog";
import c from "./Works.module.scss";
import Bloc1 from "./Bloc1/Bloc1";
import Bloc2 from "./Bloc2/Bloc2";
import Bloc3 from "./Bloc3/Bloc3";
import Bloc4 from "./Bloc4/Bloc4";
import Bloc5 from "./Bloc5/Bloc5";
import Bloc6 from "./Bloc6/Bloc6";
import Bloc7 from "./Bloc7/Bloc7";


const Works = (props) => {
    return (
        <div>
            <div className={c.title}>
               <div className={c.years_1}><Title years="2016—2023 роки"/></div>
                <div className={c.text}><Title text="Роботи"/></div>
                <div className={c.years}><Title years="2016—2023 роки"/></div>
            </div>
                <Bloc1/>
                <Bloc2/>
                <Bloc3/>
                <Bloc4/>
                <Bloc5/>
                <Bloc6/>
                <Bloc7/>

        </div>
    )
}

export default Works;