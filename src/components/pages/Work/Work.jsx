import React, {useEffect, useState} from "react";
import InformativeBlog from "../../comon/InformativeBlog";
import c from "./Work.module.scss"
import Leader from "./Leader/Leader";
import Journal from "../Mocechuk/Journal/Journal";
import {NavLink} from "react-router-dom";
import axios from "axios"


const Work = (props) => {
    const [jobs, setJobs] = useState([]);
    const [jobsC, setJobsC] = useState([]);
    const [filters, setFilters] = useState([]);
    const [currentJob, setCurrentJob] = useState({id: 0});

    const handleFilter = (id) => {
        const newFilter = jobsC.filter((item) => {
            return item.type.id === id
        })
        setJobs(newFilter);
    }


    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/projects')
            .then(data => {
                setFilters(data.data.data.filters);
                setJobs(data.data.data.data.items);
                setJobsC(data.data.data.data.items);
                console.log(data);

            })
    }, []);

    return <div className={c.work}>
        <div>
            <Leader comeback="Назад до головної сторінки" text="пропоную різноманітність навичок" to="/logo"/>
        </div>
        <div className={c.content}>
            <div className={c.filterWrapper}>
                <div className={c.filters}>
                    {filters.map((f) => {
                        return (
                            <button className={f.id === currentJob.id ? c.active : c.button} onClick={() => {
                                handleFilter(f.id)
                                setCurrentJob(f)
                            }}>{f.name}</button>
                        )
                    })}
            </div>
            </div>
            <div className={c.container}>
                {jobs.map((m) => {
                    return (
                        <div className={c.item}>
                            <NavLink className={c.client} to={`/work/${m.id}`}><InformativeBlog img={m.background}
                                                                                        awards={m.awards}
                                                                                        text={m.projectName}
                                                                                        width={"100%"}
                                                                                        author={m.fullName}/></NavLink>
                        </div>
                    )
                })}</div>
        </div>
        <Journal journal={""}/>
    </div>
}

export default Work;