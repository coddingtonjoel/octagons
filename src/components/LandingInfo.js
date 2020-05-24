import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import person from "../images/person.svg";

const LandingInfo = () => {
    return (
        <div className="info">
            <ScrollAnimation
                animateIn="fadeInUp"
                duration="1.5"
                animateOnce="true">
                <div className="heading-container">
                    <h3 className="heading">who we are</h3>
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="fadeInUp"
                duration="1.5"
                delay="500"
                animateOnce="true">
                <div className="info-people">
                    <img src={person} alt="" />
                    <img src={person} alt="" />
                    <img src={person} alt="" />
                    <img src={person} alt="" />
                    <img src={person} alt="" />
                    <img src={person} alt="" />
                    <img src={person} alt="" />
                </div>
            </ScrollAnimation>
            <div className="info-who">
                <ScrollAnimation
                    animateIn="fadeInUp"
                    duration="1.5"
                    delay="1000"
                    animateOnce="true">
                    <p>
                        In light of COVID-19’s effects on small businesses,
                        Octagons was formed under a common goal: to connect
                        brands with their online audience. We strive to be more
                        than an agency because it really isn’t about us. It’s
                        about you. Ultimately, we hope to complete our 8th side
                        of the octagon with you — the impact that we make on
                        your business.
                    </p>
                    <br />
                    <p>
                        Octagons is a full-service, student-run marketing &
                        advertising agency based in the United States. We’re a
                        diverse group of creative and passionate storytellers
                        from the business, advertising, and technology fields
                        coming together to deliver inventive marketing
                        campaigns, from research to strategy to execution.
                    </p>
                </ScrollAnimation>
            </div>
            <div className="info-what">
                <ScrollAnimation
                    animateIn="fadeInUp"
                    duration="1.5"
                    animateOnce="true"
                    delay="500">
                    <div className="heading-container">
                        <h3 className="heading">what we offer</h3>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default LandingInfo;
