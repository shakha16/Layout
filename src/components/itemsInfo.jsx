import React from "react";

function ItemsInfo(props) {
    
    return (
        <div className="itemss" id={props.item.id}>
            <div className="itemss__info">
                <div className="itemss__info__logo" style={{backgroundColor : props.item.color}}>
                    <img src={props.item.logo} alt="" />    
                </div>
                <span className="textt">{props.item.text}</span>
                <span className="title">{props.item.description}</span>
            </div>
        </div>
    )
}

export default ItemsInfo