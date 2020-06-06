import React, { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import cloud from "../images/cloud.svg";
import MediaQuery from "react-responsive";

const LandingInfo = () => {
    return (
        <Fragment>
            <MediaQuery minDeviceWidth={701}>
                <div className="info">
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        duration={1.5}
                        animateOnce={true}>
                        <div className="heading-container">
                            <h3 className="heading">who we are</h3>
                        </div>
                    </ScrollAnimation>
                    <div className="info-who">
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            duration={1.5}
                            delay={500}
                            animateOnce={true}>
                            <p>
                                In light of COVID-19’s effects on small
                                businesses, Octagons was formed under a common
                                goal: to connect brands with their online
                                audience. We strive to be more than an agency
                                because it really isn’t about us. It’s about
                                you. Ultimately, we hope to complete our eighth
                                side of the octagon with you — the impact that
                                we make on your business.
                            </p>
                            <br />
                            <p>
                                Octagons is a full-service, Gen Z-run marketing
                                & advertising agency based in the United States.
                                We’re a diverse group of seven creative and
                                passionate storytellers from the business,
                                advertising, and technology fields coming
                                together to deliver inventive marketing
                                campaigns, from research to strategy to
                                execution.
                            </p>
                        </ScrollAnimation>
                    </div>
                    <div className="info-what">
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            duration={1.5}
                            animateOnce={true}
                            delay={500}>
                            <div className="heading-container">
                                <h3 className="heading">what we offer</h3>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            duration={1.5}
                            animateOnce={true}
                            delay={500}>
                            <div className="info-what-cloud-container">
                                <img
                                    className="info-what-cloud"
                                    src={cloud}
                                    alt=""
                                />
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            duration={1.5}
                            animateOnce={true}
                            delay={500}>
                            <div className="info-what-sub-container">
                                <p className="info-what-sub">
                                    And we offer all our business support for{" "}
                                    <span>free</span> — no strings attached.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={700}>
                <div className="info">
                    <div className="heading-container">
                        <h3 className="heading">who we are</h3>
                    </div>
                    <div className="info-who">
                        <p>
                            In light of COVID-19’s effects on small businesses,
                            Octagons was formed under a common goal: to connect
                            brands with their online audience. We strive to be
                            more than an agency because it really isn’t about
                            us. It’s about you. Ultimately, we hope to complete
                            our 8th side of the octagon with you — the impact
                            that we make on your business.
                        </p>
                        <br />
                        <p>
                            Octagons is a full-service, student-run marketing &
                            advertising agency based in the United States. We’re
                            a diverse group of creative and passionate
                            storytellers from the business, advertising, and
                            technology fields coming together to deliver
                            inventive marketing campaigns, from research to
                            strategy to execution.
                        </p>
                    </div>
                    <div className="info-what">
                        <div className="heading-container">
                            <h3 className="heading">what we offer</h3>
                        </div>
                        <div className="info-what-cloud-container-m">
                            <p>GRAPHIC DESIGN</p>
                            <p>SEO</p>
                            <p>WEB DESIGN</p>
                            <p>WIREFRAMES</p>
                            <p>BUSINESS STRATEGY</p>
                            <p>SOCIAL MEDIA ADVERTISING</p>
                            <p>CONTENT CREATION</p>
                            <p>BRANDING</p>
                            <p>UX/UI</p>
                            <p>MARKETING</p>
                        </div>
                        <div className="info-what-sub-container">
                            <p className="info-what-sub">
                                And we offer all our business support for{" "}
                                <span>free</span> — no strings attached.
                            </p>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </Fragment>
    );
};

export default LandingInfo;
