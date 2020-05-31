import React from "react";
import logo from "../images/Octagons.svg";

const Submitted = () => {
    return (
        <div className="submitted">
            <img src={logo} alt="" />
            <div className="submitted-text">
                <p className="submitted-head">thank you!</p>
                <p className="submitted-sub">
                    we will get back to you as soon as we can.
                </p>
            </div>

            <a href="/">return to home</a>
        </div>
    );
};

export default Submitted;
