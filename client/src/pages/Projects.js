import React from "react";
import Project from "../components/Project";
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
                {projectlist.map((project) => {
                    return (
                        <Project
                            companyLogo={project.companyLogo}
                            desc={project.desc}
                            img1={project.img1}
                            img2={project.img2}
                            img3={project.img3}
                            projectSrc={project.projectSrc}
                            testamonial={project.testamonial}
                            testamonialAuthor={project.testamonialAuthor}
                            key={project.desc}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
