import React from "react";
import scroll from "../images/scroll.svg";
import MediaQuery from "react-responsive";

const Contact = () => {
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="contact">
            <div className="heading-container">
                <h3 className="heading-white">contact us</h3>
            </div>
            <div className="contact-text white-text center">
                <p>
                    if your business is interested in partnering with us, send
                    us an email at
                </p>
                <p className="contact-text-email">admin@octagons.co</p>
                <p>and we will get back to you as soon as we can.</p>
            </div>
            <div className="contact-copyright white-text center">
                <p>Octagons© 2020</p>
            </div>
            <MediaQuery minDeviceWidth={701}>
                <a onClick={toTop} href="#!" className="scroll">
                    <img src={scroll} alt="" />
                </a>
            </MediaQuery>
        </div>
    );
};

export default Contact;
