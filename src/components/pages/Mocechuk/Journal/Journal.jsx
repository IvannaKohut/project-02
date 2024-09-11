import React from "react";
import c from "../Works/Works.module.scss";
import Title from "../../../comon/Title";
import JournalBloc from "./JournalBloc/JournalBloc";


const Journal = (props) => {



    return (
        <div>
            <div className={c.title}>
              <div className={c.years_1}><Title years="2016—2023 роки"/></div>
              <div className={c.text}>  <Title  text="Journal"/></div>
                <div className={c.years}><Title years="2016—2023 роки"/></div>
            </div>
            <JournalBloc/>
        </div>

    )
}

export default Journal;