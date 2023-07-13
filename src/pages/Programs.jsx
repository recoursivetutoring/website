import React from "react";
import Header from "../components/Header";
import "../css/Programs.css";
import Card from "../components/Card";
import ScratchLogo from "../assets/scratch.png";
import PythonLogo from "../assets/python.png";
import WebDevLogo from "../assets/webdev.jpg";

const Programs = () => {
    return (
        <>
            <Header />
            <main className="programs-body">
                <h2>Programs</h2>
                <div className="card-deck">
                    <Card 
                        title="Scratch"
                        description="Scratch is a fun and easy to use block-based programming language. Developed at MIT, it was created to make fundamental programming concepts accessible to young learners."
                        image={ScratchLogo}
                    />
                    <Card 
                        title="Python"
                        description="Python is a high-level, general-purpose programming language. It has a simple, beginner friendly syntax, but has advanced applications in the real world for machine learning, data science, and much more."
                        image={PythonLogo}
                    />
                    <Card 
                        title="Web Development"
                        description="As more and more technology moves into the web browser, learning HTML, CSS, & Javascript becomes more and more powerful. Driving the internet revolution, these technologies can create anything — from beautiful interfaces to powerful web applications."
                        image={WebDevLogo}
                    />
                </div>
            </main>
        </>
    )
}

export default Programs;