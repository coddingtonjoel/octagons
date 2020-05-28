import React from "react";

const Member = (props) => {
    return (
        <div className="member">
            <div className="member-info">
                <img src={props.img} alt="" />
                <p className="member-name">{props.name}</p>
                <p className="member-title">{props.title}</p>
            </div>
            <div className="member-desc">
                <p>{props.desc}</p>
            </div>
            <div className="stripe"></div>
        </div>
    );
};

export default Member;
