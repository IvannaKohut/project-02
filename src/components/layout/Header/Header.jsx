import React from "react";
import c from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import Logo from "../../logo";
import Time from "./Time/Time";
import menu from "../../../config/menu";
import Contact from "../../pages/Contact/Contact";

const activeLink = ({isActive}) => isActive ? c.active : c.item;


const Header = (props) => {
    return (
        <div className={c.header}>
            <div className={c.header_left}>
                <div className={c.logo}>
                    <NavLink to="/logo" className={activeLink}><Logo/></NavLink>
                </div>
                <div className={c.nav}>
                    {
                        menu.map((item)=>{
                            return (
                                <div className={c.element}><NavLink to={item.link} className={activeLink}>{item.name}</NavLink></div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={c.header_right}>
                <div className={c.contacts}><NavLink to="/contacts" className={activeLink}>Контакти</NavLink></div>
                <div className={c.time}><Time/></div>
            </div>
        </div>
    )
}

export default Header;