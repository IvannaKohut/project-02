import React from "react";

const InformativeBlog = (props) => {
    return <div>
        <img src={props.img} />
        <div>
            <div>{props.name}</div>
            <div>{props.author}</div>
        </div>
    </div>
}

export default InformativeBlog;