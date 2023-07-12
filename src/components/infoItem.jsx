import React from "react";


function InfoItem(props) {
    return (
        <div className="items">
            <div className="item__logo">
                <img src={props.src} alt="" />
            </div>
            <div className="item__description">
                <span className='main__text'>{props.mainText}</span><br />
                <span className='text'>{props.text}</span>
            </div>
        </div>
    )
}





export default InfoItem