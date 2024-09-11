import React from "react";
import c from "./Mail.module.css"

const Mail =(props) =>{
    return(
        <div className={c.mail}>
            <div className={c.contact}>contact us</div>
            <div className={c.address}>mail@nazmoseychuk.com</div>
        </div>
)
}

export default Mail;