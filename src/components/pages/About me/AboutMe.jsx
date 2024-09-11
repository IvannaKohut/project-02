import React, {useState} from "react";
import Title from "../../comon/Title";
import c from "./AboutMe.module.scss"
import {project} from "../../../config/aboutMe";
import AboutClient from "../../comon/AboutClient/AboutClient";
import AboutMeServices from "../../comon/AboutMeServices/AboutMeServices";
import BlogElement from "./BlogElement/BlogElement";
import MyBrandClient from "./MyBrandClient/MyBrandClient";
import InformativeBlog from "../../comon/InformativeBlog";

const AboutMe = (props) => {
    const [aboutMe, setAboutMe] = useState(project);
    return <div>
        <div className={c.title}>
            <div className={c.years}><Title years="Коротко про мене"/></div>
            <div className={c.text}><Title text="У пошуку істини у світі дизайну"/></div>
        </div>
        <div className={c.about_me}>
            <div className={c.blok_me} dangerouslySetInnerHTML={{__html: project.me}}></div>
        </div>
        <div className={c.container}>
            <div className={c.item_1}><AboutClient title="Про принципи" text={project.principles}/></div>
            <div className={c.item}><AboutClient title="Моя місія" text={project.mission}/></div>
            <div className={c.item}><AboutClient title="Що я зробив" text={project.work}/></div>
        </div>
        <div className={c.img}>
           <img src={project.mainPhoto}/>
        </div>
            <AboutMeServices name={project.works.process} info={project.works.process_text}/>
            <BlogElement/>
            <AboutMeServices name={project.works.service} info={project.works.service_text}/>
        <div className={c.container}>
            <div className={c.item__1}><AboutClient/></div>
            <div className={c.item}><AboutClient title="Формування" text={project.formation}/></div>
            <div className={c.item}><AboutClient title="Створення" text={project.creation}/></div>
        </div>
            <AboutMeServices name={project.works.my_client} info={project.works.my_client_text}/>
        <MyBrandClient/>
        <div className={c.title_work}>
            <div className={c.years_work}><Title years={project.works_me.startYears}/></div>
            <div className={c.text_work}><Title text={project.works_me.text}/></div>
            <div className={c.years_work}><Title years={project.works_me.endYears}/></div>
        </div>
        <div className={c.work_client}>
            {project.works_me.items.map((i) => {
                return (
                    <div className={c.items}>
                        <InformativeBlog id={i.id} img={i.image} width="100%" awards={i.author}
                                         text={i.description} author={i.topic}/>
                    </div>)
            })}
        </div>

    </div>
}
export default AboutMe;