import React from "react";
import projectlist from "../projectlist";

const Projects = () => {
    return (
        <div className="projects">
            <div className="about-page-header">
                <div className="heading-container">
                    <h3 className="heading-white">our work</h3>
                </div>
            </div>
            <div className="projects-container">
                {/* IMPAPER */}
                <div className="project">
                    <img
                        className="project-logo"
                        src={projectlist[0].companyLogo}
                        alt=""
                    />
                    <hr />
                    <p>{projectlist[0].desc}</p>
                    <blockquote>
                        "{projectlist[0].testamonial}"
                        <br />
                        <br />
                        {projectlist[0].testamonialAuthor}
                    </blockquote>
                    <div className="project-img-container">
                        <img
                            className="project-img"
                            src={projectlist[0].img1}
                            alt=""
                        />
                        <img
                            className="project-img"
                            src={projectlist[0].img2}
                            alt=""
                        />
                        <img
                            className="project-img"
                            src={projectlist[0].img3}
                            alt=""
                        />
                    </div>
                    <a
                        className="waves-effect btn-flat modal-trigger"
                        href="#modal1">
                        View Pinterest Playbook
                    </a>
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <iframe
                                className="modal-slides"
                                src="https://docs.google.com/presentation/d/e/2PACX-1vQCuu7Cl93I4urJw8i6TaAZ0-AxFDH-I7y0hB03iFieZ2Me_dD3GmtfqoF2ctw3g3BBxZPH-dgMsv-q/embed?start=false&loop=false&delayms=3000"
                                frameBorder="0"
                                title="Pinterest Playbook"
                                width="950"
                                height="569"
                                allowFullScreen={true}
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"></iframe>
                        </div>
                    </div>
                </div>
                {/* M+B */}
                <div className="project">
                    <img
                        className="project-logo"
                        src={projectlist[1].companyLogo}
                        alt=""
                    />
                    <hr />
                    <p>{projectlist[1].desc}</p>
                    <blockquote>
                        "{projectlist[1].testamonial}"
                        <br />
                        <br />
                        {projectlist[1].testamonialAuthor}
                    </blockquote>
                    <div className="project-img-container">
                        <img
                            className="project-img"
                            src={projectlist[1].img1}
                            alt=""
                        />
                        <img
                            className="project-img"
                            src={projectlist[1].img2}
                            alt=""
                        />
                        <img
                            className="project-img"
                            src={projectlist[1].img3}
                            alt=""
                        />
                    </div>
                    <a
                        className="waves-effect btn-flat modal-trigger"
                        href="#modal2">
                        View Content Strategy Guide
                    </a>
                    <a
                        className="waves-effect btn-flat modal-trigger project-external-link"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.canva.com/design/DAEAYkqZN28/lgVJ17GcnYGlp71ATsNz0g/view?utm_content=DAEAYkqZN28&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu#1">
                        View Brand Guide
                    </a>
                    <a
                        className="waves-effect btn-flat project-external-link"
                        href={`${process.env.PUBLIC_URL}/static/mb-mockups.zip`}
                        download>
                        Download Mockups
                    </a>
                    <div id="modal2" className="modal">
                        <div className="modal-content">
                            <iframe
                                className="modal-slides"
                                src="https://docs.google.com/presentation/d/e/2PACX-1vSzOIc--OZ_GmgKYenmfEINLVlj-3SCWPYOW9XQ4cOrwlZLbJxC0TUl7tqBzzWuKOZLqkOtqVhp7LyA/embed?start=false&loop=false&delayms=3000"
                                frameBorder="0"
                                title="Milk + Brookies Brand Guide"
                                width="950"
                                height="569"
                                allowFullScreen={true}
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"></iframe>
                        </div>
                    </div>
                </div>
                {/* IVY'S TEA */}
                <div className="project">
                    <img
                        className="project-logo"
                        src={projectlist[2].companyLogo}
                        alt=""
                        style={{ borderRadius: "12px" }}
                    />
                    <hr />
                    <p>{projectlist[2].desc}</p>
                    <blockquote>
                        "{projectlist[2].testamonial}"
                        <br />
                        <br />
                        {projectlist[2].testamonialAuthor}
                    </blockquote>
                    <div className="project-img-container">
                        <img
                            className="project-img"
                            src={projectlist[2].img1}
                            alt=""
                        />
                        <img
                            className="project-img"
                            src={projectlist[2].img2}
                            alt=""
                        />
                        <img
                            className="project-img"
                            src={projectlist[2].img3}
                            alt=""
                        />
                    </div>
                    <a
                        className="waves-effect btn-flat modal-trigger"
                        href="#modal3">
                        View Instagram Ad Campaign
                    </a>
                    <a
                        className="waves-effect btn-flat project-external-link"
                        href={`${process.env.PUBLIC_URL}/static/ivys-tea-mockup.pdf`}
                        download>
                        Download Mockups
                    </a>
                    <div id="modal3" className="modal">
                        <div className="modal-content">
                            <iframe
                                className="modal-slides"
                                src="https://docs.google.com/presentation/d/e/2PACX-1vRuWsGLAqMzcFRypUDJY8JhK97SXwy93CBakRiAAAcD9tmLhHN5pP1t5oGNJD28OELLjD859DAZHsEq/embed?start=false&loop=false&delayms=3000"
                                frameBorder="0"
                                title="Ivy's Tea Instagram Campaign"
                                width="950"
                                height="569"
                                allowFullScreen={true}
                                mozallowfullscreen="true"
                                webkitallowfullscreen="true"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
