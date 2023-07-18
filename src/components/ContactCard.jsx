import React from "react";
import "../css/contactCard.css";

const ContactCard = (props) => {
    return (
        <div className="contactCard">
            <div className="contactCard-body">
                <h4 className="title">{props.title}</h4>
                <p>{props.description}</p>
                <a href = {props.link}> {props.linkText}</a>
            </div>
        </div>
    )
}

export default ContactCard;