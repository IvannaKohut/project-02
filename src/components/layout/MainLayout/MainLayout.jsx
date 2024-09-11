import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import c from "./MainLayout.module.scss"

const MainLayout = ( props) => {
    return (
        <div className={c.appWrapper}>
            <Header />
            <Footer/>
            <div className={c.appWrapperContent}>
                {props.children}

            </div>

        </div>);
}

export default MainLayout;