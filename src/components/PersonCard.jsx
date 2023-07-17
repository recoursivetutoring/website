import React from "react";
import "../css/personCard.css";

const PersonCard = (props) => {
    return (
        <div className="member-card">
            <div className="member-card-heading" style={{backgroundColor: (props.colorOne ? " " + props.colorOne : "")}}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className="member-card-body">
                <h4 className="name">{props.name}</h4>
                <p>{props.description}</p>
                <div className="member-card-footer">
                    {
                        props.links.map((link, index) => {
                            return (
                                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                                    <i className={link.icon}></i>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PersonCard;