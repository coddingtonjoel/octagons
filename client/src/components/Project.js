import React from "react";

const Project = (props) => {
    return (
        <div className="project">
            <img className="project-logo" src={props.companyLogo} alt="" />
            <hr />
            <p>{props.desc}</p>
            <blockquote>
                "{props.testamonial}"
                <br />
                <br />
                {props.testamonialAuthor}
            </blockquote>
            <div className="project-img-container">
                <img className="project-img" src={props.img1} alt="" />
                <img className="project-img" src={props.img2} alt="" />
                <img className="project-img" src={props.img3} alt="" />
            </div>
            <a href={props.projectSrc} download>
                Click here to view the full project.
            </a>
        </div>
    );
};

export default Project;
