import React from "react";
import Header from "../components/Header";
import "../css/Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <h2>Recoursive</h2>
                <a href="/programs" className="top-link">Learn more about our programs</a>
                <a href="/register" className="top-link">Reserve a class</a>
            </main>
        </>
    )
}

export default Home;