import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import c from "./MainLayout.module.scss"
import MobileHeader from "../Header/MobileHeader/MobileHeader";

const MainLayout = (props) => {
    return (
        <div className={c.appWrapper}>
            <div className={c.container}>
                <div className={c.mobileHeader}><MobileHeader/></div>
                <div className={c.header}><Header/></div>
                <div className={c.appWrapperContent}>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>);
}

export default MainLayout;