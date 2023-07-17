import React from "react";
import Header from "../components/Header";
import "../css/Register.css";

const Register = () => {
    return (
        <>
        <Header />
        <main className="register-body">
            <div className="jumbotron">Reserve a class</div>
            <p className="">Thank you for choosing us! Please fill out the form below.</p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0e9gD_qmu1xh1e52xPsjk7jUOhk13OW-QlKsHksbi7e-eTQ/viewform?embedded=true" width="640" height="2774" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </main>
        </>
    )
}

export default Register;