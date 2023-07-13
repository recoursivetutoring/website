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
                        description="Scratch is a block-based visual programming language and online community targeted primarily at children. Scratch is really fun and I love Scratch haha just making this sentence realllyly resaallly long erfife rnew line hahahd eiwnd ewoi ew fowefowefrnew line hahahd eiwnd ewoi ew "
                        image={ScratchLogo}
                    />
                    <Card 
                        title="Python"
                        description="Scratch is a block-based visual programming language and online community targeted primarily at children."
                        image={PythonLogo}
                    />
                    <Card 
                        title="Web Development"
                        description="Scratch is a block-based visual programming language and online community targeted primarily at children."
                        image={WebDevLogo}
                    />
                </div>
            </main>
        </>
    )
}

export default Programs;