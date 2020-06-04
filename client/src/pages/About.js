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
                <div className="heading-container">
                    <h3 className="heading">our story</h3>
                </div>
                <p className="about-page-text">
                    When the COVID-ridden economic downturn weakened many
                    businesses’ financial stability, countless job and
                    internship offers were rescinded for millions of hopefuls.
                    <br />
                    <br />
                    Initially discouraged, many turned to LinkedIn desperately
                    seeking any hiring companies. Then, a user by the name of
                    Jerry Lee, COO of Wonsulting, shared a brief post
                    specifically dedicated to college students or graduates who
                    have had their internships cancelled. It called for the
                    students to comment under his post sharing their skill sets,
                    connect with others with similar skill sets, and create a
                    project to share at the end of the summer. It was in this
                    comment section where seven individuals met and eventually
                    formed Octagons.
                    <br />
                    <br />
                    The agency was established with altruistic motivations;
                    although the seven were determined to grow in their own
                    skill sets, they also wanted to help others along the way.
                    Being technologically proficient marketing enthusiasts, they
                    believed they could effectively make a difference by
                    utilizing their knowledge in the digital landscape to help
                    revitalize small businesses in the face of adversity.
                    <br />
                    <br />
                    Just as Octagons was built from the unity of like-minded
                    individuals, the same sense of unity extends into their
                    partnerships with small businesses. Although the agents
                    complete seven sides of the octagon, they hope to complete
                    their eighth side by extending a helping hand to any small
                    business in need.
                </p>
                <div className="heading-container">
                    <h3 className="heading mission">mission and vision</h3>
                </div>
                <p className="about-page-text center">
                    Octagon's mission is to aid small businesses affected by
                    COVID-19 in reclaiming their digital platform by providing
                    diverse expertise in the digital landscape. To achieve this
                    mission, we find small businesses and help them to unleash
                    their digital potential so they can pave a new path towards
                    growth in a diverse and competitive market.
                </p>
                <div className="heading-container">
                    <h3 className="heading">our values</h3>
                </div>
                <ul className="about-page-text center">
                    <li>
                        <div>
                            <span className="about-page-text-large">
                                QUALITY
                            </span>
                            <span className="about-page-text-value">
                                We provide generous service and an outstanding
                                final product to our clients.
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="about-page-text-large">
                                COMMITMENT
                            </span>
                            <span className="about-page-text-value">
                                We develop positive relationships with our
                                clients while meeting their needs.
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="about-page-text-large">
                                TEAMWORK
                            </span>
                            <span className="about-page-text-value">
                                We work together, utilizing our diverse skill
                                sets, to fully meet the needs of our clients.
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="about-page-text-large">
                                PASSION
                            </span>
                            <span className="about-page-text-value">
                                We exhibit a strong passion for helping others
                                and making a difference.
                            </span>
                        </div>
                    </li>
                </ul>
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
                                key={member.name}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default About;
