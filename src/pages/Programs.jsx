import React from "react";
import Header from "../components/Header";
//imported home.css to keep a general theme(?)
import "../css/Home.css";
//external other css for the card stuff
import "../css/Programs.css";
const Programs = () => {
    return (
        <>
            <Header />
            <main>
                {/* WARNING: IF WANT ANOTHER ROW NEED TO CREATE ANOTHER CARD DECK */}
                <h2>Programs</h2>
                <div class="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h4 class="title">Scratch</h4>
                            <p>Description</p>
                            <p>Date:</p>
                            <p>Location:</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            {/* image */}
                            <h4 class="title">Python</h4>
                            <p>Description</p>
                            <p>Date:</p>
                            <p>Location:</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Programs;