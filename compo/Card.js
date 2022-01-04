import React from "react"

export default function Card(props) {
    let soldOrOnline
    if (props.openSpots === 0) 
        soldOrOnline = "Sold out"
    else if (props.location === "Online") 
        soldOrOnline = "Online"

    
    return (
        <div className="card">
            {soldOrOnline && <div className="card--badge">{soldOrOnline}</div>}
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}