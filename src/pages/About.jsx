import React from "react";
import Header from "../components/Header";
import PersonCard from "../components/PersonCard";
import "../css/About.css";

const About = () => {
    return (
        <>
        <Header />
        <main className="about-body">
            <h2>About Us</h2>

            <section className="card-grid">
                <div className="vert-2">
                    <h3>Our Mission</h3>
                    <p className="about-card-text">
                        Computer programming skills have become fundamental to the advancement of technology over time. Even so, school curriculums often fail to provide the needed expertise, with costly private lessons being the only alternative. With our program, we strive to bring together local communities and provide free in-person coding classes for the next generation.
                    </p>
                </div>
                <div className="horiz-2">
                    <h3>Our Program</h3>
                    <p className="about-card-text">
                        If you are a local community leader and would like to host a coding course at your location, we offer our free teaching services. This includes any public location from a library to a community organization. 
                        <br/>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        The format of the program is a one hour session that takes place 1-2 times a week. We offer different lengths of courses, from 6 weeks to 10 weeks. 
                    </p>
                </div>
                
                <div className="vert-2">
                    <h3>Who can join?</h3>
                    <p className="about-card-text">
                        This course is designed mainly for students in grades 3-8. No prior coding experience is required, as our course is designed as a introduction to various programming languages. Additionally, we teach fundamental computer science concepts and paradigms that can be applied to any programming language. 
                    </p>
                </div>
                <div className="horiz-2">
                    <p className="about-card-text center-text">
                        As we offer free teaching services to local community centers, we expect that students will not be charged to attend.
                    </p>
                </div>
            </section>

            <h2>Meet the Team</h2>
            <section id="members" className="members">
                <div className="member-card-deck">
                    <PersonCard
                        name="Mudasir"
                        school="Bergen County Academies"
                        description="Web Developer / Course Creator / Instructor"
                        image="https://avatars.githubusercontent.com/u/56193495?v=4"
                        links={[
                            {
                                icon: "fab fa-github",
                                link: "https://www.github.com/mud-ali"
                            },
                            {
                                icon: "fa-regular fa-envelope",
                                link: "mailto:mmxali22@gmail.com"
                            }
                        ]}
                    />
                    <PersonCard
                        name="Noah Kim"
                        school="Bergen County Technical High School"
                        description="Founder / Course Creator / Instructor"
                        image="https://avatars.githubusercontent.com/u/56193495?v=4"
                        links={[
                            {
                                icon: "fa-regular fa-envelope",
                                link: "mailto:email@example.com"
                            }
                        ]}
                    />
                    <PersonCard
                        name="Isaac Kim"
                        school="Bergen County Academies"
                        description="Founder"
                        image="https://avatars.githubusercontent.com/u/56193495?v=4"
                        links={[
                            {
                                icon: "fa-regular fa-envelope",
                                link: "mailto:email@example.com"
                            }
                        ]}
                    />
                    <PersonCard
                        name="Jake Park"
                        description="Wow this is such a cool description"
                        image="https://avatars.githubusercontent.com/u/56193495?v=4"
                        links={[
                            {
                                icon: "fa-regular fa-envelope",
                                link: "mailto:email@example.com"
                            }
                        ]}
                    />
                    <PersonCard
                        name="Jin Chang"
                        description="Wow this is such a cool description"
                        image="https://avatars.githubusercontent.com/u/56193495?v=4"
                        links={[
                            {
                                icon: "fa-regular fa-envelope",
                                link: "mailto:email@example.com"
                            }
                        ]}
                    />
                    <PersonCard
                        name="Jack Remmert"
                        description="Wow this is such a cool description"
                        image="https://avatars.githubusercontent.com/u/56193495?v=4"
                        links={[
                            {
                                icon: "fa-regular fa-envelope",
                                link: "mailto:email@example.com"
                            }
                        ]}
                    />
                    <PersonCard
                        name="Jaden Manuel"
                        description="Wow this is such a cool description"
                        image="https://avatars.githubusercontent.com/u/56193495?v=4"
                        links={[
                            {
                                icon: "fa-regular fa-envelope",
                                link: "mailto:email@example.com"
                            }
                        ]}
                    />
                    <PersonCard
                        name="Evan Cabrera"
                        description="Wow this is such a cool description"
                        image="https://avatars.githubusercontent.com/u/56193495?v=4"
                        links={[
                            {
                                icon: "fa-regular fa-envelope",
                                link: "mailto:email@example.com"
                            }
                        ]}
                    />
                </div>
            </section>
        </main>
        </>
    )
}

export default About;