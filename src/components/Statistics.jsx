import React from "react";


function Statistic(props) {
    return (
        <div className="statistics__el" id={props.item.id}>
            <div className="statistic__item">
                <div className="static__text">
                    <h6 className='textStat'>{props.item.name}</h6>
                    <h6 className='proc'>{props.item.percent}</h6>
                </div>
                <div className="static__line">
                    <div className="static__div" style={{width : props.item.percent}}></div>
                </div>
            </div>
        </div>
    )
}

export default Statistic