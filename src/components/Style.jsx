import React from "react";

export default function Style(props) {
    return (
        <div className="style__item">
            <div className="img">
                <span className="mod">{props.item.date}</span>
                <img src={props.item.img} alt="" />
            </div>
            <h6 className='mainn'>{props.item.text}</h6>
            <h6 className="nomain">{props.item.title}</h6>
        </div>
    )
}