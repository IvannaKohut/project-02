import React, {useEffect, useState} from "react";
import TitleClient from "./TitleClient/TitleClient";
import c from "./Client.module.scss"
import AboutClient from "../../../comon/AboutClient/AboutClient";
import InformativeBlog from "../../../comon/InformativeBlog";
import {project} from "../../../../config/client";
import Title from "../../../comon/Title";
import ProjectInformation from "./ProjectInformation/ProjectInformation";
import {useParams} from "react-router";
import axios from "axios";

const Client = (props) => {
    const params = useParams()
    console.log(params.id)
    const [client, setClient] = useState(project);
    const [projects, setProjects] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [strategy, setStrategy] = useState([]);
    const [works, setWorks] = useState([]);
    const [worksItems, setWorksItems] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/projects/${params.id}`)
            .then(data => {
                setProjects(data.data.data);
                setGallery(data.data.data.gallery);
                setStrategy(data.data.data.strategy);
                setWorks(data.data.data.works);
                setWorksItems(data.data.data.works.items);

                console.log(data.data.data);
            })
    }, []);


    return (
        <div>
            <div className={c.titleClient}>
                <TitleClient projects={projects} strategy={strategy} comeback="Назад до кейсів"
                             text={projects.fullName}/>
            </div>
            <img className={c.img} src={projects.background}/>
            <div className={c.container}>
                <div className={c.item1}><AboutClient title="Про клієнта" text={projects.about}/></div>
                <ProjectInformation projects={projects} strategy={strategy}/>
                <div className={c.item}><AboutClient title="Задача" text={projects.task}/></div>
                <div className={c.item}><AboutClient title="Що я зробив" text={projects.work}/></div>
            </div>
            <div className={c.imgclient}>

                {gallery.map((i) => {
                    return (
                        <InformativeBlog img={i.img}/>
                    )
                })}
            </div>
            <div className={c.title}>
                <div className={c.years_1}><Title years={works.startYears}/></div>
                <div className={c.text}><Title text={works.text}/></div>
                <div className={c.years}><Title years={works.endYears}/></div>
            </div>
            <div className={c.work_client}>
                {worksItems.map((i) => {
                    return (
                        <div className={c.items}>
                            <InformativeBlog id={i.id} img={i.image} width="100%" awards={i.author}
                                             text={i.description} author={i.topic}/>
                        </div>)
                })}
            </div>
        </div>

    )
}

export default Client;