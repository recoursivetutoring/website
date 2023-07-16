import React from "react";
import ContactCard from "../components/ContactCard";
import Header from "../components/Header";
import "../css/Contact.css";
const Contact = () => {
    return (
        <>
        <Header/>
        <main className="contact-body">
            <h2>Contact Us</h2>
           
            <ContactCard 
                title = "Email" 
                description = "​Please let us know if you have any questions, comments, or concerns. We'd love to hear from you!" 
                link = "mailto:contact.recoursive@gmail.com"
            />
            
        </main>
        </>
    )
}

export default Contact;