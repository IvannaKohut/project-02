import React, {useState} from "react";
import c from "./MobileHeader.module.scss"
import {NavLink} from "react-router-dom";
import Icon2 from "../../../logowhite";
import Icon from "../../../logo";



const activeLink = ({isActive}) => isActive ? c.active_text : c.item;

const MobileHeader = (props) => {
    const [isOpen, setOpen] = useState(false);
    const burgerOnClick =()=>{
        setOpen(!isOpen)
    }
    const handleClose =()=>{
        setOpen(false);
    }
    return (
        <div>
            <div className={c.header_mobile}>
                <div className={c.top}>
                    <div className={c.header_top}>
                        <NavLink to="/logo" className={c.logo}>
                            {isOpen ? <Icon2/> : <Icon/>}</NavLink></div>
                    <div onClick={burgerOnClick} className=
                        {`${isOpen ? c.active : ''} ${c.burger}`}>
                        <span></span>
                    </div>
                </div>
                {isOpen ? <nav className={c.nav_mobile}>
                    <div className={c.item}><NavLink onClick={handleClose} className={activeLink} to="/work">Роботи</NavLink></div>
                    <div className={c.item}><NavLink onClick={handleClose} className={activeLink} to="/aboutme">Про мене</NavLink></div>
                    <div className={c.item}><NavLink onClick={handleClose} className={activeLink} to="/blog">Бложемій</NavLink></div>
                    <div className={c.item}><NavLink onClick={handleClose} className={activeLink} to="/contacts">Контакти</NavLink></div>
                </nav> : null
                }

            </div>
        </div>
    )
}
export default MobileHeader;