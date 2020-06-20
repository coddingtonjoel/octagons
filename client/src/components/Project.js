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
            <a className="waves-effect btn-flat modal-trigger" href="#modal1">
                Click here to view the full project
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
    );
};

export default Project;
