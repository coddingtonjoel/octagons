import React, { Fragment } from "react";
import Member from "../components/Member";
import members from "../members";

const Team = () => {
    return (
        <Fragment>
            <div className="about-page-header">
                <div className="heading-container">
                    <h3 className="heading-white">our team</h3>
                </div>
            </div>
            <div className="about-page-body-team">
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
        </Fragment>
    );
};

export default Team;
