import React from "react";


function Btn(props) {
    return (
        <button className="btn" id={props.id}>{props.text}</button>
    )
}

export default Btn