import React from "react";

export default function Programmer(props) {
    return (
        <div className="frontend">
            <div className="ava">
                <img src={props.item.img} alt="" />
            </div>
            <div className="descr">
                <div className="title__text">
                    <div className="joska">
                        <h3 className='awesome'>
                            Awesome Service!
                        </h3>
                        <img src="https://dora-react.vercel.app/images/bg_elements/feedback-element.svg" alt="" />
                    </div><br />
                    <span className="mnogo">
                        {props.item.title}
                    </span><br />
                    <span className="name">
                        <span className="all">{props.item.name}</span> <br />
                        {props.item.work}
                    </span>
                    <div className="stars">
                        <img src="https://dora-react.vercel.app/images/icons/Star.svg" alt="" />
                        <img src="https://dora-react.vercel.app/images/icons/Star.svg" alt="" />
                        <img src="https://dora-react.vercel.app/images/icons/Star.svg" alt="" />
                        <img src="https://dora-react.vercel.app/images/icons/Star.svg" alt="" />
                        <img src="https://dora-react.vercel.app/images/icons/Star.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}