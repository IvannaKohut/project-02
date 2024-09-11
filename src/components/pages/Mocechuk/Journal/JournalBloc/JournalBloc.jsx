import React, {useEffect, useState} from "react";
import c from "./JournalBloc.module.scss"
import InformativeBlog from "../../../../comon/InformativeBlog";
import axios from "axios";

const JournalBloc =(props)=>{
    const [journal, setJournal] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/projects')
            .then(data => {
                setJournal(data.data.data.data.journal);
                console.log(data);

            })
    }, []);

    return(
        <div className={c.journal_bloc}>
            {journal.map((j)=>{
                return <div className={c.item_2}>
                    <InformativeBlog img={j.background}  width="100%" awards={j.title}
                                     info={j.description} date={j.date}/>
                </div>
            })

            }

        </div>
    )
}

export default JournalBloc;