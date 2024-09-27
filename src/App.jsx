import './App.css';
import React, {useEffect} from "react";
import {useLayoutEffect} from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import AboutMe from "./components/pages/About me/AboutMe";
import Blog from "./components/pages/Blog/Blog";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Mocechuk from "./components/pages/Mocechuk/Mocechuk";
import Work from "./components/pages/Work/Work";
import Client from "./components/pages/Work/Client/Client";
import Contact from "./components/pages/Contact/Contact";
import ExamplesForm from "./components/pages/Contact/ExamplesForm/ExamplesForm";


const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}



const App = (props) => {
    return (
        <BrowserRouter>
            <Wrapper>
                <MainLayout>
                    <Routes path="/">
                        <Route path="work" element={<Work/>}/>
                        <Route path="work/:id" element={<Client/>}/>
                        <Route path="logo" element={<Mocechuk/>}/>
                        <Route path="aboutme" element={<AboutMe/>}/>
                        <Route path="blog" element={<Blog/>}/>
                        <Route path="contacts" element={<ExamplesForm/>}/>
                        {/*<Route path="client" element={<Client/>}/>*/}

                    </Routes>
                </MainLayout>
            </Wrapper>
        </BrowserRouter>
    )
}

export default App;
