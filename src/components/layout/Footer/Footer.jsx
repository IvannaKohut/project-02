import React from "react";
import c from "./Footer.module.css"
import File from "./File/File";
import Mail from "./Mail/Mail";

const Footer =(props) =>{
    return <div className={c.footer}>
      <div><File/></div>
        <div><Mail/></div>
    </div>
}

export default Footer;