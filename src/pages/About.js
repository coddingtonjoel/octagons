import React from "react";
import logo from "../images/Octagons.svg";
import Member from "../components/Member";
import members from "../members";

const About = () => {
    return (
        <div className="about-page">
            <div className="about-page-header">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                <div className="heading-container">
                    <h3 className="heading-white">about octagons</h3>
                </div>
            </div>
            <div className="about-page-body">
                <div className="about-page-body-team">
                    <div className="heading-container">
                        <h3 className="heading">our team</h3>
                    </div>
                    {members.map((member) => {
                        return (
                            <Member
                                name={member.name}
                                title={member.title}
                                img={member.img}
                                desc={member.desc}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default About;
